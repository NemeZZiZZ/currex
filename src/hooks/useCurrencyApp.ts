import { useState, useEffect, useCallback } from "react";
import { getCurrencyName } from "../utils/currencyNames";
import { currencyToFlag } from "@/utils/flags";
import { loadJSON, saveJSON } from "@/utils/storage";
import { useLanguage } from "@/hooks/useLanguage";

export interface CryptoEntry {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface AvailableCurrency {
  icon: string;
  name: string;
  isCrypto: boolean;
}

export interface CurrencyAppState {
  selectedCurrencies: string[];
  currentValues: Record<string, number>;
  availableCurrencies: Record<string, AvailableCurrency>;
  lastUpdate: Date | null;
  activeTab: string;
  isRefreshing: boolean;
  hasError: boolean;
  favorites: string[];
  handleInput: (code: string, value: string) => void;
  addCurrency: (code: string) => void;
  replaceCurrency: (index: number, newCode: string) => void;
  removeCurrency: (index: number) => void;
  reorderCurrency: (from: number, to: number) => void;
  resetCurrencies: () => void;
  setActiveTab: (tab: string) => void;
  refreshRates: () => Promise<void>;
  toggleFavorite: (code: string) => void;
  cryptoList: Record<string, CryptoEntry>;
}

const CRYPTO_CACHE_MS = 60 * 60 * 1000;

export default function useCurrencyApp(): CurrencyAppState {
  const [baseCurrency] = useState("USD");
  const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>([]);
  const [currentValues, setCurrentValues] = useState<Record<string, number>>(
    {},
  );
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>(
    {},
  );
  const [cryptoList, setCryptoList] = useState<Record<string, CryptoEntry>>({});
  const [availableCurrencies, setAvailableCurrencies] = useState<
    Record<string, AvailableCurrency>
  >({});
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [activeTab, setActiveTab] = useState("fiat");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(() =>
    loadJSON<string[]>("favorites", []),
  );
  // Track the app language reactively so currency names re-localize when it
  // changes. (getCurrencyName uses Intl.DisplayNames with this locale.)
  const locale = useLanguage();

  // Load saved currencies from localStorage
  useEffect(() => {
    const saved = loadJSON<string[] | null>("selectedCurrencies", null);
    setSelectedCurrencies(saved && saved.length > 0 ? saved : ["USD", "EUR"]);

    setCurrentValues(loadJSON<Record<string, number>>("currentValues", {}));
  }, []);

  // Load crypto list
  const loadCryptoList = useCallback(async () => {
    const cacheTime = localStorage.getItem("cryptoListTime");
    const now = Date.now();
    const cached = loadJSON<Record<string, CryptoEntry> | null>(
      "cryptoList",
      null,
    );

    if (cached && cacheTime && now - parseInt(cacheTime) < CRYPTO_CACHE_MS) {
      setCryptoList(cached);
      return;
    }

    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1",
      );
      if (!response.ok) throw new Error(`CoinGecko ${response.status}`);
      const coins: Array<{
        id: string;
        symbol: string;
        name: string;
        image: string;
        current_price: number;
      }> = await response.json();
      const list: Record<string, CryptoEntry> = {};

      coins.forEach((coin) => {
        const symbol = coin.symbol.toUpperCase();
        if (!list[symbol]) {
          list[symbol] = {
            id: coin.id,
            name: coin.name,
            image: coin.image,
            price: coin.current_price,
          };
        }
      });

      setCryptoList(list);
      saveJSON("cryptoList", list);
      localStorage.setItem("cryptoListTime", now.toString());
    } catch (error) {
      console.error("Error loading crypto list:", error);
      throw error;
    }
  }, []);

  useEffect(() => {
    loadCryptoList().catch(() => {
      /* error handled in refreshRates on manual refresh */
    });
  }, [loadCryptoList]);

  // Load exchange rates
  const fetchExchangeRates = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`,
      );
      if (!response.ok) throw new Error(`rates ${response.status}`);
      const data: { rates: Record<string, number> } = await response.json();
      // The base currency is missing from the API response — add it so
      // conversion through it works correctly (fixes USD → 0 bug).
      data.rates[baseCurrency] = 1;
      setExchangeRates(data.rates);
      setLastUpdate(new Date());
      setHasError(false);
    } catch (error) {
      console.error("Error fetching rates:", error);
      throw error;
    }
  }, [baseCurrency]);

  useEffect(() => {
    fetchExchangeRates().catch(() => setHasError(true));
  }, [fetchExchangeRates]);

  // Build the list of available currencies
  useEffect(() => {
    const available: Record<string, AvailableCurrency> = {};

    Object.keys(exchangeRates).forEach((code) => {
      available[code] = {
        icon: currencyToFlag(code) || "💱",
        name: getCurrencyName(code, locale) || code,
        isCrypto: false,
      };
    });

    Object.entries(cryptoList).forEach(([code, crypto]) => {
      available[code] = {
        icon: crypto.image || "◈",
        name: crypto.name,
        isCrypto: true,
      };
    });

    setAvailableCurrencies(available);
  }, [exchangeRates, cryptoList, locale]);

  // Convert an amount between two currencies
  const convert = useCallback(
    (amount: number, fromCurrency: string, toCurrency: string): number => {
      const isFromCrypto = Object.prototype.hasOwnProperty.call(
        cryptoList,
        fromCurrency,
      );
      const isToCrypto = Object.prototype.hasOwnProperty.call(
        cryptoList,
        toCurrency,
      );

      if (isFromCrypto && isToCrypto) {
        const fromPrice = cryptoList[fromCurrency]?.price;
        const toPrice = cryptoList[toCurrency]?.price;
        if (!fromPrice || !toPrice) return 0;
        return (amount * fromPrice) / toPrice;
      }

      // Crypto → Fiat
      if (isFromCrypto && !isToCrypto) {
        const cryptoPrice = cryptoList[fromCurrency]?.price; // price in USD
        if (!cryptoPrice || !exchangeRates[toCurrency]) return 0;
        const amountInUSD = amount * cryptoPrice;
        return amountInUSD * exchangeRates[toCurrency];
      }

      // Fiat → Crypto
      if (!isFromCrypto && isToCrypto) {
        const cryptoPrice = cryptoList[toCurrency]?.price; // price in USD
        if (!cryptoPrice || !exchangeRates[fromCurrency]) return 0;
        const amountInUSD = amount / exchangeRates[fromCurrency];
        return amountInUSD / cryptoPrice;
      }

      const fromRate = exchangeRates[fromCurrency];
      const toRate = exchangeRates[toCurrency];
      if (!fromRate || !toRate) return 0;
      const amountInBase = amount / fromRate;
      return amountInBase * toRate;
    },
    [cryptoList, exchangeRates],
  );

  // Parse a locale-formatted number, correctly distinguishing thousands and
  // decimal separators by their position (last separator wins as decimal).
  const parseLocalNumber = (value: string): number => {
    let s = value.toString().replace(/[\s\u00A0]/g, "");
    const lastComma = s.lastIndexOf(",");
    const lastDot = s.lastIndexOf(".");
    if (lastComma > lastDot) {
      // comma is the decimal separator → drop dots, comma → dot
      s = s.replace(/\./g, "").replace(",", ".");
    } else {
      // dot is the decimal separator → drop commas
      s = s.replace(/,/g, "");
    }
    const parsed = parseFloat(s);
    return Number.isFinite(parsed) ? parsed : 0;
  };

  // Handle input on a currency field
  const handleInput = useCallback(
    (code: string, value: string) => {
      const numValue = parseLocalNumber(value);

      const newValues: Record<string, number> = { [code]: numValue };

      selectedCurrencies.forEach((targetCode) => {
        if (targetCode !== code) {
          newValues[targetCode] = convert(numValue, code, targetCode);
        }
      });

      setCurrentValues(newValues);
      saveJSON("currentValues", newValues);
    },
    [selectedCurrencies, convert],
  );

  // Add a currency to the list
  const addCurrency = useCallback(
    (code: string) => {
      setSelectedCurrencies((prev) => {
        if (prev.includes(code)) return prev;
        const newSelected = [...prev, code];
        saveJSON("selectedCurrencies", newSelected);

        const existingCurrency = newSelected.find(
          (c) => c !== code && (currentValues[c] ?? 0) > 0,
        );
        if (existingCurrency) {
          const existingValue = currentValues[existingCurrency] ?? 0;
          const convertedValue = convert(existingValue, existingCurrency, code);
          setCurrentValues((values) => ({ ...values, [code]: convertedValue }));
        }

        return newSelected;
      });
    },
    [currentValues, convert],
  );

  // Replace a currency at a given index
  const replaceCurrency = useCallback(
    (index: number, newCode: string) => {
      setSelectedCurrencies((prev) => {
        if (newCode !== prev[index] && prev.includes(newCode)) return prev;
        const newSelected = [...prev];
        newSelected[index] = newCode;
        saveJSON("selectedCurrencies", newSelected);

        const existingCurrency = newSelected.find(
          (c) => c !== newCode && (currentValues[c] ?? 0) > 0,
        );
        if (existingCurrency) {
          const existingValue = currentValues[existingCurrency] ?? 0;
          const convertedValue = convert(
            existingValue,
            existingCurrency,
            newCode,
          );
          setCurrentValues((values) => ({ ...values, [newCode]: convertedValue }));
        }

        return newSelected;
      });
    },
    [currentValues, convert],
  );

  // Remove a currency by index
  const removeCurrency = useCallback((index: number) => {
    setSelectedCurrencies((prev) => {
      const newSelected = prev.filter((_, i) => i !== index);
      saveJSON("selectedCurrencies", newSelected);
      return newSelected;
    });
  }, []);

  // Reset currencies to defaults (USD, EUR)
  const resetCurrencies = useCallback(() => {
    const defaults = ["USD", "EUR"];
    setSelectedCurrencies(defaults);
    setCurrentValues({});
    saveJSON("selectedCurrencies", defaults);
    saveJSON("currentValues", {});
  }, []);

  // Reorder currencies (drag-and-drop)
  const reorderCurrency = useCallback((from: number, to: number) => {
    setSelectedCurrencies((prev) => {
      if (
        from < 0 ||
        to < 0 ||
        from >= prev.length ||
        to >= prev.length ||
        from === to
      ) {
        return prev;
      }
      const newSelected = [...prev];
      const [moved] = newSelected.splice(from, 1);
      newSelected.splice(to, 0, moved as string);
      saveJSON("selectedCurrencies", newSelected);
      return newSelected;
    });
  }, []);

  // Toggle a currency as favorite
  const toggleFavorite = useCallback((code: string) => {
    setFavorites((prev) => {
      const next = prev.includes(code)
        ? prev.filter((c) => c !== code)
        : [...prev, code];
      saveJSON("favorites", next);
      return next;
    });
  }, []);

  // Refresh rates (fiat + crypto in parallel)
  const refreshRates = useCallback(async () => {
    setIsRefreshing(true);
    try {
      const results = await Promise.allSettled([
        fetchExchangeRates(),
        loadCryptoList(),
      ]);
      const failed = results.some((r) => r.status === "rejected");
      setHasError(failed);
    } finally {
      setIsRefreshing(false);
    }
  }, [fetchExchangeRates, loadCryptoList]);

  return {
    selectedCurrencies,
    currentValues,
    availableCurrencies,
    lastUpdate,
    activeTab,
    isRefreshing,
    hasError,
    favorites,
    handleInput,
    addCurrency,
    replaceCurrency,
    removeCurrency,
    reorderCurrency,
    resetCurrencies,
    setActiveTab,
    refreshRates,
    toggleFavorite,
    cryptoList,
  };
}
