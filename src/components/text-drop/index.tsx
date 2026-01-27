"use client";

const TEXT_DROP_CONTAINER_ID = "text-drop-container";

/**
 * Trigger the text drop animation for a specific character
 * @param char The character to drop
 */
export const triggerDrop = (char: string) => {
  const container = document.getElementById(TEXT_DROP_CONTAINER_ID);

  if (!container) {
    return;
  }

  const element = document.createElement("div");
  const startX = Math.random() * 100; // Random horizontal start (0-100vw)
  const duration = 2000 + Math.random() * 2000; // Random duration (2s - 4s)
  const size = 20 + Math.random() * 40; // Random size
  const rotateX = Math.random() * 360;
  const rotateY = Math.random() * 360;

  // Style the falling letter
  element.innerText = char;
  element.className = `
    absolute top-0 text-white font-bold pointer-events-none select-none
    flex items-center justify-center will-change-transform
    shadow-lg shadow-white/5 z-10
  `;
  element.style.left = `${startX}%`;
  element.style.fontSize = `${size}px`;
  element.style.textShadow = "0 0 10px rgba(255,255,255,0.5)";

  // Add 3D transform
  element.animate(
    [
      {
        transform: `translate3d(0, -100px, 0) rotateX(0deg) rotateY(0deg) scale(0.5)`,
        opacity: 0,
      },
      {
        transform: `translate3d(${Math.random() * 20 - 10}px, 50vh, 100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.2)`,
        opacity: 0.8,
        offset: 0.5,
      },
      {
        transform: `translate3d(0, 110vh, 0) rotateX(${rotateX * 2}deg) rotateY(${rotateY * 2}deg) scale(0.5)`,
        opacity: 0,
      },
    ],
    {
      duration: duration,
      easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    },
  );

  container.appendChild(element);

  // Cleanup
  setTimeout(() => {
    element.remove();
  }, duration);
};

export function TextDrop() {
  return (
    <div
      id={TEXT_DROP_CONTAINER_ID}
      className="fixed z-1 inset-0 pointer-events-none overflow-hidden perspective-[700px]"
    />
  );
}
