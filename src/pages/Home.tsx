import {ActiveTab} from "@models/types.ts";
import {Link} from "react-router";
import {
    ArrowRightIcon,
    CircleCheckBigIcon, CogIcon,
    DraftingCompassIcon,
    LayersIcon, PaletteIcon,
    PencilLineIcon,
    ZapIcon, CloudIcon, SparklesIcon,
} from "lucide-react";
import {FloatingSide} from "@components/home/FloatingSide.tsx";
import {twMerge} from "tailwind-merge";

const HomePage = () => {
    const image = 'https://res.cloudinary.com/devemg/image/upload/v1780275240/my-portfolio/ilustration-1_ienhip.png';
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
                            Passionate Front-End Developer with over 5 years of experience building scalable,
                            high-performance web applications. Expertise in React, Angular, and TypeScript.
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
                    <FloatingSide optimizerValue={95} image={image}/>
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
                                Designing modular, scalable frontend ecosystems with clean, testable code and Agile
                                methodologies.
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
                                Optimization of web applications for high-demand environments and content delivery.
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
                                Precise UI implementation from Figma specifications with focus on accessibility and
                                responsiveness.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Impact Section */}
            {/*<div className="space-y-12">*/}
            {/*    <div*/}
            {/*        className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant/30 pb-8 relative">*/}
            {/*        <div className="absolute -left-10 bottom-0 w-20 h-0.5 bg-secondary shadow-[0_0_10px_#4cd7f6]"/>*/}
            {/*        <div>*/}
            {/*            <h2 className="font-sans text-2xl md:text-3xl font-extrabold flex items-center gap-4 text-on-surface">*/}
            {/*  <span className="material-symbols-outlined text-secondary glow-accent">*/}
            {/*    <BriefcaseIcon/>*/}
            {/*  </span>*/}
            {/*                Recent Impact*/}
            {/*            </h2>*/}
            {/*            <p className="text-on-surface-variant text-sm md:text-base mt-2 max-w-lg">*/}
            {/*                Latest contributions to large-scale engineering projects and digital products.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div*/}
            {/*        className="glass-card p-8 md:p-12 rounded-3xl border-l-[6px] border-secondary relative overflow-hidden group hover:bg-secondary/5 transition-all duration-500">*/}
            {/*        <div*/}
            {/*            className="absolute top-0 right-0 p-12 opacity-[0.03] text-secondary group-hover:opacity-[0.08] transition-opacity duration-500">*/}
            {/*            <BriefcaseIcon size={160}/>*/}
            {/*        </div>*/}

            {/*        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">*/}
            {/*            <div className="space-y-8 flex-1">*/}
            {/*                <div className="space-y-4">*/}
            {/*                    <div*/}
            {/*                        className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-mono text-[10px] tracking-widest uppercase">*/}
            {/*                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 animate-pulse"/>*/}
            {/*                        {latestJob.interval}*/}
            {/*                    </div>*/}
            {/*                    <h3 className="text-3xl md:text-5xl font-display font-black text-on-surface leading-tight">*/}
            {/*                        {latestJob.role} <br/>*/}
            {/*                        <span className="text-gradient">@ {latestJob.company}</span>*/}
            {/*                    </h3>*/}
            {/*                    <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-3xl font-sans italic border-l-2 border-outline-variant/30 pl-6">*/}
            {/*                        "{latestJob.description}"*/}
            {/*                    </p>*/}
            {/*                </div>*/}

            {/*                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">*/}
            {/*                    {latestJob.highlights.map((highlight, idx) => (*/}
            {/*                        <div key={idx} className="flex items-start gap-3 group/item">*/}
            {/*                            <div*/}
            {/*                                className="mt-1 p-1 rounded-full bg-secondary/20 text-secondary group-hover/item:bg-secondary group-hover/item:text-on-secondary transition-colors">*/}
            {/*                                <CircleCheckBigIcon size={12}/>*/}
            {/*                            </div>*/}
            {/*                            <span*/}
            {/*                                className="text-on-surface-variant text-sm md:text-base group-hover/item:text-on-surface transition-colors">*/}
            {/*                                {highlight}*/}
            {/*                            </span>*/}
            {/*                        </div>*/}
            {/*                    ))}*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="flex flex-col gap-6">*/}
            {/*                <div*/}
            {/*                    className="p-6 rounded-2xl bg-surface-container/30 border border-outline-variant/20 backdrop-blur-sm">*/}
            {/*                    <div*/}
            {/*                        className="text-[10px] font-mono text-on-surface-variant/60 uppercase tracking-[0.2em] mb-4">Location_Stack*/}
            {/*                    </div>*/}
            {/*                    <div className="space-y-3">*/}
            {/*                        <div className="flex items-center gap-3 text-on-surface">*/}
            {/*                            <div className="w-2 h-2 rounded-full bg-secondary"/>*/}
            {/*                            <span className="text-sm font-semibold">{latestJob.location}</span>*/}
            {/*                        </div>*/}
            {/*                        <div className="flex items-center gap-3 text-on-surface-variant">*/}
            {/*                            <div className="w-2 h-2 rounded-full bg-outline-variant"/>*/}
            {/*                            <span className="text-sm">Remote Integration</span>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <Link*/}
            {/*                    to={ActiveTab.Experience}*/}
            {/*                    className="group/btn px-8 py-4 rounded-xl bg-secondary/10 border border-secondary/30 text-secondary font-mono text-xs font-bold tracking-widest hover:bg-secondary hover:text-on-secondary transition-all flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(76,215,246,0.1)] hover:shadow-[0_0_25px_rgba(76,215,246,0.3)]"*/}
            {/*                >*/}
            {/*                    FULL_EXPERIENCE_LOG <ArrowRightIcon size={16}*/}
            {/*                                                        className="group-hover/btn:translate-x-1 transition-transform"/>*/}
            {/*                </Link>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

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
                            A robust foundation built on years of experience with modern frontend technologies.
                        </p>
                    </div>
                    <div
                        className="font-mono text-[11px] text-primary/90 bg-primary/10 px-4 py-2 rounded-lg border border-primary/30 backdrop-blur-sm self-start md:self-auto">
                        CURRENT_VERSION: 2026.Q2-STABLE
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
                            {['React', 'Angular', 'Next.js', 'TypeScript', 'Node.js', 'Flutter', 'Express'].map((tech) => (
                                <div
                                    key={tech}
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
                                Styling & Design
                            </h3>
                        </div>

                        <ul className="space-y-6 font-mono text-xs text-on-surface-variant">
                            {[
                                {name: 'HTML & CSS', desc: 'Semantic and performant layouts'},
                                {name: 'Tailwind CSS', desc: 'Atomic design systems'},
                                {name: 'Responsive Design', desc: 'Cross-device compatibility'},
                                {name: 'Accessibility', desc: 'Inclusive web standards'},
                            ].map((styleItem) => (
                                <li
                                    key={styleItem.name}
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
                                Toolchain & Testing
                            </h3>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-3">
                                {['GIT', 'GITHUB', 'VITE', 'NPM', 'JEST', 'STORYBOOK', 'JIRA', 'FIREBASE'].map((tool) => (
                                    <div
                                        key={tool}
                                        className="text-center py-3 rounded-lg bg-surface-container-lowest/80 border border-outline-variant/25 hover:border-primary/60 hover:text-white font-mono text-[10px] transition-colors cursor-pointer uppercase tracking-widest text-on-surface-variant"
                                    >
                                        {tool}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Cloud & Databases (Full Width) */}
                    <div
                        className="lg:col-span-12 glass-card p-8 md:p-10 rounded-2xl border-b-[6px] border-tertiary/40 relative overflow-hidden group">
                        <div className="flex flex-col md:flex-row md:items-center gap-12">
                            <div className="flex items-center gap-4 min-w-50">
                                <div className="p-3 rounded-xl bg-tertiary/15 text-tertiary glow-tertiary">
                                    <span className="material-symbols-outlined"><CloudIcon/></span>
                                </div>
                                <h3 className="font-sans text-on-surface text-lg md:text-xl font-bold">
                                    Cloud & Data
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                {['AWS', 'Google Cloud', 'Firebase', 'MySQL', 'MongoDB', 'DynamoDB'].map((tech) => (
                                    <div
                                        key={tech}
                                        className="px-5 py-3 rounded-xl bg-surface-container/40 border border-outline-variant/30 font-mono text-xs text-on-surface-variant flex items-center gap-3 hover:bg-tertiary/15 hover:text-white hover:border-tertiary/50 transition-all duration-300 cursor-pointer"
                                    >
                                        <span className="w-1.5 h-1.5 bg-tertiary rounded-full glow-tertiary"/>
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 5: AI Intelligence (Full Width) */}
                    <div
                        className="lg:col-span-12 glass-card p-8 md:p-10 rounded-2xl border-l-[6px] border-secondary relative overflow-hidden group bg-linear-to-r from-transparent to-secondary/5">
                        <div className="flex flex-col md:flex-row md:items-center gap-12">
                            <div className="flex items-center gap-4 min-w-50">
                                <div className="p-3 rounded-xl bg-secondary/15 text-secondary glow-accent">
                                    <span className="material-symbols-outlined"><SparklesIcon/></span>
                                </div>
                                <h3 className="font-sans text-on-surface text-lg md:text-xl font-bold">
                                    AI Intelligence
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-4 flex-1">
                                {[
                                    {name: 'Cursor', desc: 'AI-Native IDE'},
                                    {name: 'Gemini', desc: 'Multimodal reasoning'},
                                    {name: 'Codex', desc: 'Logic verification'},
                                    {name: 'Copilot', desc: 'Predictive coding'},
                                    {name: 'ChatGPT', desc: 'Strategy & Analysis'}
                                ].map((aiTool) => (
                                    <div
                                        key={aiTool.name}
                                        className="px-5 py-3 rounded-xl bg-surface-container/40 border border-outline-variant/30 font-mono text-xs text-on-surface flex flex-col items-start gap-1 hover:bg-secondary/15 hover:border-secondary/50 transition-all duration-300 cursor-pointer min-w-35"
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-secondary rounded-full glow-accent"/>
                                            <span className="font-bold">{aiTool.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div
                                className="hidden xl:flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                                <span className="relative flex h-2 w-2">
                                    <span
                                        className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                                </span>
                                <span
                                    className="font-mono text-[9px] text-secondary tracking-widest">CO_ENGINEERING_ACTIVE</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HomePage;
