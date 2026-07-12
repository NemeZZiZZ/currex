import type { AvailableCurrency } from "@/hooks/useCurrencyApp";
import { IconStar, IconStarFilled } from "@tabler/icons-react";
import { t } from "@/i18n/translations";

interface CurrencyRowProps {
  code: string;
  currency: AvailableCurrency;
  isFavorite: boolean;
  onSelect: (code: string) => void;
  onToggleFavorite: (code: string) => void;
}

export default function CurrencyRow({
  code,
  currency,
  isFavorite,
  onSelect,
  onToggleFavorite,
}: CurrencyRowProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-muted/60 active:scale-[0.99]">
      <button
        type="button"
        className="flex min-w-0 flex-1 items-center gap-3"
        onClick={() => onSelect(code)}
      >
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted/50">
          {currency.icon && currency.icon.startsWith("http") ? (
            <img
              src={currency.icon}
              alt=""
              className="size-8 rounded-full object-cover ring-1 ring-border/50"
            />
          ) : (
            <span className="text-3xl leading-none">
              {currency.icon || "💱"}
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1 text-left">
          <div className="text-sm font-semibold text-foreground">
            <span className="uppercase">{code}</span>
          </div>
          <div className="truncate text-xs text-muted-foreground">
            {currency.name}
          </div>
        </div>
      </button>
      <button
        type="button"
        onClick={() => onToggleFavorite(code)}
        className="text-muted-foreground/50 transition-colors hover:text-primary shrink-0 p-1"
        aria-label={t().favorites}
      >
        {isFavorite ? (
          <IconStarFilled className="size-4 text-primary" />
        ) : (
          <IconStar className="size-4" />
        )}
      </button>
    </div>
  );
}
