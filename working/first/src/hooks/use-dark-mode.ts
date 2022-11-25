import { useEffect, useState } from "react";

export const useDarkMode = () => {
  let [dark, setDark] = useState(false);

  const listener = (e: MediaQueryListEvent) => {
    setDark(e.matches);
  };

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", listener);

    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", listener);
  }, []);

  return dark;
};
