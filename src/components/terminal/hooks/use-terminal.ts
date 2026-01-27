/**
 * useTerminal - Main terminal hook
 *
 * Handles terminal state, command execution, and interactions
 * with other hooks like useCommandHistory and useSound.
 */

import { useCallback, useRef, useState } from "react";
import {
  COMMAND_REGISTRY,
  getProjectTemplate,
  parseProjectCommand,
} from "../commands";
import { SOUNDS } from "../constants";
import { CommandTemplate, ErrorTemplate } from "../templates";
import { useCommandHistory } from "./use-command-history";
import { useSound } from "./use-sound";
import { triggerDrop } from "../../text-drop";

export function useTerminal() {
  // DOM refs
  const terminalRef = useRef<HTMLDivElement>(null);
  const terminalParentRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Input state
  const [inputValue, setInputValue] = useState("");

  // Composed hooks
  const { playSound } = useSound();
  const { addToHistory, getPrevious, getNext, resetIndex } =
    useCommandHistory();

  // Helper Functions
  const appendToTerminal = useCallback((...elements: HTMLElement[]) => {
    elements.forEach((el) => terminalRef.current?.appendChild(el));
  }, []);

  const scrollToBottom = useCallback(() => {
    terminalParentRef.current?.scroll({
      behavior: "smooth",
      top: terminalParentRef.current.scrollHeight,
    });
  }, []);

  const openLink = useCallback((url: string) => {
    window?.open(url, "_blank");
  }, []);

  // Command Execution
  const executeCommand = useCallback(
    (rawInput: string) => {
      const input = rawInput.trim();
      if (!input) {
        return;
      }

      // Add to history
      addToHistory(input);
      // Reset index to the end of history always
      resetIndex();

      const command = input.toLowerCase();
      const definition = COMMAND_REGISTRY[command];

      // Handle registered commands
      if (definition) {
        switch (definition.type) {
          case "template": {
            playSound(SOUNDS.textPrint);
            appendToTerminal(CommandTemplate(input), definition.template());
            break;
          }
          case "link": {
            playSound(SOUNDS.textPrint);
            appendToTerminal(CommandTemplate(input));
            openLink(definition.url);
            break;
          }
          case "special": {
            if (command === "clear") {
              playSound(SOUNDS.clear);
              if (terminalRef.current) {
                terminalRef.current.innerHTML = "";
              }
              return; // Skip scroll
            }
            break;
          }
        }
      }
      // Handle project commands (pr 1, project 2, etc.)
      else {
        const projectCmd = parseProjectCommand(input);

        if (projectCmd.isValid) {
          playSound(SOUNDS.textPrint);
          const template = getProjectTemplate(projectCmd.projectId);
          appendToTerminal(CommandTemplate(input), template());
        } else {
          // Unknown command
          playSound(SOUNDS.error);
          appendToTerminal(CommandTemplate(input), ErrorTemplate(input));
        }
      }

      scrollToBottom();
    },
    [
      addToHistory,
      resetIndex,
      playSound,
      appendToTerminal,
      openLink,
      scrollToBottom,
    ],
  );

  // Event Handlers
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case "Enter": {
          if (inputValue.trim()) {
            executeCommand(inputValue);
            setInputValue("");
          }
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          setInputValue(getPrevious());
          break;
        }
        case "ArrowDown": {
          e.preventDefault();
          setInputValue(getNext());
          break;
        }
      }
    },
    [inputValue, executeCommand, getPrevious, getNext],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      playSound(SOUNDS.keyPress);
      const newValue = e.target.value;

      if (newValue.length > inputValue.length) {
        triggerDrop(newValue.slice(-1));
      }

      setInputValue(newValue);
    },
    [playSound, inputValue],
  );

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  return {
    // Refs
    terminalRef,
    terminalParentRef,
    inputRef,

    // State
    inputValue,

    // Handlers
    handleKeyDown,
    handleInputChange,
    executeCommand,
    focusInput,
  };
}
