const socialTemplate = () => {
  const parentDiv = document.createElement("div");
  parentDiv.className = "text-orange-light text-lg";
  parentDiv.innerHTML = `
  Click on these links or use them as commands.
  <br />
  Example: &quot;<span class="text-cyan">github</span>&quot;
  <br />
  &gt;
  <a
    href="https://github.com/ayenchayyy"
    target="_blank"
    rel="noreferrer"
    class="text-emerald-400 pl-1"
  >
    Github
  </a>
  <br />
  &gt;
  <a
    href="https://www.linkedin.com/in/ayenchaa/"
    target="_blank"
    rel="noreferrer"
    class="text-emerald-400 pl-1"
  >
    LinkedIn
  </a>
    `;
  return parentDiv;
};
export default socialTemplate;
