export function AboutTemplate() {
  const parentDiv = document.createElement("div");

  parentDiv.className =
    "p-6 rounded-xl bg-black/20 border border-white/5 backdrop-blur-sm";

  parentDiv.innerHTML = `
    <pre class="whitespace-pre-wrap text-sm leading-relaxed"><span class="text-white/30">// User Profile</span>
{
  <span class="text-json-key">"name"</span>: <span class="text-json-string">"Md Rasel"</span>,
  <span class="text-json-key">"alias"</span>: <span class="text-json-string">"FiRasel"</span>,
  <span class="text-json-key">"role"</span>: <span class="text-json-string">"Full-Stack Developer"</span>,
  <span class="text-json-key">"stack"</span>: <span class="text-json-string">"MERN"</span>,
  <span class="text-json-key">"status"</span>: <span class="text-json-string">"Building unique web applications"</span>,
  <span class="text-json-key">"focus"</span>: [
    <span class="text-json-string">"Clean Code"</span>,
    <span class="text-json-string">"Reusable Components"</span>,
    <span class="text-json-string">"Deep Learning"</span>
  ]
}</pre>
  `;
  return parentDiv;
}
