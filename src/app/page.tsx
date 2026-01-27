import { LiquidBackground } from "@/components/liquid-background";
import { SoundControl } from "@/components/sound-control";
import { Terminal } from "@/components/terminal";
import { TextDrop } from "@/components/text-drop";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 font-mono">
      <LiquidBackground />
      <TextDrop />
      <Terminal />
      <SoundControl />
    </main>
  );
}
