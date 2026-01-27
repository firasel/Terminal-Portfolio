"use client";

import { useEffect } from "react";
import { ASCII_ART, QUICK_COMMANDS } from "./constants";
import { useTerminal } from "./hooks/use-terminal";

export function Terminal() {
  const {
    terminalRef,
    terminalParentRef,
    inputRef,
    inputValue,
    handleKeyDown,
    handleInputChange,
    executeCommand,
    focusInput,
  } = useTerminal();

  // Auto-focus input on mount
  useEffect(() => {
    focusInput();
  }, [focusInput]);

  return (
    <div className="w-full max-w-5xl h-[85vh] flex flex-col bg-glass-surface backdrop-blur-2xl border border-glass-border rounded-2xl relative overflow-hidden shadow-2xl shadow-black/50">
      {/* Header with macOS-style controls */}
      <header className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/5 select-none shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex gap-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-control-red border border-[#e0443e] shadow-sm transition-all duration-200 hover:brightness-125 hover:shadow-[0_0_8px_currentColor]" />
            <div className="w-3 h-3 rounded-full bg-control-yellow border border-[#dea123] shadow-sm transition-all duration-200 hover:brightness-125 hover:shadow-[0_0_8px_currentColor]" />
            <div className="w-3 h-3 rounded-full bg-control-green border border-[#1aab29] shadow-sm transition-all duration-200 hover:brightness-125 hover:shadow-[0_0_8px_currentColor]" />
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/20 text-xs text-white/50 border border-white/5">
            <span>📁</span>
            <span>firasel — zsh</span>
          </div>
        </div>
      </header>

      {/* Terminal Content */}
      <div
        className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 font-mono text-sm md:text-base leading-relaxed scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
        ref={terminalParentRef}
        onClick={focusInput}
      >
        {/* ASCII Art Logo */}
        <pre className="text-white text-[8px] md:text-xs leading-[1.1] font-bold text-center overflow-x-auto">
          {ASCII_ART}
        </pre>

        <p className="text-white/40 text-center text-xs">
          Type &quot;<span className="text-secondary-glow">help</span>&quot; for
          available commands
        </p>

        {/* Command Output Area */}
        <div className="w-full space-y-4" ref={terminalRef}></div>

        {/* Command Input */}
        <div className="flex items-center gap-2">
          <span className="text-secondary-glow">➜</span>
          <span className="text-accent-blue">~</span>
          <input
            id="terminalInput"
            className="flex-1 text-white bg-transparent border-none outline-none caret-white text-sm md:text-base"
            type="text"
            value={inputValue}
            ref={inputRef}
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="_"
          />
        </div>
      </div>

      {/* Footer with quick command buttons */}
      <footer className="p-4 md:p-6 border-t border-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-3 overflow-x-auto pt-1 w-full md:w-auto pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {QUICK_COMMANDS.map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white/90 hover:text-white shrink-0 bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
              >
                <span className="text-secondary-glow">❯</span> {cmd}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-medium text-white/40 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            Online
          </div>
        </div>
      </footer>
    </div>
  );
}
