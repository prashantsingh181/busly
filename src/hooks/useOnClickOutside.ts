import { type RefObject, useEffect } from "react";

export default function useOnClickOutside(
  ref: RefObject<HTMLElement | null>,
  fn: () => void,
) {
  useEffect(() => {
    function handleMouseDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        fn();
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [ref]);
}
