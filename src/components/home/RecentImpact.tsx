import {ArrowRightIcon, BriefcaseIcon, CircleCheckBigIcon} from "lucide-react";
import {ActiveTab} from "@models/types.ts";
import {Link} from "react-router";
import {getDevemgExperience} from "@data/experience.data.ts";
import {useMemo} from "react";

const RecentImpact = () => {
    const latestJob = useMemo(()=>getDevemgExperience()[0], []);
    if (!latestJob) return null;

    return (
            <div className="space-y-12">
                <div
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant/30 pb-8 relative">
                    <div className="absolute -left-10 bottom-0 w-20 h-0.5 bg-secondary shadow-[0_0_10px_#4cd7f6]"/>
                    <div>
                        <h2 className="font-sans text-2xl md:text-3xl font-extrabold flex items-center gap-4 text-on-surface">
              <span className="material-symbols-outlined text-secondary glow-accent">
                <BriefcaseIcon/>
              </span>
                            Recent Impact
                        </h2>
                        <p className="text-on-surface-variant text-sm md:text-base mt-2 max-w-lg">
                            Latest contributions to large-scale engineering projects and digital products.
                        </p>
                    </div>
                </div>

                <div
                    className="glass-card p-8 md:p-12 rounded-3xl border-l-[6px] border-secondary relative overflow-hidden group hover:bg-secondary/5 transition-all duration-500">
                    <div
                        className="absolute top-0 right-0 p-12 opacity-[0.03] text-secondary group-hover:opacity-[0.08] transition-opacity duration-500">
                        <BriefcaseIcon size={160}/>
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
                        <div className="space-y-8 flex-1">
                            <div className="space-y-4">
                                <div
                                    className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-mono text-[10px] tracking-widest uppercase">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 animate-pulse"/>
                                    {latestJob.interval}
                                </div>
                                <h3 className="text-3xl md:text-5xl font-display font-black text-on-surface leading-tight">
                                    {latestJob.role} <br/>
                                    <span className="text-gradient">@ {latestJob.company}</span>
                                </h3>
                                <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-3xl font-sans italic border-l-2 border-outline-variant/30 pl-6">
                                    "{latestJob.description}"
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {latestJob.highlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-start gap-3 group/item">
                                        <div
                                            className="mt-1 p-1 rounded-full bg-secondary/20 text-secondary group-hover/item:bg-secondary group-hover/item:text-on-secondary transition-colors">
                                            <CircleCheckBigIcon size={12}/>
                                        </div>
                                        <span
                                            className="text-on-surface-variant text-sm md:text-base group-hover/item:text-on-surface transition-colors">
                                            {highlight}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div
                                className="p-6 rounded-2xl bg-surface-container/30 border border-outline-variant/20 backdrop-blur-sm">
                                <div
                                    className="text-[10px] font-mono text-on-surface-variant/60 uppercase tracking-[0.2em] mb-4">Location_Stack
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-on-surface">
                                        <div className="w-2 h-2 rounded-full bg-secondary"/>
                                        <span className="text-sm font-semibold">{latestJob.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-on-surface-variant">
                                        <div className="w-2 h-2 rounded-full bg-outline-variant"/>
                                        <span className="text-sm">Remote Integration</span>
                                    </div>
                                </div>
                            </div>

                            <Link
                                to={ActiveTab.Experience}
                                className="group/btn px-8 py-4 rounded-xl bg-secondary/10 border border-secondary/30 text-secondary font-mono text-xs font-bold tracking-widest hover:bg-secondary hover:text-on-secondary transition-all flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(76,215,246,0.1)] hover:shadow-[0_0_25px_rgba(76,215,246,0.3)]"
                            >
                                FULL_EXPERIENCE_LOG <ArrowRightIcon size={16}
                                                                    className="group-hover/btn:translate-x-1 transition-transform"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export {RecentImpact};