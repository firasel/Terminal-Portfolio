/**
 * Terminal constants - ASCII art and configuration
 */

export const ASCII_ART = `███████╗██╗ ██████╗  █████╗ ███████╗███████╗██╗     
██╔════╝██║ ██╔══██╗██╔══██╗██╔════╝██╔════╝██║     
█████╗  ██║ ██████╔╝███████║███████╗█████╗  ██║     
██╔══╝  ██║ ██╔══██╗██╔══██║╚════██║██╔══╝  ██║     
██║     ██║ ██║  ██║██║  ██║███████║███████╗███████╗
╚═╝     ╚═╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝`;

export const QUICK_COMMANDS = ["help", "projects", "about", "social"] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/firasel",
  linkedin: "https://www.linkedin.com/in/firasel",
  leetcode: "https://leetcode.com/u/firasel/",
} as const;

export const SOUNDS = {
  keyPress: "/keyPress.mp3",
  textPrint: "/textPrint.mp3",
  error: "/error.mp3",
  clear: "/clear.mp3",
} as const;
