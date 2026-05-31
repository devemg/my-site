import {useMemo} from 'react';
import {Link, useParams} from 'react-router';
import {ArrowRightIcon, PlayIcon, SquareTerminalIcon} from 'lucide-react';
import {useTranslation} from 'react-i18next';
import {ActiveTab} from '@models/types';
import {ProjectItem} from '@models/project-item';
import {getDevemgProjects} from '../data/projects.data';
import {StatsDetails} from "@components/project-details/StatsDetails.tsx";
import {Gallery} from "@components/project-details/Gallery.tsx";

const splitDescription = (description: string) =>
    description
        .split('\n')
        .map((part) => part.trim())
        .filter(Boolean);

const inferProjectTags = (project: ProjectItem) => {
    const haystack = `${project.id} ${project.name} ${project.description}`.toLowerCase();

    const tagRules = [
        ['React', ['react']],
        ['Angular', ['angular']],
        ['Ionic', ['ionic']],
        ['TV', ['tv', 'tizen']],
        ['Mobile', ['mobile']],
        ['Commerce', ['commerce', 'shop', 'cart', 'checkout']],
        ['Realtime', ['real-time', 'real time', 'socket', 'live']],
        ['Animation', ['animation', 'animated', 'motion', 'gsap']],
        ['Admin', ['admin', 'dashboard', 'manage']],
        ['Streaming', ['ott', 'stream', 'player']],
    ] as const;

    const tags = tagRules
        .filter(([, matches]) => matches.some((match) => haystack.includes(match)))
        .map(([tag]) => tag);

    return tags.length > 0 ? tags : ['System'];
};

const getDetailText = (project: ProjectItem) => {
    const paragraphs = splitDescription(project.description);

    return {
        lead: paragraphs[0] ?? project.description,
        body: paragraphs.slice(1),
    };
};

const ProjectDetailsPage = () => {
    const {t, i18n} = useTranslation();
    const {key} = useParams();
    const projects = useMemo(() => getDevemgProjects(), [i18n.resolvedLanguage]);
    const resolvedProject = useMemo(
        () => projects.find((item) => item.id === key),
        [key, projects],
    );
    const project = resolvedProject ?? projects[0];
    const detailText = getDetailText(project);
    const projectTags = inferProjectTags(project);

    if (!key || !resolvedProject) {
        return (
            <section className="space-y-8">
                <div className="rounded-xl border border-slate-700 bg-slate-950/80 p-8 backdrop-blur-xl">
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-300">
                        {t('projectDetails.notFound.label')}
                    </p>
                    <h1 className="mt-3 text-3xl font-bold text-slate-100">
                        {t('projectDetails.notFound.title')}
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                        {t('projectDetails.notFound.description')}
                    </p>
                    <Link
                        to={ActiveTab.Projects}
                        className="mt-6 inline-flex items-center gap-2 rounded-md bg-linear-to-r from-violet-500 to-cyan-400 px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.22em] text-white"
                    >
                        {t('projectDetails.notFound.button')}
                        <ArrowRightIcon size={16}/>
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="relative isolate space-y-10 text-slate-200">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-violet-500/20 blur-[140px]"/>
                <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]"/>
                <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[150px]"/>
            </div>

            <header className="grid gap-6 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-8 flex flex-col gap-3">
                    <div
                        className="inline-flex w-fit items-center gap-3 rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-300 backdrop-blur-xl">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.75)]"/>
                        <Link to={ActiveTab.Projects} className="hover:underline">
                            {t('projectDetails.breadcrumb.projects')}
                        </Link>
                        //
                        {t('projectDetails.breadcrumb.details')}: {project.id}
                    </div>

                    <div className="space-y-5 pt-5">
                        <div className="space-y-4">
                            <h1 className="max-w-4xl font-display text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight text-slate-100">
                                {project.name}
                            </h1>
                            <p className="max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
                                {detailText.lead}
                            </p>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {projectTags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-200"
                                >
                                        {tag}
                                    </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex items-center gap-3 rounded-md bg-linear-to-r from-violet-500 to-cyan-400 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-white transition-all hover:brightness-110 hover:shadow-[0_0_18px_rgba(34,211,238,0.25)] active:scale-[0.98]"
                                >
                                    {t('projectDetails.actions.openDemo')}
                                    <PlayIcon size={16}/>
                                </a>
                            )}
                            {project.codeUrl && (
                                <a
                                    href={project.codeUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex items-center gap-3 rounded-md border border-cyan-400/60 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan-300 transition-colors hover:bg-cyan-400/10"
                                >
                                    {t('projectDetails.actions.viewSource')}
                                    <SquareTerminalIcon size={16}/>
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4">
                    <StatsDetails project={project} projectImages={project.images ?? []} projectTags={projectTags}/>
                </div>
            </header>

            <section className="grid gap-6 xl:grid-cols-12">
                <div
                    className="xl:col-span-7 rounded-xl border border-slate-700 bg-slate-900/70 backdrop-blur-xl overflow-hidden">
                    <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
                        <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-400">
                                {t('projectDetails.architecture.title')}
                            </p>
                        </div>
                        <span
                            className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-violet-200">
                            {t('projectDetails.architecture.badge')}
                        </span>
                    </div>

                    <div className="space-y-5 p-5">
                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-5">
                                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-300">
                                    {t('projectDetails.architecture.scopeTitle')}
                                </p>
                                <p className="mt-3 text-sm leading-6 text-slate-300">
                                    {detailText.body[0] ?? detailText.lead}
                                </p>
                            </div>
                            <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-5">
                                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet-300">
                                    {t('projectDetails.architecture.executionTitle')}
                                </p>
                                <p className="mt-3 text-sm leading-6 text-slate-300">
                                    {detailText.body[1] ?? t('projectDetails.architecture.executionFallback')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Gallery project={project}/>
            </section>
        </section>
    );
};

export default ProjectDetailsPage;
