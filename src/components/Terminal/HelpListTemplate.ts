const helpListTemplate = () => {
  const parentDiv = document.createElement("div");
  parentDiv.className = "text-orange-light text-lg pl-3 md:pl-5";
  parentDiv.innerHTML = `
  <span class="-ml-3 md:-ml-5">Available commands:</span>
  <br />
<pre class="whitespace-pre-line md:whitespace-pre-wrap">
<span class="text-cyan">about</span>    - about me
<span class="text-cyan">skills</span>   - my skills
<span class="text-cyan">projects</span> - my project list
<span class="text-cyan">project projectNumber</span>,
<span class="text-cyan">pr projectNumber</span> - project details
<span class="text-cyan">social</span>   - social account link
<span class="text-cyan">contact</span>  - contact information
<span class="text-cyan">help</span>     - all available command list
<span class="text-cyan">clear</span>    - clean the terminal</pre>
    `;
  return parentDiv;
};
export default helpListTemplate;
