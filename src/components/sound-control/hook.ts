import { useEffect, useRef, useState } from "react";

/**
 * useVolume - Custom hook to manage audio volume
 * Handles global Howler volume state and mute/unmute logic with memory.
 */
export function useVolume(initialVolume = 50) {
  const [volume, setVolume] = useState(initialVolume);
  const previousVolume = useRef(initialVolume);

  // Sync volume with Howler global state
  useEffect(() => {
    Howler.volume(volume / 100);
  }, [volume]);

  // Handle slider change
  const setVolumeLevel = (newVolume: number) => {
    setVolume(newVolume);
    if (newVolume > 0) {
      previousVolume.current = newVolume;
    }
  };

  // Toggle mute state
  const toggleMute = () => {
    if (volume > 0) {
      // Muting: Save current volume and set to 0
      previousVolume.current = volume;
      setVolume(0);
    } else {
      // Unmuting: Restore previous volume (default to 50 if somehow 0)
      setVolume(previousVolume.current || 50);
    }
  };

  return {
    volume,
    isMuted: volume === 0,
    setVolume: setVolumeLevel,
    toggleMute,
  };
}
