import { useState } from 'react';
import {ActiveTab} from "@models/types.ts";
import {Link} from "react-router";
import {
  ArrowRightIcon, BadgeCheckIcon,
  BoxIcon,
  Building2Icon, CheckIcon,
  LayersIcon,
  PaletteIcon,
  ProportionsIcon,
  SquareTerminalIcon
} from "lucide-react";

const ExperiencePage = () => {
  // Interactive status for stack ratings
  const [selectedStackInfo, setSelectedStackInfo] = useState<string | null>(null);

  const coreStackItems = [
    { name: 'React / Next.js', rawValue: 95, icon: <ProportionsIcon /> },
    { name: 'TypeScript', rawValue: 90, icon: <SquareTerminalIcon /> },
    { name: 'Tailwind CSS', rawValue: 100, icon: <PaletteIcon /> },
    { name: 'Vue.js / Nuxt', rawValue: 40, icon: <BoxIcon />, muted: true }
  ];

  const handleStackHover = (name: string, value: number) => {
    setSelectedStackInfo(`${name}: Evaluated proficiency level at ${value}%. Fully capable of production integration.`);
  };

  return (
    <section className="space-y-16">
      {/* Experience Header */}
      <div className="mb-12">
        <h1 className="font-display text-4xl md:text-5xl text-[#dae2fd] mb-6 font-extrabold leading-tight">
          Crafting digital structures with <span className="text-gradient italic font-black">architectural precision.</span>
        </h1>
        <p className="font-sans text-[#cbc3d7] text-base md:text-lg max-w-2xl leading-relaxed">
          Senior Frontend Engineer specializing in high-performance web systems, modern UI/UX paradigms, and scalable technical foundations.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        
        {/* Milestone: Senior Frontend Developer (8 Columns) */}
        <div className="col-span-12 md:col-span-8 glass-card rounded-xl p-6 md:p-8 flex flex-col justify-between group overflow-hidden relative border-[#d0bcff]/10 hover:border-[#d0bcff]/30 transition-all duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d0bcff]/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-2">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-lg bg-[#d0bcff]/10 flex items-center justify-center border border-[#d0bcff]/20">
                  <span className="material-symbols-outlined text-[#d0bcff]">
                    <Building2Icon />
                  </span>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-[#4cd7f6] uppercase tracking-widest font-extrabold">
                    Present
                  </p>
                  <h3 className="font-sans text-xl font-bold text-white leading-tight">
                    Senior Frontend Engineer
                  </h3>
                </div>
              </div>
              <span className="font-mono text-xs text-[#cbc3d7] bg-[#222a3d] px-3 py-1 rounded-full border border-[#494454]/30">
                TechCorp Systems
              </span>
            </div>

            <p className="font-sans text-sm md:text-base text-[#cbc3d7] leading-relaxed max-w-2xl">
              Leading the design system initiative and architecting the core frontend infrastructure for a multi-tenant SaaS platform. Focused on performance optimization and developer experience.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {['REACT', 'TYPESCRIPT', 'NEXT.JS', 'TAILWIND'].map((tag) => (
                <span 
                  key={tag} 
                  className="tech-tag font-mono text-[10px] px-3 py-1 rounded-md tracking-wider font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Picture cover element at card bottom */}
          <div className="mt-8 overflow-hidden rounded-lg h-32 relative">
            <img
              alt="Code Background Layout"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-25 group-hover:opacity-45 transition-opacity duration-700 pointer-events-none"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvB7Zx7fAXq0r8bKuOhqW7PRMICWKtW7zo_qiGKkubGQ4iVmwwRmn48iIEGW9mmM4vG0LXMUgCiwb8GZXvuShzUmgkbf6wpnPV0hkIKn7Qkw3nvHsc96_CGy5Ho-TC0Y67nIqNqi8t23UGmAlPzI8HDZqkpe1jypoZvzC0UwMFz16JzwZ-yZFKd6mfDgFD9qRMVeUBfNW8zJa48WHJIXTjNBV3BTK1A_gMlneOUU2D7QedipyEbEK79-PlQWTvUA6WeKMt_3yi3BRg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-[#0b1326]/40 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Tech Stack Meter Settings (4 Columns) */}
        <div className="col-span-12 md:col-span-4 glass-card rounded-xl p-8 flex flex-col justify-between border-white/10 hover:border-[#4cd7f6]/40 transition-all duration-300">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#4cd7f6]/10 flex items-center justify-center mb-5 border border-[#4cd7f6]/20">
              <span className="material-symbols-outlined text-[#4cd7f6]">
                <LayersIcon />
              </span>
            </div>
            <h3 className="font-sans text-lg md:text-xl font-bold text-white mb-2">
              Core Stack
            </h3>
            <p className="font-sans text-xs text-[#cbc3d7]">
              Building the foundation of modern web experiences. Hover components to audit.
            </p>
          </div>

          <ul className="space-y-3 mt-6">
            {coreStackItems.map((item) => (
              <li
                key={item.name}
                onMouseEnter={() => handleStackHover(item.name, item.rawValue)}
                onMouseLeave={() => setSelectedStackInfo(null)}
                className={`flex items-center justify-between p-3 rounded-lg border flex-wrap gap-2 transition-colors duration-200 ${
                  item.muted 
                    ? 'bg-[#131b2e]/30 border-white/5 opacity-60' 
                    : 'bg-[#171f33] border-[#494454]/30 hover:border-[#4cd7f6]/30'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#d0bcff] text-sm">
                    {item.icon}
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#dae2fd]">
                    {item.name}
                  </span>
                </div>
                
                {/* Visual meter percentage */}
                <div className="w-16 h-1.5 rounded-full bg-[#2d3449] overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${item.muted ? 'bg-[#958ea0]' : 'bg-[#4cd7f6] shadow-[0_0_8px_rgba(76,215,246,0.6)]'}`}
                    style={{ width: `${item.rawValue}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Milestone: Freelance Architect (5 Columns) */}
        <div className="col-span-12 md:col-span-5 glass-card rounded-xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden border-white/10 hover:border-[#4cd7f6]/20 transition-all duration-300 group">
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4cd7f6]/5 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none" />
          
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#4cd7f6]/10 flex items-center justify-center border border-[#4cd7f6]/20">
                <span className="material-symbols-outlined text-[#4cd7f6]">
                  <Building2Icon />
                </span>
              </div>
              <div>
                <p className="font-mono text-[10px] text-[#cbc3d7] uppercase tracking-widest font-extrabold">
                  2020 - 2022
                </p>
                <h3 className="font-sans text-lg font-bold text-white">
                  Freelance Architect
                </h3>
              </div>
            </div>

            <p className="font-sans text-sm text-[#cbc3d7] leading-relaxed">
              Consulted for startups to deliver high-fidelity MVPs and internal tools. Specialized in rapid prototyping and building highly accessible component design patterns.
            </p>
          </div>

          <div className="mt-8 pt-5 border-t border-[#494454]/30 relative z-10">
            <Link
                to={ActiveTab.Projects}
              className="flex justify-between items-center text-[#cbc3d7] hover:text-[#4cd7f6] transition-colors cursor-pointer group/link"
            >
              <span className="font-mono text-xs font-semibold">12+ Global Clients serviced</span>
              <span className="material-symbols-outlined text-[#4cd7f6] group-hover/link:translate-x-1 transition-transform">
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
        </div>

        {/* Data & Logic Server Rack Integration (7 Columns) */}
        <div className="col-span-12 md:col-span-7 glass-card rounded-xl overflow-hidden group border-white/10 hover:border-[#d0bcff]/30 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="p-6 md:p-8 flex flex-col justify-center space-y-6">
              <div>
                <h3 className="font-sans text-xl font-bold text-white leading-tight">
                  Node.js &amp; <br />
                  <span className="text-gradient font-black">Backend Integration</span>
                </h3>
                <p className="font-sans text-xs text-[#cbc3d7] mt-2">
                  Bridging the gap between robust server logic and fluid client interfaces.
                </p>
              </div>

              <ul className="space-y-2 font-mono text-[11px] text-[#dae2fd]">
                {[
                  'RESTful API Design Patterns',
                  'GraphQL Systems Compilation',
                  'Asynchronous Microservices',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#4cd7f6]/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#4cd7f6] text-[10px] font-bold">
                        <CheckIcon size={16} />
                      </span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Picture block */}
            <div className="relative h-48 md:h-auto bg-[#222a3d] overflow-hidden">
              <img
                alt="Tech Architecture Infrastructure"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-40 group-hover:opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNX3P1DM8SH0EFcyJ7eCbn5wg2aPSscR4tpKZfLVoftrEiTQK4oXncDZWk91aumsty3D0ZN_yk04Qn3o_D1tnq1vH1EKVbAHNhpoiggtop0tSg_f4ZgbG9WXEDZcxkGEOhuFBQeXUYiCFNDGG-QLyOogH4DH8ZYpDQd2kChVGe-y6nPNRmJoThaEqiJyzM_3DcbOHL7KfXrDznUyiWHduMWpgvtwPzR41fHeUyL6kIl3MDv167C2-Vufv2HYnnj9uSOCFlmnvLc2JO"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0b1326]/20 to-[#0b1326] md:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] to-transparent md:hidden block" />
            </div>
          </div>
        </div>

        {/* Floating Stack evaluation audit logger banner */}
        {selectedStackInfo && (
          <div className="col-span-12 p-3 bg-[#060e20] border-l-4 border-[#ffafd3] rounded-lg font-mono text-[10px] text-[#ffafd3] animate-fade-in">
            &gt;&gt; SYSTEM STACK AUDIT LOGS: {selectedStackInfo} // ALL_SYSTEM_HEALTHY
          </div>
        )}

        {/* Stats Blocks */}
        <div className="col-span-6 md:col-span-3 glass-card rounded-xl p-6 text-center group hover:border-[#d0bcff]/40 transition-all">
          <p className="font-mono text-xs text-[#cbc3d7]/60 mb-2 group-hover:text-[#d0bcff] transition-all uppercase tracking-wider">
            Years of Exp
          </p>
          <p className="font-display text-4xl font-extrabold text-[#d0bcff] drop-shadow-[0_0_8px_rgba(208,188,255,0.4)]">
            08+
          </p>
        </div>

        <div className="col-span-6 md:col-span-3 glass-card rounded-xl p-6 text-center group hover:border-[#4cd7f6]/40 transition-all">
          <p className="font-mono text-xs text-[#cbc3d7]/60 mb-2 group-hover:text-[#4cd7f6] transition-all uppercase tracking-wider">
            Projects Completed
          </p>
          <p className="font-display text-4xl font-extrabold text-[#4cd7f6] drop-shadow-[0_0_8px_rgba(76,215,246,0.4)]">
            42
          </p>
        </div>

        {/* Final booking status CTA (6 Columns) */}
        <div className="col-span-12 md:col-span-6 glass-card rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between overflow-hidden relative border-white/10 group">
          <div className="absolute inset-0 bg-[#d0bcff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          <div className="flex gap-4 items-center relative z-10 w-full sm:w-auto">
            <div className="w-10 h-10 rounded-full bg-[#d0bcff]/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#d0bcff]">
                <BadgeCheckIcon size={20} />
              </span>
            </div>
            <div>
              <p className="font-sans text-sm md:text-base font-bold text-white">
                Available for projects
              </p>
              <p className="font-mono text-xs text-[#cbc3d7]/70">
                Currently booking Q4 2024 - Q1 2025
              </p>
            </div>
          </div>

          <Link
              to={ActiveTab.Contact}
            className="w-full sm:w-auto mt-4 sm:mt-0 relative z-10 bg-[#d0bcff] text-[#3c0091] px-6 py-2.5 rounded-lg font-mono text-xs font-bold hover:shadow-[0_0_20px_rgba(208,188,255,0.5)] hover:scale-[1.02] active:scale-95 transition-all text-center cursor-pointer"
          >
            GET IN TOUCH
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ExperiencePage;