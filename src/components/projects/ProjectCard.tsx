import {Link} from 'react-router';
import {EyeIcon, PlayIcon} from 'lucide-react';
import {useTranslation} from 'react-i18next';
import {ProjectItem} from '@models/project-item';
import {ActiveTab} from '@models/types';

interface ProjectCardProps {
    project: ProjectItem;
    tags: string[];
    summary: string;
}

const ProjectCard = ({project, tags, summary}: ProjectCardProps) => {
    const {t} = useTranslation();

    return (
        <article
            className="group overflow-hidden rounded-xl border border-slate-700 bg-slate-950/70 backdrop-blur-xl transition-transform hover:-translate-y-1"
        >
            <div
                className="relative flex min-h-45 flex-col justify-between overflow-hidden border-b border-slate-800 p-4"
                style={{
                    background: project.background ?? `linear-gradient(135deg, ${project.color} 0%, #0f172a 88%)`,
                }}
            >
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.06),rgba(2,6,23,0.72))]"/>
                <div className="relative flex items-start justify-between gap-3">
                    <div
                        className="rounded-full border border-white/15 bg-slate-950/45 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-100/90 backdrop-blur-md">
                        {project.id}
                    </div>
                    {project.logoSM ? (
                        <div
                            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-slate-950/45 p-2 backdrop-blur-md">
                            <img src={project.logoSM} alt="" className="h-full w-full object-contain"/>
                        </div>
                    ) : null}
                </div>

                <div className="relative space-y-3">
                    <div className="flex flex-wrap gap-2">
                        {tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                </div>
            </div>

            <div className="space-y-4 p-4">
                <p
                    className="text-sm leading-6 text-slate-300"
                    style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 4,
                        overflow: 'hidden',
                    }}
                >
                    {summary}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.demoUrl && (
                        <span
                            className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-200">
                            {t('projects.cards.demoBadge')}
                        </span>
                    )}
                    {project.codeUrl && (
                        <span
                            className="rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-violet-200">
                            {t('projects.cards.repoBadge')}
                        </span>
                    )}
                    {project.images?.length ? (
                        <span
                            className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-300">
                            {project.images.length.toString().padStart(2, '0')} {t('projects.cards.shots')}
                        </span>
                    ) : null}
                </div>

                <div className="flex flex-wrap gap-2 border-t border-slate-800 pt-4">
                    <Link
                    to={`${ActiveTab.Projects}/${project.id}`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-900/80 px-3 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-slate-100 transition-colors hover:border-cyan-400/50 hover:text-cyan-200"
                >
                    <EyeIcon size={15}/>
                    {t('projects.cards.details')}
                </Link>
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-cyan-400 px-3 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-slate-950 transition-all hover:brightness-110"
                        >
                            <PlayIcon size={15}/>
                            {t('projects.cards.demo')}
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export {ProjectCard};
