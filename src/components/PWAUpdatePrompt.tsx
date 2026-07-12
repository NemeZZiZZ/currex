/// <reference types="vite-plugin-pwa/react" />
import { useRegisterSW } from "virtual:pwa-register/react";
import { t } from "@/i18n/translations";

/**
 * PWA update prompt.
 *
 * When the Service Worker detects a new app version, shows a toast with a
 * "Refresh" button. Clicking calls updateServiceWorker(true) — the page
 * reloads with the new version immediately, no reinstall needed.
 */
export default function PWAUpdatePrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    offlineReady: [offlineReady, setOfflineReady],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisterError(error) {
      console.error("SW registration error", error);
    },
  });

  const close = () => {
    setNeedRefresh(false);
    setOfflineReady(false);
  };

  if (!needRefresh && !offlineReady) return null;

  return (
    <div className="fixed inset-x-0 bottom-24 z-50 mx-auto flex max-w-sm items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-lg px-4 left-4 right-4 ml-0">
      <div className="min-w-0 flex-1 text-sm">
        {needRefresh ? (
          <span className="text-foreground">
            {t().newVersionAvailable}
          </span>
        ) : (
          <span className="text-muted-foreground">{t().readyOffline}</span>
        )}
      </div>
      <button
        type="button"
        className="shrink-0 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        onClick={() => updateServiceWorker(true)}
      >
        {needRefresh ? t().refresh : t().close}
      </button>
      <button
        type="button"
        className="shrink-0 text-muted-foreground hover:text-foreground"
        onClick={close}
        aria-label={t().close}
      >
        ✕
      </button>
    </div>
  );
}
