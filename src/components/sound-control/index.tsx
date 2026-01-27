"use client";

import Image from "next/image";
import soundOff from "../../assets/icons/soundOff.svg";
import soundOn from "../../assets/icons/soundOn.svg";
import { useVolume } from "./hook";

export function SoundControl() {
  const { volume, isMuted, setVolume, toggleMute } = useVolume(50);

  return (
    <div className="fixed bottom-2 right-2 md:bottom-6 md:right-6 z-50 flex items-center justify-end group">
      <div className="flex items-center p-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 shadow-lg shadow-black/50 transition-all duration-300 ease-out hover:bg-black/50 hover:border-white/20">
        {/* Sound Toggle Button */}
        <button
          onClick={toggleMute}
          className="relative w-8 h-8 rounded-full flex items-center justify-center transition-transform active:scale-95 focus:outline-none"
          aria-label={isMuted ? "Unmute" : "Mute"}
          title={isMuted ? "Unmute" : "Mute"}
        >
          <Image
            src={isMuted ? soundOff : soundOn}
            alt="Sound status"
            width={24}
            height={24}
            className={`opacity-80 transition-opacity hover:opacity-100 ${
              isMuted ? "opacity-50" : ""
            }`}
          />
        </button>

        {/* Range Slider - Revealed on Hover */}
        <div className="flex items-center overflow-hidden transition-all duration-300 ease-out group-hover:w-24 group-hover:opacity-100 group-hover:ml-3 w-0 opacity-0 ml-0">
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={volume}
            onChange={(e) => setVolume(parseInt(e.target.value))}
            className="w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer 
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-3 
            [&::-webkit-slider-thumb]:h-3 
            [&::-webkit-slider-thumb]:rounded-full 
            [&::-webkit-slider-thumb]:bg-white 
            [&::-webkit-slider-thumb]:shadow-md 
            hover:[&::-webkit-slider-thumb]:scale-110 
            accent-white"
            aria-label="Volume control"
          />
        </div>
      </div>
    </div>
  );
}
