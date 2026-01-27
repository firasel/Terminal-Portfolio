export const allProjectDetails = [
  {
    title: "Daily Blogs",
    description:
      "A public blog platform where users can create an account, publish blog posts, save drafts, and manage their content with full CRUD functionality.",
    technology: [
      "NextJS",
      "Axios",
      "TailwindCSS",
      "Sass",
      "Recoil",
      "Yup",
      "MongoDB",
    ],
    liveLink: "https://daily-blogs.vercel.app/",
    github: "https://github.com/firasel/daily-blogs",
  },
  {
    title: "Cedex",
    description:
      "A modern personal portfolio website with multi-page support and smooth animations. Fully responsive design that looks great on all devices.",
    technology: [
      "NextJS",
      "React Hook Form",
      "React Bootstrap",
      "Sass",
      "Framer Motion",
    ],
    liveLink: "https://cedex.vercel.app/",
    github: "https://github.com/firasel/cedex",
  },
  {
    title: "Mobile Gallery",
    description:
      "A clean and professional landing page for a mobile repair service business.",
    technology: ["NextJS", "TailwindCSS", "Framer Motion", "React Icons"],
    liveLink: "https://mobile-galleries.web.app/",
    github: "https://github.com/firasel/Mobile-Gallery",
  },
  {
    title: "BD PhotoWala",
    description:
      "A photography service booking platform where users can browse services, place orders, and track their order history.",
    technology: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "Firebase",
      "Bootstrap",
      "MongoDB",
    ],
    liveLink: "https://bdphotowala.web.app/",
    github: "https://github.com/firasel/photowala-client-side",
  },
];

export function ProjectDetailsTemplate(index: number): HTMLDivElement {
  const project = allProjectDetails[index - 1];

  const parentDiv = document.createElement("div");

  parentDiv.className =
    "p-6 rounded-xl bg-black/20 border border-white/5 backdrop-blur-sm";

  parentDiv.innerHTML = `
    <pre class="whitespace-pre-wrap text-sm leading-relaxed"><span class="text-white/30">// Project Details</span>
{
  <span class="text-json-key">"name"</span>: <span class="text-json-string">"${project.title}"</span>,
  <span class="text-json-key">"description"</span>: <span class="text-json-string">"${project.description}"</span>,
  <span class="text-json-key">"tech"</span>: [${project.technology
    .map((t) => `<span class="text-json-string">"${t}"</span>`)
    .join(", ")}],
  <span class="text-json-key">"links"</span>: {
    <span class="text-json-key">"live"</span>: <a href="${
      project.liveLink
    }" target="_blank" rel="noreferrer" class="text-primary-glow hover:underline">"${
      project.liveLink
    }"</a>,
    <span class="text-json-key">"github"</span>: <a href="${
      project.github
    }" target="_blank" rel="noreferrer" class="text-primary-glow hover:underline">"${
      project.github
    }"</a>
  }
}</pre>
  `;
  return parentDiv;
}
