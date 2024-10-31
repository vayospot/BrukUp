import { useEffect, useRef } from "react";

/**
 * Custom hook that returns a debounced version of the provided function.
 * The debounced function delays the execution of the original function
 * until after a specified delay has elapsed since the last time it was invoked.
 *
 * @param {function} func The function to debounce.
 * @param {number} delay The delay in milliseconds to wait before invoking the function.
 * @returns {function} The debounced function.
 */
export default function useDebounce(func, delay) {
  const timeoutId = useRef(null);
  const latestArgs = useRef(null);

  /**
   * Debounced function that clears the previous timeout and sets a new one.
   * The original function is called after the specified delay.
   *
   * @param {...*} args The arguments to pass to the function.
   */
  const debounce = (...args) => {
    latestArgs.current = args; // Store the latest arguments
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      func(...latestArgs.current);
    }, delay);
  };

  // Effect hook to handle cleanup when component unmount.
  // Clears any existing timeout and calls the function one last time.
  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      if (latestArgs.current) {
        func(...latestArgs.current);
      }
    };
  }, [func]);

  return debounce;
}
