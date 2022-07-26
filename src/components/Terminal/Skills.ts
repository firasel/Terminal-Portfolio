const skills = () => {
  const parentDiv = document.createElement("div");
  parentDiv.className = "text-orange-light text-lg";
  parentDiv.innerHTML = `
  <span class="text-sky-400 font-medium">My Skills</span>
  <br />
  Programming Language:
  <span class="text-emerald-400 cursor-pointer"> C</span>,
  <span class="text-emerald-400 cursor-pointer"> C++</span>,
  <span class="text-emerald-400 cursor-pointer"> Javascript</span>,
  <span class="text-emerald-400 cursor-pointer"> Typescript</span>
  <span class="text-indigo-400">(familiar)</span>.
  <br />
  FrontEnd:
  <span class="text-emerald-400 cursor-pointer"> ReactJS</span>,
  <span class="text-emerald-400 cursor-pointer"> NextJS</span>,
  <span class="text-emerald-400 cursor-pointer"> Redux</span>
  <span class="text-indigo-400">(familiar)</span>,
  <span class="text-emerald-400 cursor-pointer"> Recoil</span>,
  <span class="text-emerald-400 cursor-pointer"> TailwindCSS</span>,
  <span class="text-emerald-400 cursor-pointer"> Bootstrap</span>.
  <br />
  BackEnd:
  <span class="text-emerald-400 cursor-pointer"> NodeJS</span>,
  <span class="text-emerald-400 cursor-pointer"> ExpressJS</span>.
  <br />
  Database:
  <span class="text-emerald-400 cursor-pointer"> Mongodb</span>,
  <span class="text-emerald-400 cursor-pointer"> Firestore</span>.
  <br />
  Tools:
  <span class="text-emerald-400 cursor-pointer"> VSCode</span>,
  <span class="text-emerald-400 cursor-pointer"> Github</span>,
  <span class="text-emerald-400 cursor-pointer"> Firebase</span>,
  <span class="text-emerald-400 cursor-pointer"> Vercel</span>,
  <span class="text-emerald-400 cursor-pointer"> Netlify</span>,
  <span class="text-emerald-400 cursor-pointer"> Heroku</span>.
  <br />`;
  return parentDiv;
};
export default skills;
