const projects = () => {
  const parentDiv = document.createElement("div");
  parentDiv.className = "text-orange-light text-lg";
  parentDiv.innerHTML = `
  <span class="text-sky-400 font-medium">Projects</span>
  <br />
  1. 
  <a
    class="text-emerald-400 cursor-pointer"
    href="https://daily-blogs.vercel.app/"
    target="_blank"
    rel="noreferrer"
  >
    Daily Blogs
  </a> 
  - Fullstack project with NextJS
  <br />
  2. 
  <a
    class="text-emerald-400 cursor-pointer"
    href="https://cedex.vercel.app/"
    target="_blank"
    rel="noreferrer"
  >
    Cedex
  </a> 
  - Frontend animated portfolio website with NextJS
  <br />
  3. 
  <a
    class="text-emerald-400 cursor-pointer"
    href="https://mobile-galleries.web.app/"
    target="_blank"
    rel="noreferrer"
  >
    Mobile Gallery
  </a> 
  - Frontend website with NextJS
  <br />
  4. 
  <a
    class="text-emerald-400 cursor-pointer"
    href="https://bdphotowala.web.app/"
    target="_blank"
    rel="noreferrer"
  >
    BD PhotoWala
  </a> 
  - Fullstack project with ReactJS
  <br />
  <p class="mt-2">
    Type &quot;<span class="text-cyan">pr projcetNumber</span>&quot; or
    &quot;<span class="text-cyan">project projcetNumber</span>
    &quot; to view project details.
    <br />
    Example: &quot;<span class="text-cyan">pr 1</span>&quot;
  </p>
`;

  return parentDiv;
};

export default projects;
