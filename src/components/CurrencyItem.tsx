import { useEffect, useRef, useState } from "react";
import type { AvailableCurrency } from "@/hooks/useCurrencyApp";
import { IconChevronDown } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface CurrencyItemProps {
  code: string;
  value: number;
  info?: AvailableCurrency;
  onInput: (value: string) => void;
  onCurrencyClick: () => void;
}

export default function CurrencyItem({
  code,
  value,
  info,
  onInput,
  onCurrencyClick,
}: CurrencyItemProps) {
  const icon = info?.icon ?? "💱";
  const name = info?.name ?? code;
  const inputRef = useRef<HTMLInputElement>(null);
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    // Don't overwrite the field the user is editing — formatting (thousand
    // separators) would break input and jump the cursor.
    if (document.activeElement === inputRef.current) return;

    if (value > 0) {
      setDisplayValue(
        value.toLocaleString(navigator.language || "ru-RU", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        }),
      );
    } else {
      setDisplayValue("");
    }
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayValue(e.target.value);
    onInput(e.target.value);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const renderIcon = () => {
    if (icon && icon.startsWith("http")) {
      return (
        <img
          src={icon}
          alt=""
          className="size-7 rounded-full object-cover ring-1 ring-border/50"
        />
      );
    }
    return <span className="text-2xl leading-none">{icon || "💱"}</span>;
  };

  return (
    <div className="flex items-center gap-2 bg-card px-3 py-2.5 transition-colors hover:bg-muted/40 sm:px-4">
      <button
        type="button"
        onClick={onCurrencyClick}
        className="flex min-w-0 flex-1 items-center gap-2.5 rounded-lg px-1.5 py-1 -mx-1.5 -my-1 transition-colors hover:bg-accent/60 active:scale-[0.99]"
      >
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted/50">
          {renderIcon()}
        </div>
        <div className="min-w-0 text-left">
          <div className="flex items-center gap-1 text-base font-medium tracking-tight text-foreground">
            <span className="uppercase">{code}</span>
            <IconChevronDown className="size-4 shrink-0 text-muted-foreground" />
          </div>
          <div className="truncate text-xs text-muted-foreground">{name}</div>
        </div>
      </button>

      <div className="flex min-w-0 flex-1 items-center justify-end gap-1">
        <input
          ref={inputRef}
          type="text"
          inputMode="decimal"
          className={cn(
            "input-glow w-full min-w-0 bg-transparent text-right text-2xl font-medium tabular-nums text-foreground outline-none placeholder:text-muted-foreground/40 border-b-2 border-transparent focus:border-primary py-1 transition-colors sm:text-3xl",
          )}
          value={displayValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          placeholder="0"
          aria-label={name}
        />
      </div>
    </div>
  );
}
