const allDetails = [
  {
    title: "Daily Blogs",
    description:
      "It&apos;s a public blog web application. After login, users can post blogs from their accounts and delete them and also save them in the draft.",
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
      "This is a static personal portfolio site. Multipage supported and 100% responsive. Developed with the best design and some animation.",
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
    description: "This is a simple mobile repair landing page.",
    technology: ["NextJS", "TailwindCSS", "Framer Motion", "React Icons"],
    liveLink: "https://mobile-galleries.web.app/",
    github: "https://github.com/firasel/Mobile-Gallery",
  },
  {
    title: "BD PhotoWala",
    description:
      "This is a Photography Service web application. The user can order any service if he wants and he can only see his orders when he goes to the order history.",
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

const projectDetailsTemplate = (index: number) => {
  index--;
  const parentDiv = document.createElement("div");
  parentDiv.className = "text-orange-light text-lg";
  parentDiv.innerHTML = `
  <span class="text-emerald-400 font-medium">${allDetails[index].title}</span>
  <br />
  <span>${allDetails[index].description}</span>
  <br />
  <span>Technology:</span>
  ${allDetails[index].technology?.map(
    (data) => `<span class="text-indigo-400"> ${data}</span>`
  )}.
  <br/>
  <a
    href="${allDetails[index].liveLink}"
    target="_blank"
    rel="noreferrer"
    class="text-emerald-400 cursor-pointer"
  >
    Live Link
  </a>
  ,
  <a
    href="${allDetails[index].github}"
    target="_blank"
    rel="noreferrer"
    class="text-emerald-400 cursor-pointer"
  > Github
  </a>
    `;
  return parentDiv;
};
export default projectDetailsTemplate;
