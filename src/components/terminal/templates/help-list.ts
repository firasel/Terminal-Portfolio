export function HelpListTemplate(): HTMLDivElement {
  const parentDiv = document.createElement("div");

  parentDiv.className =
    "p-4 rounded-xl bg-black/20 border border-white/5 backdrop-blur-sm text-sm";

  parentDiv.innerHTML = `
    <p class="text-white/60 mb-3">Available commands:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/80">
      <div><span class="text-secondary-glow font-semibold">about</span> <span class="text-white/40">— learn about me</span></div>
      <div><span class="text-secondary-glow font-semibold">skills</span> <span class="text-white/40">— view my skill set</span></div>
      <div><span class="text-secondary-glow font-semibold">projects</span> <span class="text-white/40">— browse my projects</span></div>
      <div><span class="text-secondary-glow font-semibold">experience</span> <span class="text-white/40">— work experience</span></div>
      <div><span class="text-secondary-glow font-semibold">pr [1-4]</span> <span class="text-white/40">— detailed project view</span></div>
      <div><span class="text-secondary-glow font-semibold">social</span> <span class="text-white/40">— social profiles</span></div>
      <div><span class="text-secondary-glow font-semibold">contact</span> <span class="text-white/40">— get in touch</span></div>
      <div><span class="text-secondary-glow font-semibold">clear</span> <span class="text-white/40">— clear the terminal</span></div>
      <div><span class="text-secondary-glow font-semibold">help</span> <span class="text-white/40">— show all commands</span></div>
    </div>
  `;
  return parentDiv;
}
