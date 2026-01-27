export function ErrorTemplate(cmd: string): HTMLDivElement {
  const parentDiv = document.createElement("div");

  parentDiv.className =
    "p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm";

  parentDiv.innerHTML = `
    <span class="font-semibold">${cmd}</span>: command not found
    <p class="text-white/40 text-xs mt-1">Type "<span class="text-secondary-glow">help</span>" to see all available commands</p>
  `;
  return parentDiv;
}
