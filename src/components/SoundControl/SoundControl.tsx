import { Howler } from "howler";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import soundOff from "../../assets/icons/soundOff.svg";
import soundOn from "../../assets/icons/soundOn.svg";

const SoundControl: NextPage = () => {
  const [rangeValue, setRangeValue] = useState(50);

  const handleVolume = (e: any) => {
    setRangeValue(parseInt(e.target.value));
  };

  // Sound control
  useEffect(() => {
    Howler.volume(rangeValue / 100);
  }, [rangeValue]);

  return (
    <div className="absolute bottom-5 right-5">
      <div className="flex items-center gap-1 justify-end max-w-44 soundControl">
        <button
          className="w-9 h-9 md:w-10 md:h-10 p-2 md:p-[10px] bg-[#ffffff14] rounded-xl hover:bg-[#ffffff1a] hover:shadow-md shadow-white"
          onClick={() => {
            if (rangeValue > 0) {
              setRangeValue(0);
            } else setRangeValue(50);
          }}
        >
          <Image
            src={rangeValue == 0 ? soundOff : soundOn}
            alt="Sound on icon"
          />
        </button>
        <input
          className="w-full hidden cursor-pointer rangeBlock"
          onChange={handleVolume}
          type="range"
          min={0}
          step={1}
          max={100}
          value={rangeValue}
        />
      </div>
    </div>
  );
};

export default SoundControl;
