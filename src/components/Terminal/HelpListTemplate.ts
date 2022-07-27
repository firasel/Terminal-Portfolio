const helpListTemplate = () => {
  const parentDiv = document.createElement("div");
  parentDiv.className = "text-orange-light text-lg";
  parentDiv.innerHTML = `
  Available commands:
  <br />
  <span class="pl-5 text-cyan">about</span> - about me
  <br />
  <span class="pl-5 text-cyan">skills</span> - my skills
  <br />
  <span class="pl-5 text-cyan">projects</span> - my project list
  <br />
  <span class="pl-5 text-cyan">project projectNumber</span>,
  <span class="pl-1 text-cyan">pr projectNumber</span> - project details
  <br />
  <span class="pl-5 text-cyan">social</span> - social account link
  <br />
  <span class="pl-5 text-cyan">contact</span> - contact information
  <br />
  <span class="pl-5 text-cyan">help</span> - all available command list
  <br />
  <span class="pl-5 text-cyan">clear</span> - clean the terminal
  <br />
    `;
  return parentDiv;
};
export default helpListTemplate;
