import { useSyncExternalStore } from "react";
import { getCurrentLanguage, subscribeLanguage } from "@/i18n/translations";

/**
 * Returns the current UI language code (e.g. "ru", "en") and re-renders
 * the component whenever it changes via setLanguage().
 */
export function useLanguage(): string {
  return useSyncExternalStore(subscribeLanguage, getCurrentLanguage);
}
