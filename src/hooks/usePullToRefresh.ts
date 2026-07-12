import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

const MAX = 128;
const k = 0.4;

function appr(x: number) {
  return MAX * (1 - Math.exp((-k * x) / MAX));
}

export interface PullToRefreshState {
  /** Whether the indicator should be visible (pull > 50px) */
  visible: boolean;
  /** Whether the pull threshold is reached and refresh will trigger on release (pull > 100px) */
  ready: boolean;
  /** Pull distance in pixels after applying the tension function (0 to ~128) */
  pullDistance: number;
}

export function usePullToRefresh(
  ref: RefObject<HTMLElement | null>,
  onTrigger: () => void,
): PullToRefreshState {
  // null = idle; a pixel value = active gesture.
  // (previously used 0, which broke touch at the top of the screen)
  const startY = useRef<number | null>(null);
  const currentY = useRef<number | null>(null);
  const [state, setState] = useState<PullToRefreshState>({
    visible: false,
    ready: false,
    pullDistance: 0,
  });

  const stableTrigger = useCallback(onTrigger, [onTrigger]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onTouchStart(e: TouchEvent) {
      if (window.scrollY > 0) return;
      startY.current = e.touches[0]?.clientY ?? 0;
      currentY.current = startY.current;
      el!.style.transition = "none";
    }

    function onTouchMove(e: TouchEvent) {
      if (startY.current === null) return;

      currentY.current = e.touches[0]?.clientY ?? currentY.current;
      const dy = (currentY.current ?? 0) - startY.current;

      if (dy < 0) return;

      const approxDy = appr(dy);

      el!.style.transform = `translateY(${approxDy}px)`;

      setState({
        visible: approxDy > 50,
        ready: approxDy > 100,
        pullDistance: approxDy,
      });
    }

    function onTouchEnd() {
      if (startY.current === null) return;

      const dy = (currentY.current ?? 0) - startY.current;
      const approxDy = appr(dy);

      el!.style.transition = "transform 0.2s";
      el!.style.transform = "";

      function onTransitionEnd() {
        el!.style.transition = "";
        el!.removeEventListener("transitionend", onTransitionEnd);
      }
      el!.addEventListener("transitionend", onTransitionEnd);

      if (approxDy > 100) {
        stableTrigger();
      }

      setState({ visible: false, ready: false, pullDistance: 0 });
      startY.current = null;
      currentY.current = null;
    }

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [ref, stableTrigger]);

  return state;
}
