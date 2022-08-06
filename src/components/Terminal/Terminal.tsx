import { Howl } from "howler";
import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { textAnimate } from "../TextDrop/TextDrop";
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
  // using state for handle command history
  const [historyCmd, setHistoryCmd] = useState<string[]>([]);
  const [cmdIndex, setCmdIndex] = useState<number>(0);
  const [cmdValue, setCmdValue] = useState<string>("");

  // Sound play function
  const handleSound = (src: string) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  // Open new tab with social links
  const openNewTab = (url: string) => {
    if (window) {
      window.open(url, "_blank");
    }
  };

  // Template insert in terminal element
  const templateInsert = (template: Function | null, cmd: string) => {
    handleSound("/textPrint.mp3");

    if (terminal.current && template) {
      // Entered command history insert
      terminal?.current?.appendChild(commandTemplate(cmd));
      // Template isert
      terminal?.current?.appendChild(template());
    } else if (terminal.current && !template) {
      // Entered command history insert
      terminal?.current?.appendChild(commandTemplate(cmd));
    }
  };

  // Command input handle
  const handleCommand = (cmd: string) => {
    // Store command history
    setHistoryCmd((prevData) => [...prevData, cmd]);
    setCmdIndex(historyCmd.length);
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
      case "github":
        templateInsert(null, cmd);
        openNewTab("https://github.com/firasel");
        break;
      case "linkedin":
        templateInsert(null, cmd);
        openNewTab("https://www.linkedin.com/in/firasel");
        break;
      case "facebook":
        templateInsert(null, cmd);
        openNewTab("https://www.facebook.com/fi.mdrasel");
        break;
      case "clear":
        handleSound("/clear.mp3");
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
          handleSound("/error.mp3");
          if (terminal.current) {
            // Entered command history insert
            terminal?.current?.appendChild(commandTemplate(cmd));
            // Template isert
            terminal?.current?.appendChild(errorTemplate(cmd));
          }
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

  // Focus in input element
  useEffect(() => {
    if (commandInput.current) {
      commandInput?.current?.focus();
    }
  }, []);

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
          list
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
            value={cmdValue}
            ref={commandInput}
            onKeyDown={async (e) => {
              if (
                ((e.key >= "a" && e.key <= "z") ||
                  (e.key >= "A" && e.key <= "Z") ||
                  (e.key >= "0" && e.key <= "9")) &&
                e.key.length === 1
              ) {
                textAnimate(e.key);
              }
              // Hanlde user input key type
              if (e.key == "Enter" && e.target.value.trim() !== "") {
                handleCommand(e.target.value);
                setCmdValue("");
              } else if (e.key == "ArrowUp") {
                await setCmdIndex((prev) =>
                  prev - 1 >= 0 ? prev - 1 : historyCmd.length
                );
                await setCmdValue(historyCmd[cmdIndex] || "");
              } else if (e.key == "ArrowDown") {
                await setCmdIndex((prev) =>
                  prev + 1 <= historyCmd.length ? prev + 1 : 0
                );
                await setCmdValue(historyCmd[cmdIndex] || "");
              }
            }}
            onChange={(e) => {
              // Play type sound
              handleSound("/keyPress.mp3");
              // Set input value in state
              setCmdValue(e?.target?.value);
            }}
            autoComplete="off"
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
