import {ExperienceItem} from "@models/experience-item.ts";
import {BadgeCheckIcon, MapPinIcon, SquareLibraryIcon} from "lucide-react";
import {useTranslation} from "react-i18next";

interface JobCardProps {
    item?: ExperienceItem;
}
const JobCard = ({ item }: JobCardProps) => {
    const {t} = useTranslation();
    if (!item) {
        return null
    }
    return (
        <article
            key={item.id}
            className={`group rounded-3xl border p-6 md:p-8 transition-all duration-300 ${
                item.isCurrent
                    ? "border-secondary/30 bg-surface-container/80 shadow-[0_0_0_1px_rgba(76,215,246,0.08)]"
                    : "border-white/10 bg-[#10182b]/70 hover:border-primary/20"
            }`}
        >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                    <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-secondary/80">
                        {item.interval}
                    </p>
                    <h3 className="text-2xl font-bold text-white md:text-3xl">
                        {item.role}
                    </h3>
                    {item.secondaryRoles && (
                        <div className="flex flex-wrap gap-2 mt-1 mb-3">
                            {item.secondaryRoles.map((role) => (
                                <span
                                    key={role}
                                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-primary/90"
                                >
                          {role}
                        </span>
                            ))}
                        </div>
                    )}
                    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-on-surface-variant">
                        <span>{item.company}</span>
                        <span className="hidden h-1 w-1 rounded-full bg-on-surface-variant/40 md:inline-block" />
                        <span className="flex items-center gap-2">
                      <MapPinIcon size={14} />
                            {item.location}
                    </span>
                    </p>
                </div>

                {item.isCurrent && (
                    <div className="inline-flex items-center gap-2 self-start rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                        <BadgeCheckIcon size={14} />
                        {t("experiencePage.timeline.currentBadge")}
                    </div>
                )}
            </div>

            <p className="mt-6 max-w-4xl text-sm leading-relaxed text-on-surface/85 md:text-base">
                {item.description}
            </p>

            <ul className="mt-6 grid gap-3 md:grid-cols-3">
                {item.highlights.map((highlight) => (
                    <li
                        key={highlight}
                        className="flex items-start gap-3 rounded-2xl border border-white/5 bg-surface-container-lowest/70 p-4 text-sm leading-relaxed text-on-surface-variant"
                    >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <SquareLibraryIcon size={14} />
                    </span>
                        <span>{highlight}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
};

export {JobCard};