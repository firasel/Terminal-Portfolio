export function ExperienceTemplate(): HTMLDivElement {
  const parentDiv = document.createElement("div");

  parentDiv.className = "space-y-6";

  parentDiv.innerHTML = `
    <div class="border-b border-white/10 pb-4 mb-4">
      <div class="flex items-baseline justify-between">
        <h3 class="text-xl text-primary-glow font-bold">LemonHive</h3>
        <span class="text-white/40 text-sm">3 Years</span>
      </div>
      <p class="text-white/60 text-sm">Software Engineer <span class="mx-2">·</span> Full Stack Development</p>
      <a href="https://www.lemonhive.com" target="_blank" class="text-xs text-secondary-glow hover:underline mt-1 inline-block">lemonhive.com ↗</a>
    </div>

    <div class="space-y-6">
      <!-- Project 1 -->
      <div class="relative pl-4 border-l-2 border-white/10 hover:border-indigo-500/50 transition-colors group">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
          <h4 class="text-white font-bold group-hover:text-indigo-300 transition-colors">STI Safety Technology Website</h4>
          <a href="https://www.lemonhive.com/case-studies/sti-headless-manufacturing-website" target="_blank" class="text-xs text-white/40 hover:text-white transition-colors">View Case Study ↗</a>
        </div>
        <p class="text-white/70 text-sm leading-relaxed mb-2">
          Built the frontend for Safety Technology International, a leader in safety and security products. Developed the interactive <span class="text-white/90 font-medium">Build-it</span> tool that handles 1.5M+ product combinations and the <span class="text-white/90 font-medium">AppGuide</span> feature with pin-point product placement.
        </p>
        <div class="flex flex-wrap gap-2 opacity-80">
           <span class="px-1.5 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-white/60">Next.js</span>
           <span class="px-1.5 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-white/60">Sanity CMS</span>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="relative pl-4 border-l-2 border-white/10 hover:border-emerald-500/50 transition-colors group">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
          <h4 class="text-white font-bold group-hover:text-emerald-300 transition-colors">Luxury Jewellery E-commerce</h4>
          <a href="https://www.lemonhive.com/case-studies/headless-shopify-plus-case-study" target="_blank" class="text-xs text-white/40 hover:text-white transition-colors">View Case Study ↗</a>
        </div>
        <p class="text-white/70 text-sm leading-relaxed mb-2">
          Developed the frontend for a luxury jewellery brand's headless Shopify Plus store. Created smooth animations, custom product options, and interactive displays that improved site performance by 65% while delivering an elegant shopping experience.
        </p>
        <div class="flex flex-wrap gap-2 opacity-80">
           <span class="px-1.5 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-white/60">Next.js</span>
           <span class="px-1.5 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-white/60">Shopify Plus</span>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="relative pl-4 border-l-2 border-white/10 hover:border-amber-500/50 transition-colors group">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
          <h4 class="text-white font-bold group-hover:text-amber-300 transition-colors">BrightonSEO Conference</h4>
          <a href="https://www.lemonhive.com/case-studies/brightonseo" target="_blank" class="text-xs text-white/40 hover:text-white transition-colors">View Case Study ↗</a>
        </div>
        <p class="text-white/70 text-sm leading-relaxed mb-2">
          Built the frontend for the world's largest search marketing conference website. Created interactive schedule features, speaker profiles, and content management tools that serve 5,000+ attendees across multiple events.
        </p>
        <div class="flex flex-wrap gap-2 opacity-80">
           <span class="px-1.5 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-white/60">Next.js</span>
           <span class="px-1.5 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-white/60">Sanity CMS</span>
        </div>
      </div>

      <!-- Project 4 -->
      <div class="relative pl-4 border-l-2 border-white/10 hover:border-rose-500/50 transition-colors group">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
          <h4 class="text-white font-bold group-hover:text-rose-300 transition-colors">Learn LMS Platform</h4>
          <a href="https://www.lemonhive.com/case-studies/custom-lms-software-development" target="_blank" class="text-xs text-white/40 hover:text-white transition-colors">View Case Study ↗</a>
        </div>
        <p class="text-white/70 text-sm leading-relaxed mb-2">
          Built the complete frontend for a custom Learning Management System from scratch. Developed real-time dashboards, interactive course modules, video players, quiz systems, and progress tracking interfaces for student and admin users.
        </p>
        <div class="flex flex-wrap gap-2 opacity-80">
           <span class="px-1.5 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-white/60">Next.js</span>
           <span class="px-1.5 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-white/60">GraphQL</span>
        </div>
      </div>

      <!-- Project 5 -->
      <div class="relative pl-4 border-l-2 border-white/10 hover:border-cyan-500/50 transition-colors group">
         <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
          <h4 class="text-white font-bold group-hover:text-cyan-300 transition-colors">Take It Offline (TIO)</h4>
          <a href="https://www.lemonhive.com/case-studies/sveltekit-in-action" target="_blank" class="text-xs text-white/40 hover:text-white transition-colors">View Case Study ↗</a>
        </div>
        <p class="text-white/70 text-sm leading-relaxed mb-2">
          Developed the frontend for a Digital Marketing Roundtable platform using SvelteKit. Built ticket booking flows, speaker profiles, event displays, and dynamic content sections that improved user engagement and community interaction.
        </p>
        <div class="flex flex-wrap gap-2 opacity-80">
           <span class="px-1.5 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-white/60">SvelteKit</span>
           <span class="px-1.5 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-white/60">Sanity CMS</span>
        </div>
      </div>
    </div>
  `;
  return parentDiv;
}
