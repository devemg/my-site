import {Link} from 'react-router';
import {ArrowRightIcon, Code2Icon} from 'lucide-react';
import {useTranslation} from 'react-i18next';
import {getDevemgProjects} from '../data/projects.data';
import {ActiveTab} from '@models/types';
import {ProjectCard} from '@components/projects/ProjectCard';
import {FeaturedProjectCard} from '@components/projects/FeaturedProjectCard';
import {StatsCard} from '@components/projects/StatsCard';
import {ProjectItem} from "@models/project-item.ts";
import {getDevemgContacts} from "@data/contact.data.ts";
import {useMemo} from "react";

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
const getSummaryLine = (description: string) => description.split('\n').find(Boolean) ?? description;

const ProjectsPage = () => {
    const {t} = useTranslation();
    const projects = getDevemgProjects();
    const contacts = getDevemgContacts();
    const featuredProject = projects.find((project) => project.id === 'ecom-app') ?? projects[0];
    const gridProjects = projects.filter((project) => project.id !== featuredProject.id);

    const github = useMemo(() => contacts.find(c => c.id.toLowerCase() === 'github'), [contacts]);

    return (
        <section className="relative isolate space-y-12 text-slate-200">
            <header className="grid gap-6 lg:grid-cols-12 lg:items-end">
                <div className="xl:col-span-12 space-y-5">
                    <div className="space-y-4">
                        <h1 className="max-w-6xl font-display text-[clamp(1.6rem,5vw,4rem)] font-bold leading-[0.95] tracking-tight text-slate-100">
                            {t('projects.page.hero.title1')}{' '}
                            <span className="text-gradient italic font-black">
                                {t('projects.page.hero.title2')}
                            </span>
                        </h1>
                        <p className="max-w-4xl text-base leading-7 text-slate-300 md:text-lg">
                            {t('projects.page.hero.description')}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            to={ActiveTab.Contact}
                            className="inline-flex items-center gap-3 rounded-md bg-linear-to-r from-violet-500 to-cyan-400 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-white transition-all hover:brightness-110 hover:shadow-[0_0_18px_rgba(34,211,238,0.25)] active:scale-[0.98]"
                        >
                            {t('projects.page.actions.startProject')}
                            <ArrowRightIcon size={16}/>
                        </Link>
                        {github && (<a
                            role={'button'}
                            href={github.link}
                            target={featuredProject.codeUrl ? '_blank' : undefined}
                            rel={featuredProject.codeUrl ? 'noreferrer noopener' : undefined}
                            className="inline-flex items-center gap-3 rounded-md border border-cyan-400/60 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan-300 transition-colors hover:bg-cyan-400/10"
                        >
                            {t('projects.page.actions.viewSource')}
                            <Code2Icon size={16}/>
                        </a>)}
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
                            {t('projects.page.sections.matrixLabel')}
                        </p>
                        <h2 className="mt-1 text-2xl font-semibold text-slate-100">
                            {t('projects.page.sections.highlights')}
                        </h2>
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

            <section className="grid gap-6 lg:grid-cols-12">
                <div className="lg:col-span-8 rounded-xl border border-slate-700 bg-slate-950/70 p-6 backdrop-blur-xl">
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-400">
                        {t('projects.page.sections.engineering.subtitle')}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-100">
                        {t('projects.page.sections.engineering.title')}
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
                        {t('projects.page.sections.engineering.description')}
                    </p>
                </div>

                <div
                    className="lg:col-span-4 rounded-xl border border-slate-700 bg-linear-to-r from-violet-500/10 to-cyan-400/10 p-6 backdrop-blur-xl">
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-300">
                        {t('projects.page.sections.cta.subtitle')}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-100">
                        {t('projects.page.sections.cta.title')}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                        {t('projects.page.sections.cta.description')}
                    </p>
                    <Link
                        role={"button"}
                        to="/contact"
                        className="mt-5 inline-flex items-center gap-2 rounded-md bg-linear-to-r from-violet-500 to-cyan-400 px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-white transition-all hover:brightness-110"
                    >
                        {t('projects.page.sections.cta.button')}
                        <ArrowRightIcon size={16}/>
                    </Link>
                </div>
            </section>
        </section>
    );
};

export default ProjectsPage;
