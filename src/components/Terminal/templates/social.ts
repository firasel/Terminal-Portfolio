export function SocialTemplate(): HTMLDivElement {
  const parentDiv = document.createElement("div");

  parentDiv.className =
    "p-6 rounded-xl bg-black/20 border border-white/5 backdrop-blur-sm";

  parentDiv.innerHTML = `
    <pre class="whitespace-pre-wrap text-sm leading-relaxed"><span class="text-white/30">// Social Links</span>
{
  <span class="text-json-key">"github"</span>: <a href="https://github.com/firasel" target="_blank" rel="noreferrer" class="text-primary-glow hover:underline">"github.com/firasel"</a>,
  <span class="text-json-key">"linkedin"</span>: <a href="https://www.linkedin.com/in/firasel/" target="_blank" rel="noreferrer" class="text-primary-glow hover:underline">"linkedin.com/in/firasel"</a>,
  <span class="text-json-key">"facebook"</span>: <a href="https://www.facebook.com/fi.mdrasel" target="_blank" rel="noreferrer" class="text-primary-glow hover:underline">"facebook.com/fi.mdrasel"</a>
}</pre>
    <p class="text-white/40 text-xs mt-4">
      Type "<span class="text-secondary-glow">github</span>", "<span class="text-secondary-glow">linkedin</span>", or "<span class="text-secondary-glow">facebook</span>" to open
    </p>
  `;
  return parentDiv;
}
