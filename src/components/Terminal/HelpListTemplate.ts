const helpListTemplate = () => {
  const parentDiv = document.createElement("div");
  parentDiv.className = "text-orange-light text-lg pl-5";
  parentDiv.innerHTML = `
  <span class="-ml-5">Available commands:</span>
  <br />
  <span class="text-cyan">about</span> - about me
  <br />
  <span class="text-cyan">skills</span> - my skills
  <br />
  <span class="text-cyan">projects</span> - my project list
  <br />
  <span class="text-cyan">project projectNumber</span>,
  <span class="pl-1 text-cyan">pr projectNumber</span> - project details
  <br />
  <span class="text-cyan">social</span> - social account link
  <br />
  <span class="text-cyan">contact</span> - contact information
  <br />
  <span class="text-cyan">help</span> - all available command list
  <br />
  <span class="text-cyan">clear</span> - clean the terminal
  <br />
    `;
  return parentDiv;
};
export default helpListTemplate;
