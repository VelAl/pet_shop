import { useState } from "react";

export const useLocalStorage = (key, initial) => {
  let store;
  try {
    store = JSON.parse(localStorage.getItem(key));
  } catch (e) {}

  const [state, setState] = useState(store || initial);

  const newSetState = (item) => {
    if (typeof item === "function") {
      setState((prev) => {
        const newState = item(prev);
        localStorage.setItem(key, JSON.stringify(newState));
        return newState;
      });
    } else {
      setState([]);
      localStorage.removeItem(key);
    }
  };
  return [state, newSetState];
};
