import { useCallback, useRef, useState } from "react";
import useCurrencyApp from "@/hooks/useCurrencyApp";
import { usePullToRefresh } from "@/hooks/usePullToRefresh";
import { useVisualViewport } from "@/hooks/useVisualViewport";
import { useTheme } from "@/hooks/useTheme";
import CurrencyList from "@/components/CurrencyList";
import CurrencyModal from "@/components/CurrencyModal";
import UpdateInfo from "@/components/UpdateInfo";
import SettingsFab from "@/components/SettingsFab";
import PWAUpdatePrompt from "@/components/PWAUpdatePrompt";
import { Button } from "@/components/ui/button";
import { IconPlus, IconLoader } from "@tabler/icons-react";
import { t } from "@/i18n/translations";
import { useLanguage } from "@/hooks/useLanguage";

function App() {
  const { theme, setTheme } = useTheme();
  // Re-render (and re-run useCurrencyApp) whenever the UI language changes.
  useLanguage();
  useVisualViewport();

  const {
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
  } = useCurrencyApp();

  const containerRef = useRef<HTMLDivElement>(null);
  const stableRefreshRates = useCallback(refreshRates, [refreshRates]);
  const pullState = usePullToRefresh(containerRef, stableRefreshRates);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [replacingIndex, setReplacingIndex] = useState<number | null>(null);

  const openModal = (index: number | null = null) => {
    setReplacingIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setReplacingIndex(null);
  };

  const handleCurrencySelect = (code: string) => {
    if (replacingIndex !== null) {
      replaceCurrency(replacingIndex, code);
    } else {
      addCurrency(code);
    }
    closeModal();
  };

  const handleRemoveCurrency = () => {
    if (replacingIndex !== null && selectedCurrencies.length > 1) {
      removeCurrency(replacingIndex);
      closeModal();
    }
  };

  return (
    <>
      {pullState.visible && (
        <div className="pointer-events-none absolute inset-x-0 top-2 z-10 flex justify-center">
          <span
            className="size-8 p-1 rounded-full bg-muted text-muted-foreground transition-transform duration-500"
            style={{
              transform: pullState.ready ? "rotate(360deg)" : undefined,
              color: pullState.ready ? "var(--primary)" : undefined,
            }}
          >
            <IconLoader className="size-6" />
          </span>
        </div>
      )}

      <div
        ref={containerRef}
        className="mx-auto flex min-h-dvh max-w-xl flex-col p-4 pb-20"
      >
        <main className="flex flex-1 flex-col gap-4">
          <CurrencyList
            selectedCurrencies={selectedCurrencies}
            currentValues={currentValues}
            availableCurrencies={availableCurrencies}
            onInput={handleInput}
            onCurrencyClick={openModal}
            onReorder={reorderCurrency}
          />

          <UpdateInfo
            lastUpdate={lastUpdate}
            isRefreshing={isRefreshing}
            hasError={hasError}
            onRefresh={refreshRates}
          />
        </main>
      </div>

      {/* Floating action buttons */}
      <SettingsFab
        theme={theme}
        onThemeChange={setTheme}
        onReset={resetCurrencies}
      />
      <Button
        size="icon-lg"
        className="fixed bottom-4 right-4 z-30 size-14 rounded-full shadow-lg shadow-primary/30"
        onClick={() => openModal()}
        aria-label={t().addCurrency}
      >
        <IconPlus className="size-6" />
      </Button>

      <CurrencyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSelect={handleCurrencySelect}
        onRemove={
          replacingIndex !== null && selectedCurrencies.length > 1
            ? handleRemoveCurrency
            : null
        }
        availableCurrencies={availableCurrencies}
        selectedCurrencies={selectedCurrencies}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isReplacing={replacingIndex !== null}
      />

      <PWAUpdatePrompt />
    </>
  );
}

export default App;
