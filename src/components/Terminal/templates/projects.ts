export function ProjectsTemplate(): HTMLDivElement {
  const parentDiv = document.createElement("div");

  parentDiv.className = "space-y-4";

  parentDiv.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <a href="https://daily-blogs.vercel.app/" target="_blank" rel="noreferrer" 
         class="group p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 block">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">FULLSTACK</span>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-white/60 border border-white/10">Next.js</span>
        </div>
        <h3 class="text-white font-bold text-base mb-1 group-hover:text-primary-glow transition-colors">Daily Blogs</h3>
        <p class="text-white/50 text-xs">Blog platform with user authentication</p>
      </a>

      <a href="https://cedex.vercel.app/" target="_blank" rel="noreferrer"
         class="group p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 block">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">FRONTEND</span>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-white/60 border border-white/10">Next.js</span>
        </div>
        <h3 class="text-white font-bold text-base mb-1 group-hover:text-primary-glow transition-colors">Cedex</h3>
        <p class="text-white/50 text-xs">Portfolio website with smooth animations</p>
      </a>

      <a href="https://mobile-galleries.web.app/" target="_blank" rel="noreferrer"
         class="group p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 block">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">LANDING</span>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-white/60 border border-white/10">Next.js</span>
        </div>
        <h3 class="text-white font-bold text-base mb-1 group-hover:text-primary-glow transition-colors">Mobile Gallery</h3>
        <p class="text-white/50 text-xs">Mobile repair service landing page</p>
      </a>

      <a href="https://bdphotowala.web.app/" target="_blank" rel="noreferrer"
         class="group p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 block">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">FULLSTACK</span>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-white/60 border border-white/10">React</span>
        </div>
        <h3 class="text-white font-bold text-base mb-1 group-hover:text-primary-glow transition-colors">BD PhotoWala</h3>
        <p class="text-white/50 text-xs">Photography service booking platform</p>
      </a>
    </div>
    <p class="text-white/40 text-xs mt-4">
      Type "<span class="text-secondary-glow">pr [1-4]</span>" for detailed information
    </p>
  `;
  return parentDiv;
}
