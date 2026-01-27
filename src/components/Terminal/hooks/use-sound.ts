/**
 * useSound - Custom hook for playing terminal sounds
 */

import { Howl } from "howler";
import { useCallback } from "react";

export function useSound() {
  const playSound = useCallback((src: string) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  }, []);

  return { playSound };
}
