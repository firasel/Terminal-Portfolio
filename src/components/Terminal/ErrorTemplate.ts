const errorTemplate = (cmd: string) => {
  const parentDiv = document.createElement("div");
  parentDiv.className = "text-red-600 text-lg";
  parentDiv.innerHTML = `<span class="text-cyan">${cmd}:</span> command not found`;
  return parentDiv;
};
export default errorTemplate;
