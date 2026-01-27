export function CommandTemplate(cmd: string): HTMLDivElement {
  const parentDiv = document.createElement("div");

  parentDiv.className = "flex items-center gap-2 mb-2";

  parentDiv.innerHTML = `
    <span class="text-secondary-glow">➜</span>
    <span class="text-accent-blue">~</span>
    <span class="text-white font-medium">${cmd}</span>
  `;
  return parentDiv;
}
