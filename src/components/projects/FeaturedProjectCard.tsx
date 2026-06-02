import {Link} from 'react-router';
import {ExternalLinkIcon, EyeIcon, PlayIcon} from 'lucide-react';
import {useTranslation} from 'react-i18next';
import {ActiveTab} from '@models/types';
import {ProjectItem} from '@models/project-item';

interface FeaturedProjectCardProps {
    project: ProjectItem;
    summary: string;
}

const FeaturedProjectCard = ({project, summary}: FeaturedProjectCardProps) => {
    const {t} = useTranslation();

    return (
        <div
            className="xl:col-span-8 rounded-xl border border-slate-700 bg-slate-900/70 backdrop-blur-xl overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
                <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-400">
                        {t('projects.cards.featured')}
                    </p>
                </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-2">
                <div
                    className="relative min-h-80 overflow-hidden border-b border-slate-800 lg:border-b-0 lg:border-r"
                    style={{
                        background: project.background ?? `linear-gradient(135deg, ${project.color} 0%, #0f172a 90%)`,
                    }}
                >
                    <div
                        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_36%),linear-gradient(to_b,rgba(2,6,23,0.08),rgba(2,6,23,0.72))]"/>
                    <div className="absolute inset-x-0 top-0 h-px bg-white/20"/>
                    <div className="relative flex h-full flex-col justify-between p-5">
                        <div className="flex items-start justify-between gap-4">
                            <div
                                className="rounded-lg border border-white/15 bg-slate-950/45 px-3 py-2 backdrop-blur-md">
                                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-200/90">
                                    {project.id}
                                </p>
                            </div>
                            {project.logoSM && (
                                <div
                                    className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/15 bg-slate-950/45 p-2 backdrop-blur-md">
                                    <img
                                        src={project.logoSM}
                                        alt={`${project.name} logo`}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                                {project.tags?.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-3xl font-bold text-white">{project.name}</h3>
                                <p className="max-w-xl text-sm leading-6 text-slate-200/90">
                                    {summary}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between p-5">
                    <div className="space-y-4">
                        <div className="grid gap-3">
                            <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">
                                    {t('projects.cards.stack')}
                                </p>
                                <p className="mt-2 text-sm text-slate-200">
                                    {project.tags?.join(' / ')}
                                </p>
                            </div>
                        </div>

                        <p className="text-sm leading-6 text-slate-300">
                            {t('projects.cards.featuredDescription')}
                        </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                            to={`${ActiveTab.Projects}/${project.id}`}
                            className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-950/80 px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.22em] text-slate-100 transition-colors hover:border-cyan-400/60 hover:text-cyan-200"
                        >
                            <EyeIcon size={16}/>
                            {t('projects.cards.inspect')}
                        </Link>
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.22em] text-slate-950 transition-all hover:brightness-110"
                            >
                                <PlayIcon size={16}/>
                                {t('projects.cards.demo')}
                            </a>
                        )}
                        {project.codeUrl && (
                            <a
                                href={project.codeUrl}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-flex items-center gap-2 rounded-md border border-violet-400/60 px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.22em] text-violet-200 transition-colors hover:bg-violet-500/10"
                            >
                                <ExternalLinkIcon size={16}/>
                                {t('projects.cards.source')}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export {FeaturedProjectCard};
