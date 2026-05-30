import {useEffect, useMemo, useState} from 'react';
import {Link, useParams} from 'react-router';
import {
    ArrowRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    Layers3Icon,
    PlayIcon,
    SquareTerminalIcon,
} from 'lucide-react';
import {ActiveTab} from '@models/types';
import {ProjectItem} from '@models/project-item';
import {devemgProjects} from '../data/projects.data';

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
    const {key} = useParams();
    const resolvedProject = useMemo(
        () => devemgProjects.find((item) => item.id === key),
        [key],
    );
    const project = resolvedProject ?? devemgProjects[0];
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const detailText = getDetailText(project);
    const projectTags = inferProjectTags(project);
    const projectImages = project.images ?? [];
    const activeImage = projectImages[selectedImageIndex] ?? projectImages[0];

    const metrics = [
        {
            label: 'Coverage',
            value: Math.min(100, 70 + projectTags.length * 4 + (projectImages.length > 0 ? 10 : 0)),
            desc: 'Scope and feature breadth',
            color: '#4cd7f6',
        },
        {
            label: 'Polish',
            value: project.demoUrl ? 99 : 92,
            desc: 'Production readiness and finish',
            color: '#d0bcff',
        },
        {
            label: 'Assets',
            value: Math.min(100, projectImages.length * 12 + 40),
            desc: 'Screenshot and media depth',
            color: '#ffafd3',
        },
        {
            label: 'Delivery',
            value: project.codeUrl && project.demoUrl ? 100 : 94,
            desc: 'Availability of source and demo',
            color: '#4cd7f6',
        },
    ];

    useEffect(() => {
        setSelectedImageIndex(0);
    }, [project.id]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setSelectedImageIndex(0);
            }

            if (projectImages.length <= 1) {
                return;
            }

            if (event.key === 'ArrowLeft') {
                setSelectedImageIndex((current) =>
                    current === 0 ? projectImages.length - 1 : current - 1,
                );
            }

            if (event.key === 'ArrowRight') {
                setSelectedImageIndex((current) =>
                    current === projectImages.length - 1 ? 0 : current + 1,
                );
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [projectImages.length]);

    if (!key || !resolvedProject) {
        return (
            <section className="space-y-8">
                <div className="rounded-xl border border-slate-700 bg-slate-950/80 p-8 backdrop-blur-xl">
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-300">
                        project not found
                    </p>
                    <h1 className="mt-3 text-3xl font-bold text-slate-100">The requested project does not exist.</h1>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                        The detail route needs a valid project id. Return to the projects index to open a supported
                        project.
                    </p>
                    <Link
                        to={ActiveTab.Projects}
                        className="mt-6 inline-flex items-center gap-2 rounded-md bg-linear-to-r from-violet-500 to-cyan-400 px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.22em] text-white"
                    >
                        Back to projects
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
                        <Link to={ActiveTab.Projects}
                              className={"hover:underline"}
                        > Projects </Link> //
                        project details: {project.id}
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
                        <div className="flex flex-wrap gap-2">
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
                                    Open demo
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
                                    View source
                                    <SquareTerminalIcon size={16}/>
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4">
                    <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-5 backdrop-blur-xl">
                        <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
                            <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400">
                                    system overview
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
                </div>
            </header>

            <section className="grid gap-6 xl:grid-cols-12">
                <div
                    className="xl:col-span-7 rounded-xl border border-slate-700 bg-slate-900/70 backdrop-blur-xl overflow-hidden">
                    <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
                        <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-400">
                                architecture
                            </p>
                        </div>
                        <span
                            className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-violet-200">
                            case study
                        </span>
                    </div>

                    <div className="space-y-5 p-5">
                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-5">
                                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-300">
                                    01. Scope
                                </p>
                                <p className="mt-3 text-sm leading-6 text-slate-300">
                                    {detailText.body[0] ?? detailText.lead}
                                </p>
                            </div>
                            <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-5">
                                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet-300">
                                    02. Execution
                                </p>
                                <p className="mt-3 text-sm leading-6 text-slate-300">
                                    {detailText.body[1] ??
                                        'The page and data model are presented as a structured product with supporting media, links, and technical metadata.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-5 rounded-xl border border-slate-700 bg-slate-950/70 p-5 backdrop-blur-xl">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                        <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-400">
                                gallery
                            </p>
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">
                            {projectImages.length.toString().padStart(2, '0')} frames
                        </span>
                    </div>

                    <div className="mt-5 space-y-4">
                        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60">
                            {activeImage ? (
                                <img
                                    src={activeImage.src}
                                    alt={activeImage.alt ?? project.name}
                                    className="h-auto w-full object-cover"
                                    referrerPolicy="no-referrer"
                                />
                            ) : (
                                <div
                                    className="flex min-h-70 items-center justify-center bg-slate-900 text-slate-400">
                                    No screenshots available
                                </div>
                            )}
                        </div>

                        {projectImages.length > 1 && (
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setSelectedImageIndex((current) =>
                                            current === 0 ? projectImages.length - 1 : current - 1,
                                        )
                                    }
                                    className="rounded-md border border-slate-700 bg-slate-900/80 p-2 text-slate-300 transition-colors hover:border-cyan-400/60 hover:text-cyan-200"
                                    aria-label="Previous screenshot"
                                >
                                    <ChevronLeftIcon size={16}/>
                                </button>
                                <div
                                    className="flex flex-1 gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-400 pb-1">
                                    {projectImages.map((image, index) => {
                                        const active = index === selectedImageIndex;

                                        return (
                                            <button
                                                key={image.id}
                                                type="button"
                                                onClick={() => setSelectedImageIndex(index)}
                                                className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-md border transition-all ${
                                                    active
                                                        ? 'border-cyan-400 ring-1 ring-cyan-400/40'
                                                        : 'border-slate-800 opacity-70 hover:opacity-100'
                                                }`}
                                            >
                                                <img
                                                    src={image.src}
                                                    alt={image.alt ?? `${project.name} screenshot ${index + 1}`}
                                                    className="h-full w-full object-cover"
                                                    referrerPolicy="no-referrer"
                                                />
                                            </button>
                                        );
                                    })}
                                </div>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setSelectedImageIndex((current) =>
                                            current === projectImages.length - 1 ? 0 : current + 1,
                                        )
                                    }
                                    className="rounded-md border border-slate-700 bg-slate-900/80 p-2 text-slate-300 transition-colors hover:border-cyan-400/60 hover:text-cyan-200"
                                    aria-label="Next screenshot"
                                >
                                    <ChevronRightIcon size={16}/>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ProjectDetailsPage;
