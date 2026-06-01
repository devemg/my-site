import {ActiveTab} from "@models/types.ts";
import {Link} from "react-router";
import {
    ArrowRightIcon,
    CircleCheckBigIcon, CogIcon,
    DraftingCompassIcon,
    LayersIcon, PaletteIcon,
    PencilLineIcon, PickaxeIcon,
    ZapIcon
} from "lucide-react";
import {ConsoleLogProvider, useConsoleLog} from "@components/home/ConsoleLog/context";
import {FloatingSide} from "@components/home/FloatingSide.tsx";
import {twMerge} from "tailwind-merge";

const HomeContent = () => {
    const image = 'https://res.cloudinary.com/devemg/image/upload/v1780275240/my-portfolio/ilustration-1_ienhip.png';
    const {
        setClickedStack, clickedStack, optimizerValue,
        handleOptimiseClick,
        handleTechClick,
    } = useConsoleLog();
    return (
        <section className="space-y-32">
            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Side: Info */}
                <div className={twMerge('space-y-8 relative', image ? "lg:col-span-8" : "lg:col-span-12")}>
                    <div
                        className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-[11px] md:text-[12px] backdrop-blur-md">
                        <span
                            className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_12px_#4cd7f6] mr-3 animate-pulse"/>
                        <span
                            className="tracking-wider uppercase">SYSTEM_STATUS: ONLINE</span>
                    </div>

                    <div className="space-y-6">
                        <h1 className="font-display text-[clamp(36px,4vw,72px)] leading-[1.05] tracking-tight font-extrabold text-on-surface">
                            Senior <span className="text-gradient font-black">Frontend Developer</span> crafting
                            resilient digital solutions.
                        </h1>
                        <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl border-l-2 border-primary/40 pl-6 py-2 leading-relaxed">
                            Expertise in React, Angular, TypeScript, and high-performance frontend applications.
                            Bridging the gap
                            between complex engineering logic and immersive user experiences.
                        </p>
                    </div>

                    {/* Action Callouts */}
                    <div className="flex flex-wrap gap-5 pt-4">
                        <Link
                            role="button"
                            to={ActiveTab.Projects}
                            className="group relative px-8 py-4 bg-primary text-on-primary font-mono text-xs font-bold tracking-widest rounded-lg shadow-[0_0_20px_rgba(208,188,255,0.3)] hover:shadow-[0_0_35px_rgba(208,188,255,0.5)] transition-all active:scale-95 flex items-center gap-3 overflow-hidden cursor-pointer"
                        >
                            <div
                                className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"/>
                            <span>VIEW PROJECTS</span>
                            <span
                                className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                <ArrowRightIcon/>
              </span>
                        </Link>

                        <Link
                            to={ActiveTab.Contact}
                            className="px-8 py-4 flex items-center glass-card text-on-surface font-mono text-xs font-bold tracking-widest rounded-lg hover:bg-surface-container-high/80 transition-all active:scale-95 border-white/10 cursor-pointer"
                        >
                            CONTACT_PROTOCOL
                        </Link>
                    </div>


                </div>

                {/* Right Side: Visual Graphic Frame */}
                <div className={image ? "lg:col-span-4 relative hidden lg:block" : ""}>
                    <FloatingSide optimizerValue={optimizerValue} image={image}/>
                </div>
            </div>

            {/* Key Expertise Section */}
            <div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                    {/* Card 1: System Architecture */}
                    <div
                        className="md:col-span-5 glass-card p-10 rounded-3xl flex flex-col justify-between group hover:border-primary/50 transition-all duration-300">
            <span
                className="material-symbols-outlined text-primary text-5xl mb-12 glow-primary group-hover:scale-110 transition-transform">
              <DraftingCompassIcon/>
            </span>
                        <div>
                            <h3 className="font-sans text-xl md:text-2xl mb-4 text-primary font-bold">
                                System Architecture
                            </h3>
                            <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                                Designing modular, hyper-scalable frontend ecosystems that eliminate technical debt and
                                accelerate velocity.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 & 3 Combined Block */}
                    <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Action Core */}
                        <div
                            className="glass-card p-8 rounded-3xl group hover:border-secondary/50 transition-all duration-300 md:translate-y-6">
              <span
                  className="material-symbols-outlined text-secondary text-4xl mb-6 glow-accent group-hover:rotate-12 transition-transform">
                <ZapIcon/>
              </span>
                            <h3 className="font-sans text-lg md:text-xl mb-3 font-semibold text-on-surface">
                                Performance Core
                            </h3>
                            <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">
                                Pushing Core Web Vitals to the limit. Every millisecond counts for global user
                                retention.
                            </p>
                        </div>

                        {/* Visual fidelity */}
                        <div
                            className="glass-card p-8 rounded-3xl group hover:border-tertiary/50 transition-all duration-300">
              <span
                  className="material-symbols-outlined text-tertiary text-4xl mb-6 filter drop-shadow(0 0 8px rgba(255,175,211,0.5)) group-hover:-rotate-12 transition-transform">
                <PencilLineIcon/>
              </span>
                            <h3 className="font-sans text-lg md:text-xl mb-3 font-semibold text-on-surface">
                                Visual Fidelity
                            </h3>
                            <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">
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
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant/30 pb-8 relative">
                    <div className="absolute -left-10 bottom-0 w-20 h-0.5 bg-primary shadow-[0_0_10px_#d0bcff]"/>
                    <div>
                        <h2 className="font-sans text-2xl md:text-3xl font-extrabold flex items-center gap-4 text-on-surface">
              <span className="material-symbols-outlined text-primary glow-primary">
                <LayersIcon/>
              </span>
                            Technical Stack
                        </h2>
                        <p className="text-on-surface-variant text-sm md:text-base mt-2 max-w-lg">
                            The robust engineering foundation powering next-generation web applications.
                        </p>
                    </div>
                    <div
                        className="font-mono text-[11px] text-primary/90 bg-primary/10 px-4 py-2 rounded-lg border border-primary/30 backdrop-blur-sm self-start md:self-auto">
                        CURRENT_VERSION: 2024.Q4-STABLE
                    </div>
                </div>

                {/* Triple Bento Stack columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Card 1: Core Infra (React / TS / etc.) */}
                    <div
                        className="lg:col-span-5 glass-card p-8 md:p-10 rounded-2xl border-l-[6px] border-primary relative overflow-hidden group">
                        <div
                            className="absolute top-0 right-0 p-8 opacity-[0.05] text-primary group-hover:opacity-[0.15] transition-opacity duration-300">
              <span className="material-symbols-outlined text-[100px] select-none">
                <LayersIcon/>
              </span>
                        </div>

                        <div className="flex items-center gap-4 mb-8">
                            <div
                                className="p-3 rounded-xl bg-primary/15 text-primary shadow-[0_0_20px_rgba(208,188,255,0.3)]">
                                <span className="material-symbols-outlined"><LayersIcon/></span>
                            </div>
                            <h3 className="font-sans text-on-surface text-lg md:text-xl font-bold tracking-tight">
                                Core Infrastructure
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {['React 19-RC', 'Next.js 15', 'TypeScript', 'TanStack'].map((tech) => (
                                <div
                                    key={tech}
                                    onClick={() => handleTechClick(tech)}
                                    className="p-4 rounded-xl bg-surface-container/45 border border-outline-variant/40 font-mono text-xs text-on-surface-variant flex items-center gap-3 hover:bg-primary/15 hover:text-white hover:border-primary/50 transition-all duration-300 cursor-pointer"
                                >
                                    <span className="w-2 h-2 bg-primary rounded-full glow-primary"/>
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: Styling (Tailwind/Framer/Shader) */}
                    <div
                        className="lg:col-span-3 glass-card p-8 md:p-10 rounded-2xl border-t-[6px] border-secondary/40 hover:bg-surface-container/30 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-secondary/15 text-secondary glow-accent">
                                <span className="material-symbols-outlined"><PaletteIcon/></span>
                            </div>
                            <h3 className="font-sans text-on-surface text-lg md:text-xl font-bold">
                                Styling
                            </h3>
                        </div>

                        <ul className="space-y-6 font-mono text-xs text-on-surface-variant">
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
                    <CircleCheckBigIcon size={16}/>
                  </span>
                                    <div>
                                        <span className="block font-semibold">{styleItem.name}</span>
                                        <span
                                            className="text-[10px] text-on-surface-variant/60 block mt-0.5">{styleItem.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Card 3: Toolchain Grid */}
                    <div
                        className="lg:col-span-4 glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden bg-linear-to-br from-transparent to-primary/10">
                        <div className="flex items-center gap-4 mb-8">
                            <div
                                className="p-3 rounded-xl bg-tertiary/20 text-tertiary filter drop-shadow(0 0 8px rgba(255,175,211,0.4))">
                                <span className="material-symbols-outlined"><CogIcon/></span>
                            </div>
                            <h3 className="font-sans text-on-surface text-lg md:text-xl font-bold">
                                Toolchain
                            </h3>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-3">
                                {['VITEST', 'PLAYWRIGHT', 'TURBOREPO', 'VERCEL'].map((tool) => (
                                    <div
                                        key={tool}
                                        onClick={() => handleTechClick(tool)}
                                        className="text-center py-3 rounded-lg bg-surface-container-lowest/80 border border-outline-variant/25 hover:border-primary/60 hover:text-white font-mono text-[10px] transition-colors cursor-pointer uppercase tracking-widest text-on-surface-variant"
                                    >
                                        {tool}
                                    </div>
                                ))}
                            </div>

                            {/* Progress and optimized slider */}
                            <div className="space-y-3 pt-3 border-t border-outline-variant/20">
                                <div
                                    className="flex justify-between font-mono text-[10px] tracking-widest text-on-surface">
                                    <span className="text-on-surface-variant/60">BUILD_QUALITY</span>
                                    <div className="flex items-center gap-1">
                                        <span
                                            className="text-primary font-extrabold uppercase animate-pulse">OPTIMIZED</span>
                                        <span
                                            className="material-symbols-outlined text-[10px] text-secondary"><PickaxeIcon
                                            size={14}/></span>
                                    </div>
                                </div>
                                <div
                                    onClick={handleOptimiseClick}
                                    className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden cursor-pointer hover:shadow-[0_0_8px_#4cd7f6] transition-all"
                                    title="Click to perform active infrastructure optimization"
                                >
                                    <div
                                        className="h-full bg-linear-to-r from-primary via-secondary to-tertiary w-full"/>
                                </div>
                                <div className="text-[9px] font-mono text-on-surface-variant/50 text-right">
                                    Interactive calibration line. Click to optimize.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Selected Stack Details Interactive Card */}
                {clickedStack && (
                    <div
                        className="p-4 bg-surface-container/80 border border-secondary/40 rounded-xl flex items-center justify-between font-mono text-xs text-on-surface animate-slide-in">
                        <div className="flex items-center gap-3">
                            <span
                                className="material-symbols-outlined text-secondary animate-spin text-sm">settings</span>
                            <span>Successfully parsed <strong>{clickedStack}</strong> metrics: Speed check latency: &lt;1.2ms. Stability profile: 100%.</span>
                        </div>
                        <button
                            onClick={() => setClickedStack(null)}
                            className="text-tertiary font-bold text-xs cursor-pointer hover:underline px-2"
                        >
                            DISMISS
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

const HomePage = () => (
    <ConsoleLogProvider><HomeContent/></ConsoleLogProvider>
)

export default HomePage;