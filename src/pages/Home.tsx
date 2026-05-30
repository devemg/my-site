import {useState} from 'react';
import {ActiveTab} from "@models/types.ts";
import {Link} from "react-router";
import {
    ArrowRightIcon,
    BadgeCheckIcon, CircleCheckBigIcon, CogIcon,
    DraftingCompassIcon,
    LayersIcon, PaletteIcon,
    PencilLineIcon, PickaxeIcon,
    ZapIcon
} from "lucide-react";

const HomePage = () => {
    const [optimizerValue, setOptimizerValue] = useState(96.2);
    const [clickedStack, setClickedStack] = useState<string | null>(null);
    const [terminalLogs, setTerminalLogs] = useState<string[]>([
        'SYSTEM: READY_FOR_DEPLOYMENT',
        'AGENT: devemg v_2026 initialized successfully.',
    ]);

    const handleOptimiseClick = () => {
        if (optimizerValue < 99.8) {
            const newVal = parseFloat((optimizerValue + 0.4).toFixed(1));
            setOptimizerValue(newVal);
            addTerminalLog(`COMMAND: RUN optimize_infrastructure --level=max -> Current efficiency: ${newVal}%`);
        } else {
            addTerminalLog('STATUS: Infrastructure is already at peak structural performance (99.8%).');
        }
    };

    const addTerminalLog = (msg: string) => {
        setTerminalLogs((prev) => [msg, ...prev.slice(0, 4)]);
    };

    const handleTechClick = (tech: string) => {
        setClickedStack(tech);
        addTerminalLog(`INSPECT_MODULE: Loaded metadata for [${tech}] successfully.`);
    };

    return (
        <section className="space-y-32">
            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Side: Info */}
                <div className="lg:col-span-8 space-y-8 relative">
                    <div
                        className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#d0bcff]/10 border border-[#d0bcff]/30 text-primary font-mono text-[11px] md:text-[12px] backdrop-blur-md">
                        <span
                            className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6] shadow-[0_0_12px_#4cd7f6] mr-3 animate-pulse"/>
                        <span
                            className="tracking-wider uppercase">SYSTEM_STATUS: ONLINE // READY__FOR__DEPLOYMENT</span>
                    </div>

                    <div className="space-y-6">
                        <h1 className="font-display text-[clamp(36px,6vw,72px)] leading-[1.05] tracking-tight font-extrabold text-[#dae2fd]">
                            Senior <span className="text-gradient font-black">Frontend Engineer</span> crafting
                            resilient digital architectures.
                        </h1>
                        <p className="font-sans text-base md:text-lg text-[#cbc3d7] max-w-2xl border-l-2 border-[#d0bcff]/40 pl-6 py-2 leading-relaxed">
                            Expertise in React, TypeScript, and high-performance micro-frontends. Bridging the gap
                            between complex engineering logic and immersive user experiences.
                        </p>
                    </div>

                    {/* Action Callouts */}
                    <div className="flex flex-wrap gap-5 pt-4">
                        <Link
                            role="button"
                            to={ActiveTab.Projects}
                            className="group relative px-8 py-4 bg-[#d0bcff] text-[#3c0091] font-mono text-xs font-bold tracking-widest rounded-lg shadow-[0_0_20px_rgba(208,188,255,0.3)] hover:shadow-[0_0_35px_rgba(208,188,255,0.5)] transition-all active:scale-95 flex items-center gap-3 overflow-hidden cursor-pointer"
                        >
                            <div
                                className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"/>
                            <span>VIEW PROJECTS</span>
                            <span
                                className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                <ArrowRightIcon/>
              </span>
                        </Link>

                        <Link
                            to={ActiveTab.Contact}
                            className="px-8 py-4 flex items-center glass-card text-[#dae2fd] font-mono text-xs font-bold tracking-widest rounded-lg hover:bg-[#222a3d]/80 transition-all active:scale-95 border-white/10 cursor-pointer"
                        >
                            CONTACT_PROTOCOL
                        </Link>
                    </div>

                    {/* Simulated Debug Console */}
                    <div
                        className="hidden sm:block max-w-lg p-3 bg-[#060e20]/80 rounded-lg border border-[#494454]/40 font-mono text-[10px] text-secondary/80 space-y-1">
                        <div
                            className="flex items-center justify-between text-white/40 border-b border-[#494454]/20 pb-1 mb-2">
                            <span>SYS_MONITOR Logs</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] animate-ping"/>
                        </div>
                        {terminalLogs.map((log, idx) => (
                            <div key={idx} className="truncate">
                                &gt; {log}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Visual Graphic Frame */}
                <div className="lg:col-span-4 relative hidden lg:block">
                    <div
                        className="absolute -inset-10 bg-gradient-to-tr from-[#d0bcff]/30 to-[#4cd7f6]/20 blur-[80px] opacity-40 animate-pulse pointer-events-none"/>

                    <div className="relative animate-float">
                        <div
                            className="glass-card p-1.5 rounded-2xl bg-gradient-to-br from-[#d0bcff]/40 to-transparent">
                            <div
                                className="bg-[#0b1326] rounded-xl overflow-hidden aspect-square flex items-center justify-center relative group">
                                <img
                                    alt="Frontend Engineering Illustration"
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 scale-105 hover:scale-100 pointer-events-none"
                                    src="https://lh3.googleusercontent.com/aida/ADBb0uhHi2zw03r3oyENQp4pNlXU9ERyTgUpsec2ts8XZpgWm_QqGWXUC3f8Lfho6gjbRXkQRWY4iaMg1SktuTDSGL8BkFgbi95SmeidLjLTIonJMXpYDGqoyF8F03JlcNGXf8KZSCHBZVHoU4b-ce_eFYw4xMLoOm6vdStGunOSmu_Tryu5ZVS5MTVF9HXI7YF9Xe2sjVC0QORipTJo3qPm6y674HQSR_U18JflvLkfpMUNGih0OiAiGryORwlP"
                                />
                                <div className="absolute inset-0 bg-[#060e20]/20 mix-blend-color"/>
                            </div>
                        </div>

                        {/* Floating Overlap Status Box */}
                        <div
                            className="absolute -bottom-10 -right-4 p-5 glass-card rounded-xl border-[#d0bcff]/30 shadow-2xl max-w-[200px]">
                            <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-secondary glow-accent text-sm"
                      style={{fontVariationSettings: "'FILL' 1"}}>
                  <BadgeCheckIcon/>
                </span>
                                <span
                                    className="font-mono text-[9px] text-[#dae2fd] tracking-wider font-extrabold uppercase">
                  CORE_ENG_V4
                </span>
                            </div>

                            <div className="space-y-2">
                                <div className="h-1.5 w-full bg-[#222a3d] rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-linear-to-r from-[#d0bcff] to-[#4cd7f6] transition-all duration-500 shadow-[0_0_8px_#4cd7f6]"
                                        style={{width: `${optimizerValue}%`}}
                                    />
                                </div>
                                <div className="flex justify-between font-mono text-[9px] text-[#cbc3d7]">
                                    <span className="uppercase">EFICACIA</span>
                                    <span className="text-secondary font-extrabold tracking-widest">
                    {optimizerValue}%
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bento-Style Key Expertise Section */}
            <div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                    {/* Card 1: System Architecture */}
                    <div
                        className="md:col-span-5 glass-card p-10 rounded-3xl flex flex-col justify-between group hover:border-[#d0bcff]/50 transition-all duration-300">
            <span
                className="material-symbols-outlined text-primary text-5xl mb-12 glow-primary group-hover:scale-110 transition-transform">
              <DraftingCompassIcon/>
            </span>
                        <div>
                            <h3 className="font-sans text-xl md:text-2xl mb-4 text-primary font-bold">
                                System Architecture
                            </h3>
                            <p className="text-[#cbc3d7] text-sm md:text-base leading-relaxed">
                                Designing modular, hyper-scalable frontend ecosystems that eliminate technical debt and
                                accelerate velocity.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 & 3 Combined Block */}
                    <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Action Core */}
                        <div
                            className="glass-card p-8 rounded-3xl group hover:border-[#4cd7f6]/50 transition-all duration-300 md:translate-y-6">
              <span
                  className="material-symbols-outlined text-secondary text-4xl mb-6 glow-accent group-hover:rotate-12 transition-transform">
                <ZapIcon/>
              </span>
                            <h3 className="font-sans text-lg md:text-xl mb-3 font-semibold text-[#dae2fd]">
                                Performance Core
                            </h3>
                            <p className="text-[#cbc3d7] text-xs md:text-sm leading-relaxed">
                                Pushing Core Web Vitals to the limit. Every millisecond counts for global user
                                retention.
                            </p>
                        </div>

                        {/* Visual fidelity */}
                        <div
                            className="glass-card p-8 rounded-3xl group hover:border-[#ffafd3]/50 transition-all duration-300">
              <span
                  className="material-symbols-outlined text-[#ffafd3] text-4xl mb-6 filter drop-shadow(0 0 8px rgba(255,175,211,0.5)) group-hover:-rotate-12 transition-transform">
                <PencilLineIcon/>
              </span>
                            <h3 className="font-sans text-lg md:text-xl mb-3 font-semibold text-[#dae2fd]">
                                Visual Fidelity
                            </h3>
                            <p className="text-[#cbc3d7] text-xs md:text-sm leading-relaxed">
                                Meticulous design-to-code implementation with zero-tolerance for layout shifts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Stack Breakdown Section */}
            <div className="space-y-12">
                {/* Stack Header */}
                <div
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#494454]/30 pb-8 relative">
                    <div className="absolute -left-10 bottom-0 w-20 h-[2px] bg-[#d0bcff] shadow-[0_0_10px_#d0bcff]"/>
                    <div>
                        <h2 className="font-sans text-2xl md:text-3xl font-extrabold flex items-center gap-4 text-[#dae2fd]">
              <span className="material-symbols-outlined text-primary glow-primary">
                <LayersIcon/>
              </span>
                            Technical Stack
                        </h2>
                        <p className="text-[#cbc3d7] text-sm md:text-base mt-2 max-w-lg">
                            The robust engineering foundation powering next-generation web applications.
                        </p>
                    </div>
                    <div
                        className="font-mono text-[11px] text-primary/90 bg-[#d0bcff]/10 px-4 py-2 rounded-lg border border-[#d0bcff]/30 backdrop-blur-sm self-start md:self-auto">
                        CURRENT_VERSION: 2024.Q4-STABLE
                    </div>
                </div>

                {/* Triple Bento Stack columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Card 1: Core Infra (React / TS / etc.) */}
                    <div
                        className="lg:col-span-5 glass-card p-8 md:p-10 rounded-2xl border-l-[6px] border-[#d0bcff] relative overflow-hidden group">
                        <div
                            className="absolute top-0 right-0 p-8 opacity-[0.05] text-primary group-hover:opacity-[0.15] transition-opacity duration-300">
              <span className="material-symbols-outlined text-[100px] select-none">
                <LayersIcon/>
              </span>
                        </div>

                        <div className="flex items-center gap-4 mb-8">
                            <div
                                className="p-3 rounded-xl bg-[#d0bcff]/15 text-primary shadow-[0_0_20px_rgba(208,188,255,0.3)]">
                                <span className="material-symbols-outlined"><LayersIcon/></span>
                            </div>
                            <h3 className="font-sans text-[#dae2fd] text-lg md:text-xl font-bold tracking-tight">
                                Core Infrastructure
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {['React 19-RC', 'Next.js 15', 'TypeScript', 'TanStack'].map((tech) => (
                                <div
                                    key={tech}
                                    onClick={() => handleTechClick(tech)}
                                    className="p-4 rounded-xl bg-[#171f33]/45 border border-[#494454]/40 font-mono text-xs text-[#cbc3d7] flex items-center gap-3 hover:bg-[#d0bcff]/15 hover:text-white hover:border-[#d0bcff]/50 transition-all duration-300 cursor-pointer"
                                >
                                    <span className="w-2 h-2 bg-[#d0bcff] rounded-full glow-primary"/>
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: Styling (Tailwind/Framer/Shader) */}
                    <div
                        className="lg:col-span-3 glass-card p-8 md:p-10 rounded-2xl border-t-[6px] border-[#4cd7f6]/40 hover:bg-[#171f33]/30 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-[#4cd7f6]/15 text-secondary glow-accent">
                                <span className="material-symbols-outlined"><PaletteIcon/></span>
                            </div>
                            <h3 className="font-sans text-[#dae2fd] text-lg md:text-xl font-bold">
                                Styling
                            </h3>
                        </div>

                        <ul className="space-y-6 font-mono text-xs text-[#cbc3d7]">
                            {[
                                {name: 'Tailwind CSS v4', desc: 'Pre-compiled atomic rules'},
                                {name: 'Framer Motion', desc: 'Physic-based transitions'},
                                {name: 'Shader UI', desc: 'Creative canvas background matrix'},
                            ].map((styleItem) => (
                                <li
                                    key={styleItem.name}
                                    onClick={() => handleTechClick(styleItem.name)}
                                    className="flex items-start gap-4 group/item cursor-pointer hover:text-white"
                                >
                  <span
                      className="material-symbols-outlined text-secondary text-xl glow-accent group-hover/item:scale-125 transition-transform">
                    <CircleCheckBigIcon size={16} />
                  </span>
                                    <div>
                                        <span className="block font-semibold">{styleItem.name}</span>
                                        <span
                                            className="text-[10px] text-[#cbc3d7]/60 block mt-0.5">{styleItem.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Card 3: Toolchain Grid */}
                    <div
                        className="lg:col-span-4 glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden bg-gradient-to-br from-transparent to-[#d0bcff]/10">
                        <div className="flex items-center gap-4 mb-8">
                            <div
                                className="p-3 rounded-xl bg-[#ffafd3]/20 text-[#ffafd3] filter drop-shadow(0 0 8px rgba(255,175,211,0.4))">
                                <span className="material-symbols-outlined"><CogIcon /></span>
                            </div>
                            <h3 className="font-sans text-[#dae2fd] text-lg md:text-xl font-bold">
                                Toolchain
                            </h3>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-3">
                                {['VITEST', 'PLAYWRIGHT', 'TURBOREPO', 'VERCEL'].map((tool) => (
                                    <div
                                        key={tool}
                                        onClick={() => handleTechClick(tool)}
                                        className="text-center py-3 rounded-lg bg-[#060e20]/80 border border-[#494454]/25 hover:border-[#d0bcff]/60 hover:text-white font-mono text-[10px] transition-colors cursor-pointer uppercase tracking-widest text-[#cbc3d7]"
                                    >
                                        {tool}
                                    </div>
                                ))}
                            </div>

                            {/* Progress and optimized slider */}
                            <div className="space-y-3 pt-3 border-t border-[#494454]/20">
                                <div
                                    className="flex justify-between font-mono text-[10px] tracking-widest text-[#dae2fd]">
                                    <span className="text-[#cbc3d7]/60">BUILD_QUALITY</span>
                                    <div className="flex items-center gap-1">
                                        <span
                                            className="text-primary font-extrabold uppercase animate-pulse">OPTIMIZED</span>
                                        <span
                                            className="material-symbols-outlined text-[10px] text-secondary"><PickaxeIcon size={14} /></span>
                                    </div>
                                </div>
                                <div
                                    onClick={handleOptimiseClick}
                                    className="w-full h-1.5 bg-[#222a3d] rounded-full overflow-hidden cursor-pointer hover:shadow-[0_0_8px_#4cd7f6] transition-all"
                                    title="Click to perform active infrastructure optimization"
                                >
                                    <div
                                        className="h-full bg-linear-to-r from-[#d0bcff] via-[#4cd7f6] to-[#ffafd3] w-full"/>
                                </div>
                                <div className="text-[9px] font-mono text-[#cbc3d7]/50 text-right">
                                    Interactive calibration line. Click to optimize.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Selected Stack Details Interactive Card */}
                {clickedStack && (
                    <div
                        className="p-4 bg-[#171f33]/80 border border-[#4cd7f6]/40 rounded-xl flex items-center justify-between font-mono text-xs text-[#dae2fd] animate-slide-in">
                        <div className="flex items-center gap-3">
                            <span
                                className="material-symbols-outlined text-secondary animate-spin text-sm">settings</span>
                            <span>Successfully parsed <strong>{clickedStack}</strong> metrics: Speed check latency: &lt;1.2ms. Stability profile: 100%.</span>
                        </div>
                        <button
                            onClick={() => setClickedStack(null)}
                            className="text-[#ffafd3] font-bold text-xs cursor-pointer hover:underline px-2"
                        >
                            DISMISS
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default HomePage;