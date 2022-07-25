import { NextPage } from "next";

// @formatter:off
let title = String.raw`   _____ ___               __
  / __(_) _ \___ ____ ___ / /
 / _// / , _/ _ '(_-</ -_) / 
/_/ /_/_/|_|\_,_/___/\__/_/
`;

const Terminal: NextPage = () => {
  return (
    <div className="w-[50rem] h-2/4 absolute bg-secondary rounded-lg px-2 pb-2 pt-[2px] shadow-xl shadow-[#242526]/25 overflow-y-auto">
      <div className="flex items-end">
        <span className="text-orange mr-1 text-lg">Welcome to</span>
        <pre className="text-green">{title}</pre>
        <span className="text-orange -ml-4 text-lg">.com</span>
      </div>
      <p className="text-primary-text text-lg">
        Type &quot;<span className="text-cyan">help</span>&quot; for command
      </p>
      <span className="text-green text-lg">
        <span className="text-orange">visitor</span>@firasel.com:~$
      </span>
      <input
        className="text-lg text-cyan bg-transparent border-none outline-none caret-primary-text px-1"
        type="text"
      />
    </div>
  );
};
export default Terminal;
