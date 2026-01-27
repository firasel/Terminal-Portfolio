export function HelpListTemplate(): HTMLDivElement {
  const parentDiv = document.createElement("div");

  parentDiv.className =
    "p-4 rounded-xl bg-black/20 border border-white/5 backdrop-blur-sm text-sm";

  parentDiv.innerHTML = `
    <p class="text-white/60 mb-3">Available commands:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/80">
      <div><span class="text-secondary-glow font-semibold">about</span> <span class="text-white/40">— about me</span></div>
      <div><span class="text-secondary-glow font-semibold">skills</span> <span class="text-white/40">— my skills</span></div>
      <div><span class="text-secondary-glow font-semibold">projects</span> <span class="text-white/40">— my project list</span></div>
      <div><span class="text-secondary-glow font-semibold">pr [1-4]</span> <span class="text-white/40">— project details</span></div>
      <div><span class="text-secondary-glow font-semibold">social</span> <span class="text-white/40">— social links</span></div>
      <div><span class="text-secondary-glow font-semibold">contact</span> <span class="text-white/40">— contact info</span></div>
      <div><span class="text-secondary-glow font-semibold">clear</span> <span class="text-white/40">— clear terminal</span></div>
      <div><span class="text-secondary-glow font-semibold">help</span> <span class="text-white/40">— show this list</span></div>
    </div>
  `;
  return parentDiv;
}
