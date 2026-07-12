import {
  DndContext,
  PointerSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Card } from "@/components/ui/card";
import SortableRow from "./SortableRow";
import { t } from "@/i18n/translations";
import type { AvailableCurrency } from "@/hooks/useCurrencyApp";

interface CurrencyListProps {
  selectedCurrencies: string[];
  currentValues: Record<string, number>;
  availableCurrencies: Record<string, AvailableCurrency>;
  onInput: (code: string, value: string) => void;
  onCurrencyClick: (index: number) => void;
  onReorder: (from: number, to: number) => void;
}

export default function CurrencyList({
  selectedCurrencies,
  currentValues,
  availableCurrencies,
  onInput,
  onCurrencyClick,
  onReorder,
}: CurrencyListProps) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 150, tolerance: 8 },
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const from = selectedCurrencies.indexOf(active.id as string);
    const to = selectedCurrencies.indexOf(over.id as string);
    if (from !== -1 && to !== -1) onReorder(from, to);
  };

  if (selectedCurrencies.length === 0) {
    return (
      <Card className="items-center justify-center gap-3 py-16 text-center text-muted-foreground">
        <div className="text-5xl opacity-40">💱</div>
        <div className="text-base font-medium">{t().addCurrencyHint}</div>
        <div className="text-sm opacity-70">{t().pressAddButton}</div>
      </Card>
    );
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={selectedCurrencies}
        strategy={verticalListSortingStrategy}
      >
        <Card className="gap-0 overflow-hidden p-0">
          {selectedCurrencies.map((code, index) => (
            <SortableRow
              key={code}
              code={code}
              value={currentValues[code] || 0}
              info={availableCurrencies[code]}
              isFirst={index === 0}
              onInput={(value) => onInput(code, value)}
              onCurrencyClick={() => onCurrencyClick(index)}
            />
          ))}
        </Card>
      </SortableContext>
    </DndContext>
  );
}
