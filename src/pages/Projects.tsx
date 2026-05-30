import {Link} from 'react-router';
import {
    ArrowRightIcon, Code2Icon,
} from 'lucide-react';
import {getDevemgProjects, getProjectSection} from '../data/projects.data';
import {ActiveTab} from '@models/types';
import {ProjectCard} from '@components/projects/ProjectCard';
import {FeaturedProjectCard} from '@components/projects/FeaturedProjectCard';
import {StatsCard} from '@components/projects/StatsCard';
import {ProjectItem} from "@models/project-item.ts";

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


const projects = getDevemgProjects();
const section = getProjectSection();


const getSummaryLine = (description: string) => description.split('\n').find(Boolean) ?? description;

const ProjectsPage = () => {
    const featuredProject = projects.find((project) => project.id === 'ecom-app') ?? projects[0];
    const gridProjects = projects.filter((project) => project.id !== featuredProject.id);

    return (
        <section className="relative isolate space-y-12 text-slate-200">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-violet-500/20 blur-[140px]"/>
                <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]"/>
                <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[150px]"/>
                <div
                    className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/60 to-transparent"/>
            </div>

            <header className="grid gap-6 lg:grid-cols-12 lg:items-end">
                <div className="xl:col-span-12 space-y-5">
                    <div
                        className="inline-flex items-center gap-3 rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-300 backdrop-blur-xl">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.75)]"/>
                        project index
                    </div>

                    <div className="space-y-4">
                        <h1 className="max-w-6xl font-display text-[clamp(1.6rem,5vw,4rem)] font-bold leading-[0.95] tracking-tight text-slate-100">
                            Built systems, products, and experiments with a controlled neon edge.
                        </h1>
                        <p className="max-w-4xl text-base leading-7 text-slate-300 md:text-lg">
                            This index groups the portfolio as a technical control surface: dense panels, precise
                            borders, live filters, and project cards tuned for fast scanning on desktop and mobile.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Link
                            to={ActiveTab.Contact}
                            className="inline-flex items-center gap-3 rounded-md bg-linear-to-r from-violet-500 to-cyan-400 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-white transition-all hover:brightness-110 hover:shadow-[0_0_18px_rgba(34,211,238,0.25)] active:scale-[0.98]"
                        >
                            Start a project
                            <ArrowRightIcon size={16}/>
                        </Link>
                        <a
                            href={featuredProject.codeUrl ?? '#'}
                            target={featuredProject.codeUrl ? '_blank' : undefined}
                            rel={featuredProject.codeUrl ? 'noreferrer noopener' : undefined}
                            className="inline-flex items-center gap-3 rounded-md border border-cyan-400/60 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan-300 transition-colors hover:bg-cyan-400/10"
                        >
                            View source
                            <Code2Icon size={16}/>
                        </a>
                    </div>
                </div>
            </header>

            <section className="grid gap-6 xl:grid-cols-12">
                <FeaturedProjectCard
                    project={featuredProject}
                    tags={getProjectTags(featuredProject)}
                    summary={getSummaryLine(featuredProject.description)}
                />

                <StatsCard projects={projects}/>
            </section>

            <section className="space-y-5">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-400">
                            project matrix
                        </p>
                        <h2 className="mt-1 text-2xl font-semibold text-slate-100">Highlights</h2>
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {gridProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            tags={getProjectTags(project)}
                            summary={getSummaryLine(project.description)}
                        />
                    ))}
                </div>
            </section>

            {section.bottom ? (<section className="grid gap-6 lg:grid-cols-12">
                {section.bottom.leftCard && (<div
                    className="lg:col-span-8 rounded-xl border border-slate-700 bg-slate-950/70 p-6 backdrop-blur-xl">
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-400">
                        {section.bottom.leftCard.subtitle}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-100">
                        {section.bottom.leftCard.title}
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
                        {section.bottom.leftCard.description}
                    </p>
                </div>)}

                {section.bottom.rightCard && (<div
                    className="lg:col-span-4 rounded-xl border border-slate-700 bg-linear-to-r from-violet-500/10 to-cyan-400/10 p-6 backdrop-blur-xl">
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-300">
                        {section.bottom.rightCard.subtitle}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-100">{section.bottom.rightCard.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                        {section.bottom.rightCard.description}
                    </p>
                    {section.bottom.rightCard.action && (<Link
                        role={"button"}
                        to={section.bottom.rightCard.action?.href ?? "#"}
                        className="mt-5 inline-flex items-center gap-2 rounded-md bg-linear-to-r from-violet-500 to-cyan-400 px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-white transition-all hover:brightness-110"
                    >
                        {section.bottom.rightCard.action.buttonText ?? 'Ir'}
                        <ArrowRightIcon size={16}/>
                    </Link>)}
                </div>)}
            </section>) : null}

        </section>
    );
};

export default ProjectsPage;
