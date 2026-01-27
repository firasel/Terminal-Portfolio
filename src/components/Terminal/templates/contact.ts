export function ContactTemplate(): HTMLDivElement {
  const parentDiv = document.createElement("div");

  parentDiv.className =
    "p-6 rounded-xl bg-black/20 border border-white/5 backdrop-blur-sm";

  parentDiv.innerHTML = `
    <pre class="whitespace-pre-wrap text-sm leading-relaxed"><span class="text-white/30">// Contact Information</span>
{
  <span class="text-json-key">"email"</span>: <a href="mailto:md.firasel@gmail.com" class="text-primary-glow hover:underline">"md.firasel@gmail.com"</a>,
  <span class="text-json-key">"phone"</span>: <a href="tel:+8801619601390" class="text-primary-glow hover:underline">"+8801619601390"</a>,
  <span class="text-json-key">"available"</span>: <span class="text-json-boolean">true</span>
}</pre>
  `;
  return parentDiv;
}
