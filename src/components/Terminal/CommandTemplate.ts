const commandTemplate = (cmd: string) => {
  const parentDiv = document.createElement("div");
  parentDiv.className = "w-full flex";
  parentDiv.innerHTML = `
  <span class="text-green text-lg">
    <span class="text-orange-default">visitor</span>@terminal.firasel.com:~$
    <br class="md:hidden" />
    <span class="text-white text-lg md:hidden">&gt;</span>
    <span class="text-cyan">${cmd}</span>
  </span><br/>
    `;
  return parentDiv;
};
export default commandTemplate;
