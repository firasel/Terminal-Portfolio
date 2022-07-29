import { NextPage } from "next";
import Terminal from "../Terminal/Terminal";

const Home: NextPage = () => {
  return (
    <div className="bg-black min-w-full min-h-screen">
      <div className="min-w-full min-h-screen flex justify-center items-center overflow-hidden relative">
        <Terminal />
      </div>
    </div>
  );
};

export default Home;
