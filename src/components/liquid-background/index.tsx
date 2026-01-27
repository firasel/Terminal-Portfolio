export function LiquidBackground() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-10 bg-black overflow-hidden">
      {/* Blob 1 - Purple, top-left */}
      <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blob-purple blur-[5rem] opacity-60 animate-float" />

      {/* Blob 2 - Gray, bottom-right */}
      <div className="absolute -bottom-[10%] -right-[10%] w-[55vw] h-[55vw] rounded-full bg-blob-gray blur-[5rem] opacity-60 animate-float" />

      {/* Blob 3 - Blue, center */}
      <div className="absolute top-[45%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-blob-blue blur-[5rem] opacity-60 animate-float" />
    </div>
  );
}
