import { NextPage } from "next";
import { useRef } from "react";

const Terminal: NextPage = () => {
  const title: String = String.raw`   _____ ___               __
  / __(_) _ \___ ____ ___ / /
 / _// / , _/ _ '(_-</ -_) / 
/_/ /_/_/|_|\_,_/___/\__/_/
`;
  const terminal = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   return () => {
  //     if (terminal) terminal!.current!.appendChild(projectDetails(2));
  //   };
  // }, []);

  return (
    <div className="w-[50rem] h-2/4 absolute bg-secondary rounded-lg px-2 pb-2 pt-[2px] shadow-xl shadow-[#242526]/25 overflow-y-auto">
      <div>
        <div className="flex items-end">
          <span className="text-orange-default mr-1 text-lg">Welcome to</span>
          <pre className="text-green">{title}</pre>
          <span className="text-orange-default -ml-4 text-lg">.com</span>
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
          />
        </div>
      </div>
    </div>
  );
};
export default Terminal;
