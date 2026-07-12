import { cn } from "@/lib/utils";
import { t } from "@/i18n/translations";
import { IconRefresh, IconLoader, IconAlertCircle } from "@tabler/icons-react";

interface UpdateInfoProps {
  className?: string;
  lastUpdate: Date | null;
  isRefreshing?: boolean;
  hasError?: boolean;
  onRefresh: () => void;
}

export default function UpdateInfo({
  lastUpdate,
  isRefreshing = false,
  hasError = false,
  onRefresh,
  className,
}: UpdateInfoProps) {
  const formatUpdateTime = () => {
    if (!lastUpdate) return t().loadingRates;

    const now = new Date();
    const diff = Math.floor((now.getTime() - lastUpdate.getTime()) / 1000);

    if (diff < 60) return t().updatedJustNow;
    if (diff < 3600) return t().updatedMinAgo(Math.floor(diff / 60));
    if (diff < 86400) return t().updatedHoursAgo(Math.floor(diff / 3600));
    return lastUpdate.toLocaleString(navigator.language || "ru-RU");
  };

  return (
    <button
      type="button"
      onClick={onRefresh}
      className={cn(
        "flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors hover:bg-muted/50 cursor-pointer",
        hasError ? "text-destructive" : "text-muted-foreground",
        className,
      )}
      aria-label={t().refresh}
    >
      {isRefreshing ? (
        <IconLoader className="size-3.5 animate-spin-slow" />
      ) : hasError ? (
        <IconAlertCircle className="size-3.5" />
      ) : (
        <IconRefresh className="size-3.5" />
      )}
      <span>{hasError ? t().loadingRates : formatUpdateTime()}</span>
    </button>
  );
}
