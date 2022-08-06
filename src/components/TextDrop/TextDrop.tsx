import { NextPage } from "next";

const textAnimate = (key: string) => {
  // Random number generate
  const dynamicNum = Math.floor(Math.random() * 99 + 1);
  // Letter box create
  const div = document?.createElement("div");
  div.className =
    "w-10 h-10 rounded-md text-3xl text-white flex items-center justify-center translate-y-[100vh] ease-in-out shadow-lg shadow-gray-50/10 bg-transparent";
  div.innerHTML = `<span>${key}</span>`;
  // Drop animation
  div.animate(
    [
      {
        transform: `translate(${dynamicNum}vw, 0vh) rotate(0deg)`,
      },
      {
        transform: `translate(${
          dynamicNum % 2 == 0 ? dynamicNum - 2 : dynamicNum + 3
        }vw, 50vh) rotate(${dynamicNum % 2 == 0 ? "-30deg" : "50deg"})`,
      },
      {
        transform: `translate(${
          dynamicNum % 2 == 0 ? dynamicNum + 2 : dynamicNum - 3
        }vw, 100vh) rotate(${dynamicNum % 2 == 0 ? "-70deg" : "70deg"})`,
      },
    ],
    { duration: 2000 }
  );
  // Insert in parent div
  document?.getElementById("textAnimate")?.prepend(div);
  setTimeout(
    () => document?.getElementById("textAnimate")?.removeChild(div),
    2000
  );
};

const TextDrop: NextPage = () => {
  return (
    <div
      id="textAnimate"
      className="w-full h-screen absolute top-0 overflow-hidden -z-0"
    ></div>
  );
};

export default TextDrop;
export { textAnimate };
