import { RefObject, useEffect, useRef } from "react";

export function useClickout<T extends HTMLElement>(
  handlre: () => void
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent | TouchEvent) => {
      const element = ref?.current;
      if (!element || element.contains(event.target as Node)) {
        return;
      }
      handlre();
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [handlre]);

  return ref;
}
