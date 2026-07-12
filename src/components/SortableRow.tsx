import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import CurrencyItem from "./CurrencyItem";
import { t } from "@/i18n/translations";
import { IconGripVertical } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import type { AvailableCurrency } from "@/hooks/useCurrencyApp";

interface SortableRowProps {
  code: string;
  value: number;
  info?: AvailableCurrency;
  isFirst: boolean;
  onInput: (value: string) => void;
  onCurrencyClick: () => void;
}

export default function SortableRow({
  code,
  value,
  info,
  isFirst,
  onInput,
  onCurrencyClick,
}: SortableRowProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: code });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      className={cn("relative", isDragging && "z-10 opacity-90 shadow-lg")}
    >
      {!isFirst && <div className="border-t border-border/60" />}
      <div className="flex items-center">
        <button
          type="button"
          className="flex shrink-0 cursor-grab items-center px-1.5 py-2 text-muted-foreground/40 touch-none hover:text-muted-foreground active:cursor-grabbing -me-4 z-2"
          aria-label={t().dragToReorder}
          {...attributes}
          {...listeners}
        >
          <IconGripVertical className="size-4" />
        </button>
        <div className="min-w-0 flex-1">
          <CurrencyItem
            code={code}
            value={value}
            info={info}
            onInput={onInput}
            onCurrencyClick={onCurrencyClick}
          />
        </div>
      </div>
    </div>
  );
}
