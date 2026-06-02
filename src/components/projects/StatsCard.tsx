import {Layers3Icon} from 'lucide-react';
import {ProjectItem} from "@models/project-item.ts";
import {useMemo} from "react";
import {useTranslation} from "react-i18next";

interface StatsCardProps {
    projects: ProjectItem[];
}

const StatsCard = ({ projects = [] }: StatsCardProps) => {
    const {t} = useTranslation();

    const stats = useMemo(()=>[
        {label: t('projects.stats.projects.label'), value: projects.length.toString().padStart(2, '0'), hint: t('projects.stats.projects.hint')},
        {
            label: t('projects.stats.demos.label'),
            value: projects.filter((project) => Boolean(project.demoUrl)).length.toString().padStart(2, '0'),
            hint: t('projects.stats.demos.hint')
        },
        {
            label: t('projects.stats.repositories.label'),
            value: projects.filter((project) => Boolean(project.codeUrl)).length.toString().padStart(2, '0'),
            hint: t('projects.stats.repositories.hint')
        },
        {
            label: t('projects.stats.stacks.label'),
            value: new Set(projects.flatMap((project) => project.tags)).size.toString().padStart(2, '0'),
            hint: t('projects.stats.stacks.hint')
        },
    ], [projects, t]);


    return (
        <aside className="xl:col-span-4 rounded-xl border border-slate-700 bg-slate-950/70 p-5 backdrop-blur-xl h-fit self-start">
            <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400">
                        {t('projects.stats.title')}
                    </p>
                </div>
                <Layers3Icon className="text-cyan-300" size={20}/>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="rounded-lg border border-slate-800 bg-slate-900/70 p-4"
                    >
                        <div className="font-display text-3xl font-bold text-slate-100">{stat.value}</div>
                        <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-300">
                            {stat.label}
                        </div>
                        <p className="mt-1 text-xs text-slate-400">{stat.hint}</p>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export {StatsCard};
