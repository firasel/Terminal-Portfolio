import { LiquidBackground } from "../liquid-background";
import { SoundControl } from "../sound-control";
import { Terminal } from "../terminal";
import { TextDrop } from "../text-drop";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 font-mono">
      <LiquidBackground />
      <TextDrop />
      <Terminal />
      <SoundControl />
    </div>
  );
}
