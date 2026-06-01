import {SkillItem, SkillSection} from "@models/skill-section.ts";
import {ReactNode} from "react";
import {ClassNameValue, twMerge} from "tailwind-merge";

interface SkillsCardsProps {
    skillItem: SkillSection | null;
    icon?: ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary';
    className?: ClassNameValue;
    itemClassName?: ClassNameValue;
    customDotElement?: ReactNode | null;
    direction?: "horizontal" | "vertical";
    verticalColumns?: number;
}

const SkillsCards = ({
                         skillItem,
                         icon,
                         variant = 'primary',
                         direction = 'horizontal',
                         className,
                         itemClassName,
                         customDotElement,
                         verticalColumns = 2,
                     }: SkillsCardsProps) => {
    if (!skillItem) return null;

    return (
        <div
            className={twMerge("lg:col-span-12 glass-card p-8 md:p-10 rounded-2xl border-l-[6px] relative overflow-hidden group bg-linear-to-r from-transparent",
                variant === "primary" && "border-primary to-primary/5",
                variant === "secondary" && "border-secondary to-secondary/5",
                variant === "tertiary" && "border-tertiary to-tertiary/5",
                className)}>
            <div className={twMerge("gap-12",
                direction === 'vertical' && "flex flex-col",
                direction === "horizontal" && "flex flex-row items-center",
            )}>
                <div className="flex items-center gap-4 min-w-50">
                    <div className={twMerge("p-3 rounded-xl glow-accent",
                        variant === "primary" && "bg-primary/15 text-primary",
                        variant == "secondary" && "bg-secondary/15 text-secondary",
                        variant === "tertiary" && "bg-tertiary/15 text-tertiary",)}>
                        <span className="material-symbols-outlined">{icon}</span>
                    </div>
                    <h3 className="font-sans text-on-surface text-lg md:text-xl font-bold">
                        {skillItem.title}
                    </h3>
                </div>

                <div className={twMerge(direction === "horizontal" && "flex flex-wrap gap-4 flex-1",
                    direction === 'vertical' && "grid gap-3", "grid-cols-" + verticalColumns)}>
                    {skillItem.tools?.map((aiTool: SkillItem | string) => (
                        <div
                            key={typeof aiTool === 'string' ? aiTool : aiTool.name}
                            className={twMerge("px-5 py-3 rounded-xl bg-surface-container/40 border border-outline-variant/30 font-mono text-xs text-on-surface flex flex-col items-start gap-1 transition-all duration-300 cursor-pointer min-w-35",
                                // variant === "primary" && "hover:bg-primary/15 hover:border-primary/50",
                                // variant === "secondary" && "hover:bg-secondary/15 hover:border-secondary/50",
                                // variant === "tertiary" && "hover:bg-tertiary/15 hover:border-tertiary/50",
                                itemClassName)}
                        >
                            <div className="flex items-center gap-2">
                                {customDotElement === undefined ? (
                                        <span className={twMerge("w-1.5 h-1.5 rounded-full glow-accent",
                                            variant === "primary" && "bg-primary",
                                            variant === "secondary" && "bg-secondary",
                                            variant == "tertiary" && "bg-tertiary",
                                        )}/>) :
                                    <span
                                        className={"material-symbols-outlined text-xl glow-accent transition-transform"}>
                                        {customDotElement}
                                    </span>
                                }
                                <div>
                                    <span
                                        className="block font-bold">{typeof aiTool === 'string' ? aiTool : aiTool.name}</span>
                                    {typeof aiTool !== 'string' ? (<span
                                        className="text-[10px] text-on-surface-variant/60 block mt-0.5">{aiTool.desc}</span>) : null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {skillItem.tag && (<div
                    className={twMerge("hidden xl:flex items-center gap-3 px-4 py-2 rounded-full",
                        variant === "primary" && "bg-primary/10 border border-primary/20",
                        variant === "secondary" && "bg-secondary/10 border border-secondary/20",
                        variant === "tertiary" && "bg-tertiary/10 border border-tertiary/20")}>
                                <span className="relative flex h-2 w-2">
                                    <span
                                        className={twMerge("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                                            variant === "primary" && "bg-primary",
                                            variant === "secondary" && "bg-secondary",
                                            variant == "tertiary" && "bg-tertiary")}></span>
                                    <span className={twMerge("relative inline-flex rounded-full h-2 w-2",
                                        variant === "primary" && "bg-primary",
                                        variant === "secondary" && "bg-secondary",
                                        variant == "tertiary" && "bg-tertiary")}></span>
                                </span>
                    <span
                        className={twMerge("font-mono text-[9px] tracking-widest",
                            variant === "primary" && "text-primary",
                            variant === "secondary" && "text-secondary",
                            variant == "tertiary" && "text-tertiary")}>{skillItem.tag}</span>
                </div>)}
            </div>
        </div>
    );
};

export {SkillsCards};