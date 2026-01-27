/**
 * useCommandHistory - Manages command history navigation
 *
 * Handles storing commands and navigating through them with arrow keys.
 */

import { useCallback, useState } from "react";

export function useCommandHistory() {
  const [history, setHistory] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  /**
   * Adds a new command to history
   */
  const addToHistory = useCallback((command: string) => {
    setHistory((prev) => [...prev, command]);
    setIndex((prev) => prev + 1);
  }, []);

  /**
   * Gets the previous command (up arrow)
   */
  const getPrevious = useCallback((): string => {
    if (history.length === 0) {
      return "";
    }

    const newIndex = index > 0 ? index - 1 : history.length - 1;
    setIndex(newIndex);
    return history[newIndex] || "";
  }, [history, index]);

  /**
   * Gets the next command (down arrow)
   */
  const getNext = useCallback((): string => {
    if (history.length === 0) {
      return "";
    }

    const newIndex = index < history.length - 1 ? index + 1 : 0;
    setIndex(newIndex);
    return history[newIndex] || "";
  }, [history, index]);

  /**
   * Resets index to the end of history
   */
  const resetIndex = useCallback(() => {
    setIndex(history.length + 1);
  }, [history.length]);

  return {
    addToHistory,
    getPrevious,
    getNext,
    resetIndex,
  };
}
