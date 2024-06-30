import { MouseEvent, TouchEvent, useCallback, useRef } from "react";

type Props = {
  onNext?: () => void;
  onPrev?: () => void;
};

const useTouch = ({ onNext, onPrev }: Props) => {
  const refXPoint = useRef<number>();
  const refStartXPoint = useRef<number>();

  const handleTouchStartEnvet = useCallback((e: TouchEvent) => {
    const touch = e.touches.item(0);
    refStartXPoint.current = touch.clientX;
    refXPoint.current = touch.clientX;
  }, []);

  const handleTouchMoveEvent = useCallback((e: TouchEvent) => {
    const touch = e.touches.item(0);

    refXPoint.current = touch.clientX;
  }, []);

  const handleTouchEndEvent = useCallback(
    (e: TouchEvent) => {
      if (refXPoint.current && refStartXPoint.current) {
        const diff = Math.abs(refXPoint.current - refStartXPoint.current);
        if (diff < 5) return;
        if (refXPoint.current > refStartXPoint.current) {
          onNext?.();
        } else {
          onPrev?.();
        }
      }
    },
    [onNext, onPrev]
  );

  return {
    handleTouchStartEnvet,
    handleTouchMoveEvent,
    handleTouchEndEvent,
  };
};

export default useTouch;
