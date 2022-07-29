import { NextPage } from "next";
import { useRef } from "react";
import aboutTemplate from "./AboutTemplate";
import commandTemplate from "./CommandTemplate";
import contactTemplate from "./ContactTemplate";
import errorTemplate from "./ErrorTemplate";
import helpListTemplate from "./HelpListTemplate";
import projectDetailsTemplate from "./ProjectDetailsTemplate";
import projectsTemplate from "./ProjectsTemplate";
import skillsTemplate from "./SkillsTemplate";
import socialTemplate from "./SocialTemplate";

const Terminal: NextPage = () => {
  const title: String = String.raw`   _____ ___               __
  / __(_) _ \___ ____ ___ / /
 / _// / , _/ _ '(_-</ -_) / 
/_/ /_/_/|_|\_,_/___/\__/_/
`;
  const terminal = useRef<HTMLDivElement>(null);
  const terminalParent = useRef<HTMLDivElement>(null);
  const commandInput = useRef<HTMLInputElement>(null);

  // Template insert in terminal element
  const templateInsert = (template: Function, cmd: string) => {
    if (terminal.current) {
      // Entered command history insert
      terminal?.current?.appendChild(commandTemplate(cmd));
      // Template isert
      terminal?.current?.appendChild(template());
    }
  };

  // Command input handle
  const handleCommand = (cmd: string) => {
    // Command match and template insert in terminal
    switch (cmd.toLowerCase()) {
      case "help":
        templateInsert(helpListTemplate, cmd);
        break;
      case "about":
        templateInsert(aboutTemplate, cmd);
        break;
      case "skills":
        templateInsert(skillsTemplate, cmd);
        break;
      case "projects":
        templateInsert(projectsTemplate, cmd);
        break;
      case "social":
        templateInsert(socialTemplate, cmd);
        break;
      case "contact":
        templateInsert(contactTemplate, cmd);
        break;
      case "pr":
      case "project":
        break;
      case "clear":
        if (terminal?.current) {
          terminal!.current!.innerHTML = "";
        }
        break;
      default:
        let command = cmd.toLowerCase().split(" ");
        if (
          (command[0] == "pr" || command[0] == "project") &&
          Number(command[1]) > 0 &&
          Number(command[1]) < 5 &&
          command.length == 2
        ) {
          templateInsert(
            projectDetailsTemplate.bind(null, Number(command[1])),
            cmd
          );
        } else {
          templateInsert(errorTemplate.bind(null, cmd), cmd);
        }
        break;
    }
    // Terminal scroll bottom
    if (terminalParent.current) {
      terminalParent?.current?.scroll({
        behavior: "smooth",
        top: terminalParent.current.scrollHeight,
      });
    }
  };

  return (
    <div
      className="w-full md:w-[45rem] lg:w-[50rem] h-screen md:h-[30rem] absolute bg-secondary rounded-lg px-2 pb-2 pt-[2px] shadow-xl shadow-[#242526]/25 overflow-x-hidden overflow-y-auto scrollbar"
      ref={terminalParent}
    >
      <div className="">
        <div className="flex items-end w-full">
          <span className="text-orange-default mr-1 text-lg whitespace-nowrap leading-5 md:leading-6">
            Welcome to
          </span>
          <pre className="text-green text-xs md:text-base">{title}</pre>
          <span className="text-orange-default -ml-2 md:-ml-4 text-lg whitespace-nowrap leading-5 md:leading-6">
            .com
          </span>
        </div>
        <p className="text-primary-text text-lg">
          Type &quot;<span className="text-cyan">help</span>&quot; for command
        </p>
      </div>
      <div className="w-full" ref={terminal}></div>
      <div>
        <div className="w-full flex">
          <span className="text-green text-lg">
            <span className="text-orange-default">visitor</span>@firasel.com:~$
          </span>
          <input
            className="w-full text-lg text-cyan bg-transparent border-none outline-none caret-primary-text px-1"
            type="text"
            ref={commandInput}
            onKeyDown={(e) => {
              if (e.key == "Enter" && e.target.value.trim() !== "") {
                handleCommand(e.target.value);
                e.target.value = "";
              }
            }}
          />
        </div>
        <div
          className="w-full min-h-[2rem] cursor-text"
          onClick={() => {
            if (commandInput.current) {
              commandInput?.current?.focus();
            }
          }}
        ></div>
      </div>
    </div>
  );
};
export default Terminal;
