export function SkillsTemplate(): HTMLDivElement {
  const parentDiv = document.createElement("div");

  parentDiv.className =
    "p-6 rounded-xl bg-black/20 border border-white/5 backdrop-blur-sm";

  parentDiv.innerHTML = `
    <pre class="whitespace-pre-wrap text-sm leading-relaxed"><span class="text-white/30">// Technical Skills</span>
{
  <span class="text-json-key">"languages"</span>: [<span class="text-json-string">"TypeScript"</span>, <span class="text-json-string">"JavaScript"</span>, <span class="text-json-string">"HTML/CSS"</span>],
  <span class="text-json-key">"frontend"</span>: [
    <span class="text-json-string">"React"</span>, <span class="text-json-string">"Next.js"</span>, <span class="text-json-string">"SvelteKit"</span>,
    <span class="text-json-string">"TailwindCSS"</span>, <span class="text-json-string">"Framer Motion"</span>
  ],
  <span class="text-json-key">"backend"</span>: [<span class="text-json-string">"Node.js"</span>, <span class="text-json-string">"Express"</span>],
  <span class="text-json-key">"cms"</span>: [<span class="text-json-string">"PayloadCMS"</span>, <span class="text-json-string">"Sanity"</span>],
  <span class="text-json-key">"database"</span>: [<span class="text-json-string">"MongoDB"</span>],
  <span class="text-json-key">"tools"</span>: [
    <span class="text-json-string">"Git"</span>, <span class="text-json-string">"GitHub"</span>, <span class="text-json-string">"Vercel"</span>, <span class="text-json-string">"Figma"</span>
  ]
}</pre>
  `;
  return parentDiv;
}
