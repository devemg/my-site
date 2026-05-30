import {Layers3Icon} from "lucide-react";
import {useMemo} from "react";
import {useTranslation} from "react-i18next";
import {ProjectImage, ProjectItem} from "@models/project-item.ts";

interface StatsDetailsProps {
    project?: ProjectItem;
    projectTags?: string[];
    projectImages?: ProjectImage[];

}

const StatsDetails = ({project, projectTags = [], projectImages = []}: StatsDetailsProps) => {
    const {t} = useTranslation();


    const metrics = useMemo(() => project ? [
        {
            label: t('projectDetails.stats.coverage.label'),
            value: Math.min(100, 70 + projectTags.length * 4 + (projectImages.length > 0 ? 5 : 0)),
            desc: t('projectDetails.stats.coverage.description'),
            color: '#4cd7f6',
        },
        {
            label: t('projectDetails.stats.polish.label'),
            value: project.demoUrl ? 99 : 72,
            desc: t('projectDetails.stats.polish.description'),
            color: '#d0bcff',
        },
        {
            label: t('projectDetails.stats.assets.label'),
            value: Math.min(100, projectImages.length * 2 + 10),
            desc: t('projectDetails.stats.assets.description'),
            color: '#ffafd3',
        },
        {
            label: t('projectDetails.stats.delivery.label'),
            value: project.codeUrl && project.demoUrl ? 100 : 64,
            desc: t('projectDetails.stats.delivery.description'),
            color: '#4cd7f6',
        },
    ] : [], [project, projectTags, projectImages, t]);

    if (!project) {
        return null;
    }

    return (
        <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-5 backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400">
                        {t('projectDetails.stats.title')}
                    </p>
                </div>
                <Layers3Icon className="text-cyan-300" size={20}/>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {metrics.map((metric) => (
                    <button
                        key={metric.label}
                        type="button"
                        className="rounded-lg border border-slate-800 bg-slate-900/70 p-4 text-left transition-colors hover:border-cyan-400/40"
                    >
                        <div className="font-display text-3xl font-bold text-slate-100">{metric.value}</div>
                        <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em]"
                             style={{color: metric.color}}>
                            {metric.label}
                        </div>
                        <p className="mt-1 text-xs text-slate-400">{metric.desc}</p>
                    </button>
                ))}
            </div>

        </div>

    );
};

export {StatsDetails};
