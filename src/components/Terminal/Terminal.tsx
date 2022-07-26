import { NextPage } from "next";

const Terminal: NextPage = () => {
  let title = String.raw`   _____ ___               __
  / __(_) _ \___ ____ ___ / /
 / _// / , _/ _ '(_-</ -_) / 
/_/ /_/_/|_|\_,_/___/\__/_/
`;

  return (
    <div className="w-[50rem] h-2/4 absolute bg-secondary rounded-lg px-2 pb-2 pt-[2px] shadow-xl shadow-[#242526]/25 overflow-y-auto">
      <div className="flex items-end">
        <span className="text-orange-default mr-1 text-lg">Welcome to</span>
        <pre className="text-green">{title}</pre>
        <span className="text-orange-default -ml-4 text-lg">.com</span>
      </div>
      <p className="text-primary-text text-lg">
        Type &quot;<span className="text-cyan">help</span>&quot; for command
      </p>
      <div className="w-full flex">
        <span className="text-green text-lg">
          <span className="text-orange-default">visitor</span>@firasel.com:~$
        </span>
        <input
          className="w-full text-lg text-cyan bg-transparent border-none outline-none caret-primary-text px-1"
          type="text"
        />
      </div>
      <div className="text-orange-light text-lg">
        Hello, My Name is <span className="text-tahiti">Md Rasel</span>.<br /> I
        am a <span className="text-tahiti">Programmer</span> &{" "}
        <span className="text-tahiti">MERN</span> stack developer. I am always
        trying to build unique web applications. Also care about writing
        reusable & clean code. Interested in learning something new based on
        technology or going very deep into a topic.
      </div>
      <div className="text-orange-light text-lg">
        <span className="text-sky-400 font-medium">My Skills</span>
        <br />
        Programming Language:
        <span className="text-emerald-400 cursor-pointer"> C</span>,
        <span className="text-emerald-400 cursor-pointer"> C++</span>,
        <span className="text-emerald-400 cursor-pointer"> Javascript</span>,
        <span className="text-emerald-400 cursor-pointer"> Typescript</span>
        <span className="text-indigo-400">(familiar)</span>.
        <br />
        FrontEnd:
        <span className="text-emerald-400 cursor-pointer"> ReactJS</span>,
        <span className="text-emerald-400 cursor-pointer"> NextJS</span>,
        <span className="text-emerald-400 cursor-pointer"> Redux</span>
        <span className="text-indigo-400">(familiar)</span>,
        <span className="text-emerald-400 cursor-pointer"> Recoil</span>,
        <span className="text-emerald-400 cursor-pointer"> TailwindCSS</span>,
        <span className="text-emerald-400 cursor-pointer"> Bootstrap</span>.
        <br />
        BackEnd:
        <span className="text-emerald-400 cursor-pointer"> NodeJS</span>,
        <span className="text-emerald-400 cursor-pointer"> ExpressJS</span>.
        <br />
        Database:
        <span className="text-emerald-400 cursor-pointer"> Mongodb</span>,
        <span className="text-emerald-400 cursor-pointer"> Firestore</span>.
        <br />
        Tools:
        <span className="text-emerald-400 cursor-pointer"> VSCode</span>,
        <span className="text-emerald-400 cursor-pointer"> Github</span>,
        <span className="text-emerald-400 cursor-pointer"> Firebase</span>,
        <span className="text-emerald-400 cursor-pointer"> Vercel</span>,
        <span className="text-emerald-400 cursor-pointer"> Netlify</span>,
        <span className="text-emerald-400 cursor-pointer"> Heroku</span>.
        <br />
      </div>
      <div className="text-orange-light text-lg">
        <span className="text-sky-400 font-medium">Projects</span>
        <br />
        1.{" "}
        <a
          className="text-emerald-400 cursor-pointer"
          href="https://daily-blogs.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Daily Blogs
        </a>{" "}
        - Fullstack project with NextJS
        <br />
        2.{" "}
        <a
          className="text-emerald-400 cursor-pointer"
          href="https://cedex.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Cedex
        </a>{" "}
        - Frontend animated portfolio website with NextJS
        <br />
        3.{" "}
        <a
          className="text-emerald-400 cursor-pointer"
          href="https://mobile-galleries.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          Mobile Gallery
        </a>{" "}
        - Frontend website with NextJS
        <br />
        4.{" "}
        <a
          className="text-emerald-400 cursor-pointer"
          href="https://bdphotowala.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          BD PhotoWala
        </a>{" "}
        - Fullstack project with ReactJS
        <br />
        <p className="mt-2">
          Type &quot;<span className="text-cyan">pr projcetNumber</span>&quot;
          or &quot;<span className="text-cyan">project projcetNumber</span>
          &quot; to view project details.
          <br />
          Example: &quot;<span className="text-cyan">pr 1</span>&quot;
        </p>
      </div>
      <div className="text-orange-light text-lg">
        <span className="text-emerald-400 font-medium">Daily Blogs</span>
        <br />
        <span>
          It&apos;s a public blog web application. After login, users can post
          blogs from their accounts and delete them and also save them in the
          draft.
        </span>
        <br />
        <span>Technoloy:</span>
        <span className="text-indigo-400"> NextJS</span>,
        <span className="text-indigo-400"> Axios</span>,
        <span className="text-indigo-400"> TailwindCSS</span>,
        <span className="text-indigo-400"> Sass</span>,
        <span className="text-indigo-400"> Recoil</span>,
        <span className="text-indigo-400"> Yup</span>,
        <span className="text-indigo-400"> MongoDB</span>.<br />
        <a
          href="https://daily-blogs.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="text-emerald-400 cursor-pointer"
        >
          Live Link
        </a>
        ,
        <a
          href="https://daily-blogs.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="text-emerald-400 cursor-pointer"
        >
          {" "}
          Github
        </a>
      </div>
      <div className="text-orange-light text-lg">
        Email:{" "}
        <a href="mailto:md.firasel@gmail.com" className="text-emerald-400">
          md.firasel@gmail.com
        </a>
        <br />
        Mobile:{" "}
        <a href="tel:+8801619601390" className="text-emerald-400">
          +8801619601390
        </a>
        <br />
      </div>
      <div className="text-orange-light text-lg">
        Click on these links or use them as commands.
        <br />
        Example: &quot;<span className="text-cyan">github</span>&quot;
        <br />
        &gt;
        <a
          href="https://github.com/firasel"
          target="_blank"
          rel="noreferrer"
          className="text-emerald-400 pl-1"
        >
          Github
        </a>
        <br />
        &gt;
        <a
          href="https://www.linkedin.com/in/firasel/"
          target="_blank"
          rel="noreferrer"
          className="text-emerald-400 pl-1"
        >
          LinkedIn
        </a>
        <br />
        &gt;
        <a
          href="https://www.facebook.com/fi.mdrasel"
          target="_blank"
          rel="noreferrer"
          className="text-emerald-400 pl-1"
        >
          Facebook
        </a>
      </div>
    </div>
  );
};
export default Terminal;
