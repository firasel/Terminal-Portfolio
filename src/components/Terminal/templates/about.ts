export function AboutTemplate() {
  const parentDiv = document.createElement("div");

  parentDiv.className =
    "p-6 rounded-xl bg-black/20 border border-white/5 backdrop-blur-sm";

  parentDiv.innerHTML = `
    <pre class="whitespace-pre-wrap text-sm leading-relaxed"><span class="text-white/30">// User Profile</span>
{
  <span class="text-json-key">"name"</span>: <span class="text-json-string">"Md Rasel"</span>,
  <span class="text-json-key">"alias"</span>: <span class="text-json-string">"FiRasel"</span>,
  <span class="text-json-key">"role"</span>: <span class="text-json-string">"Software Developer"</span>,
  <span class="text-json-key">"experience"</span>: <span class="text-json-string">"3+ Years"</span>,
  <span class="text-json-key">"company"</span>: <span class="text-json-string">"LemonHive"</span>,
  <span class="text-json-key">"primary_stack"</span>: [
    <span class="text-json-string">"Next.js"</span>, 
    <span class="text-json-string">"PayloadCMS"</span>, 
    <span class="text-json-string">"TailwindCSS"</span>
  ],
  <span class="text-json-key">"focus"</span>: [
    <span class="text-json-string">"Complex UI Architecture"</span>,
    <span class="text-json-string">"Frontend Optimization"</span>,
    <span class="text-json-string">"Headless CMS Solutions"</span>
  ]
}</pre>
  `;
  return parentDiv;
}
