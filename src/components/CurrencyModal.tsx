import { useState, useMemo } from "react";
import type { AvailableCurrency } from "@/hooks/useCurrencyApp";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IconTrash } from "@tabler/icons-react";
import { t } from "@/i18n/translations";
import CurrencyRow from "./CurrencyRow";

interface CurrencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (code: string) => void;
  onRemove: (() => void) | null;
  availableCurrencies: Record<string, AvailableCurrency>;
  selectedCurrencies: string[];
  favorites: string[];
  onToggleFavorite: (code: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isReplacing: boolean;
}

export default function CurrencyModal({
  isOpen,
  onClose,
  onSelect,
  onRemove,
  availableCurrencies,
  favorites,
  onToggleFavorite,
  activeTab,
  setActiveTab,
  isReplacing,
}: CurrencyModalProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filterEntry = (
    entry: [string, AvailableCurrency],
    search: string,
  ): boolean => {
    const [code, currency] = entry;
    const isCrypto = currency.isCrypto;
    const matchesTab = activeTab === "crypto" ? isCrypto : !isCrypto;
    if (!matchesTab) return false;
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      code.toLowerCase().includes(s) || currency.name.toLowerCase().includes(s)
    );
  };

  const filteredCurrencies = useMemo(() => {
    return Object.entries(availableCurrencies).filter((entry) =>
      filterEntry(entry, searchTerm),
    );
  }, [availableCurrencies, activeTab, searchTerm]);

  // Favorites for the active tab (hidden when searching)
  const favoriteCurrencies = useMemo(() => {
    if (searchTerm) return [];
    return filteredCurrencies.filter(([code]) => favorites.includes(code));
  }, [filteredCurrencies, favorites, searchTerm]);

  const restCurrencies = useMemo(() => {
    if (searchTerm) return filteredCurrencies;
    const favSet = new Set(favorites);
    return filteredCurrencies.filter(([code]) => !favSet.has(code));
  }, [filteredCurrencies, favorites, searchTerm]);

  const handleSelect = (code: string) => {
    onSelect(code);
    setSearchTerm("");
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
      setSearchTerm("");
    }
  };

  const handleRemove = () => {
    onRemove?.();
    setSearchTerm("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="flex flex-col sm:max-w-md h-[calc(var(--viewport-height,100vh)-32px)] max-h-150">
        <DialogHeader className="flex flex-col gap-2 pb-2">
          <DialogTitle className="mb-2">
            {isReplacing ? t().replaceCurrency : t().selectCurrency}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {t().selectCurrencyFromList}
          </DialogDescription>

          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as string)}
          >
            <TabsList className="w-full">
              <TabsTrigger value="fiat">{t().fiatCurrencies}</TabsTrigger>
              <TabsTrigger value="crypto">{t().cryptocurrencies}</TabsTrigger>
            </TabsList>
            <TabsContent value="fiat" />
            <TabsContent value="crypto" />
          </Tabs>

          <Input
            placeholder={t().search}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </DialogHeader>

        <div className="flex-1 overflow-y-auto -mx-4 px-2">
          {filteredCurrencies.length === 0 ? (
            <div className="py-8 text-center text-sm text-muted-foreground">
              {t().noCurrenciesFound}
            </div>
          ) : (
            <div className="flex flex-col">
              {favoriteCurrencies.length > 0 && (
                <>
                  <div className="px-3 pb-1 pt-2 text-xs font-medium text-muted-foreground">
                    {t().favorites}
                  </div>
                  {favoriteCurrencies.map(([code, currency]) => (
                    <CurrencyRow
                      key={code}
                      code={code}
                      currency={currency}
                      isFavorite={favorites.includes(code)}
                      onSelect={handleSelect}
                      onToggleFavorite={onToggleFavorite}
                    />
                  ))}
                  <div className="my-1 border-t border-border/60" />
                </>
              )}
              {restCurrencies.map(([code, currency]) => (
                <CurrencyRow
                  key={code}
                  code={code}
                  currency={currency}
                  isFavorite={favorites.includes(code)}
                  onSelect={handleSelect}
                  onToggleFavorite={onToggleFavorite}
                />
              ))}
            </div>
          )}
        </div>

        {isReplacing && onRemove && (
          <DialogFooter>
            <Button
              variant="destructive"
              className="w-full gap-2"
              onClick={handleRemove}
            >
              <IconTrash className="size-4" />
              {t().removeCurrency}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
