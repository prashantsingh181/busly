import { useEffect, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  defaultValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      if (item !== null) {
        try {
          if (typeof defaultValue === "string") {
            return item as T;
          }
          return JSON.parse(item) as T;
        } catch (error) {
          console.error(`Parsing Error : ${error}`);
          return defaultValue;
        }
      }
      return defaultValue;
    } catch (error) {
      console.error(`LocalStorage Access Error : ${error}`);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      if (value === undefined || value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(`LocalStorage Setting Error: ${error}`);
    }
  }, [key, value]);

  return [value, setValue];
}
