import {Layers3Icon} from 'lucide-react';
import {ProjectItem} from "@models/project-item.ts";
import {useMemo} from "react";

interface StatsCardProps {
    projects: ProjectItem[];
}

const projectTags: Record<string, string[]> = {
    'random-qa': ['Angular', 'Ionic', 'Mobile', 'Realtime'],
    'fast-messages': ['MEAN', 'Realtime', 'Angular', 'Mobile'],
    'wheather-tv': ['React', 'TV', 'Tizen'],
    'ecom-app': ['React', 'Commerce', 'Redux'],
    'playely-web': ['Angular', 'OTT', 'Streaming'],
    'playely-tv': ['React', 'TV', 'Streaming'],
    'swiftmap-app': ['React', 'Maps', 'Leaflet'],
    'brisland-ui-app': ['React', 'Motion', 'Animation'],
    'invittalo-admin-app': ['Angular', 'Admin', 'Events'],
    'invittalo-xv-app': ['Angular', 'Client', 'Events'],
    'tic-tac-toe-tv': ['React', 'TV', 'Game'],
};


const getProjectTags = (project: ProjectItem) => projectTags[project.id] ?? ['System'];

const StatsCard = ({ projects = [] }: StatsCardProps) => {

    const stats = useMemo(()=>[
        {label: 'Projects', value: projects.length.toString().padStart(2, '0'), hint: 'portfolio entries'},
        {
            label: 'Demos',
            value: projects.filter((project) => Boolean(project.demoUrl)).length.toString().padStart(2, '0'),
            hint: 'live deployments'
        },
        {
            label: 'Repositories',
            value: projects.filter((project) => Boolean(project.codeUrl)).length.toString().padStart(2, '0'),
            hint: 'source archives'
        },
        {
            label: 'Stacks',
            value: new Set(projects.flatMap((project) => getProjectTags(project))).size.toString().padStart(2, '0'),
            hint: 'unique tags'
        },
    ], [projects]);


    return (
        <aside className="xl:col-span-4 rounded-xl border border-slate-700 bg-slate-950/70 p-5 backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400">
                        system overview
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
