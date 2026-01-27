export const allProjectDetails = [
  {
    title: "Daily Blogs",
    description:
      "A public blog web application. After login, users can post blogs from their accounts, delete them, and save drafts.",
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
      "A static personal portfolio site. Multipage supported and 100% responsive with beautiful design and animations.",
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
    description: "A simple mobile repair landing page with clean design.",
    technology: ["NextJS", "TailwindCSS", "Framer Motion", "React Icons"],
    liveLink: "https://mobile-galleries.web.app/",
    github: "https://github.com/firasel/Mobile-Gallery",
  },
  {
    title: "BD PhotoWala",
    description:
      "Photography service web application. Users can order services and view order history.",
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
  <span class="text-json-key">"tech"</span>: [${project.technology.map((t) => `<span class="text-json-string">"${t}"</span>`).join(", ")}],
  <span class="text-json-key">"links"</span>: {
    <span class="text-json-key">"live"</span>: <a href="${project.liveLink}" target="_blank" rel="noreferrer" class="text-primary-glow hover:underline">"${project.liveLink}"</a>,
    <span class="text-json-key">"github"</span>: <a href="${project.github}" target="_blank" rel="noreferrer" class="text-primary-glow hover:underline">"${project.github}"</a>
  }
}</pre>
  `;
  return parentDiv;
}
