import {ActiveTab} from "@models/types.ts";
import {Link} from "react-router";
import {
    ArrowRightIcon,
    CircleCheckBigIcon, CogIcon,
    DraftingCompassIcon,
    LayersIcon, PaletteIcon,
    PencilLineIcon,
    ZapIcon, CloudIcon, SparklesIcon,
} from "lucide-react";
import {FloatingSide} from "@components/home/FloatingSide.tsx";
import {twMerge} from "tailwind-merge";
import {useTranslation} from "react-i18next";
import {SkillSection} from "@models/skill-section.ts";
import {SkillsCards} from "@components/home/SkillsCards.tsx";

const HomePage = () => {
    const image = 'https://res.cloudinary.com/devemg/image/upload/v1780275240/my-portfolio/ilustration-1_ienhip.png';
    const {t} = useTranslation();
    const AISection = t("home.ai_section", {
        returnObjects: true,
        defaultValue: null,
    }) as SkillSection | null;
    const cloudDataSection = t("home.cloud_data_section", {
        returnObjects: true,
        defaultValue: null,
    }) as SkillSection | null;

    const core = t("home.core", {
        returnObjects: true,
        defaultValue: null,
    }) as SkillSection | null;

    const styleAndDesign = t("home.style_and_design", {
        returnObjects: true,
        defaultValue: null,
    }) as SkillSection | null;

    const toolsAndTest = t("home.tools_and_test", {
        returnObjects: true,
        defaultValue: null,
    }) as SkillSection | null;

    return (
        <section className="space-y-32">
            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Side: Info */}
                <div className={twMerge('space-y-8 relative', image ? "lg:col-span-8" : "lg:col-span-12")}>
                    <div
                        className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-[11px] md:text-[12px] backdrop-blur-md">
                        <span
                            className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_12px_#4cd7f6] mr-3 animate-pulse"/>
                        <span
                            className="tracking-wider uppercase">{t('home.hero.status')}</span>
                    </div>

                    <div className="space-y-6">
                        <h1 className="font-display text-[clamp(36px,4vw,72px)] leading-[1.05] tracking-tight font-extrabold text-on-surface">
                            {t('home.hero.pre-title')} <span
                            className="text-gradient font-black">{t('home.hero.titleAccent')}</span> {t('home.hero.title')}
                        </h1>
                        <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl border-l-2 border-primary/40 pl-6 py-2 leading-relaxed">
                            {t('home.hero.description')}
                        </p>
                    </div>

                    {/* Action Callouts */}
                    <div className="flex flex-wrap gap-5 pt-4">
                        <Link
                            role="button"
                            to={ActiveTab.Projects}
                            className="group relative px-8 py-4 bg-primary text-on-primary font-mono text-xs font-bold tracking-widest rounded-lg shadow-[0_0_20px_rgba(208,188,255,0.3)] hover:shadow-[0_0_35px_rgba(208,188,255,0.5)] transition-all active:scale-95 flex items-center gap-3 overflow-hidden cursor-pointer"
                        >
                            <div
                                className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"/>
                            <span>{t('home.hero.viewProjects')}</span>
                            <span
                                className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                <ArrowRightIcon/>
              </span>
                        </Link>

                        <Link
                            to={ActiveTab.Contact}
                            className="px-8 py-4 flex items-center glass-card text-on-surface font-mono text-xs font-bold tracking-widest rounded-lg hover:bg-surface-container-high/80 transition-all active:scale-95 border-white/10 cursor-pointer"
                        >
                            {t('home.hero.contactProtocol')}
                        </Link>
                    </div>


                </div>

                {/* Right Side: Visual Graphic Frame */}
                <div className={image ? "lg:col-span-4 relative hidden lg:block" : ""}>
                    <FloatingSide optimizerValue={95} image={image}/>
                </div>
            </div>

            {/* Key Expertise Section */}
            <div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                    {/* Card 1: System Architecture */}
                    <div
                        className="md:col-span-5 glass-card p-10 rounded-3xl flex flex-col justify-between group hover:border-primary/50 transition-all duration-300">
            <span
                className="material-symbols-outlined text-primary text-5xl mb-12 glow-primary group-hover:scale-110 transition-transform">
              <DraftingCompassIcon/>
            </span>
                        <div>
                            <h3 className="font-sans text-xl md:text-2xl mb-4 text-primary font-bold">
                                {t('home.expertise.system_architecture')}
                            </h3>
                            <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                                {t('home.expertise.system_architecture_desc')}
                            </p>
                        </div>
                    </div>

                    {/* Card 2 & 3 Combined Block */}
                    <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Action Core */}
                        <div
                            className="glass-card p-8 rounded-3xl group hover:border-secondary/50 transition-all duration-300 md:translate-y-6">
              <span
                  className="material-symbols-outlined text-secondary text-4xl mb-6 glow-accent group-hover:rotate-12 transition-transform">
                <ZapIcon/>
              </span>
                            <h3 className="font-sans text-lg md:text-xl mb-3 font-semibold text-on-surface">
                                {t('home.expertise.performance_core')}
                            </h3>
                            <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">
                                {t('home.expertise.performance_core_desc')}
                            </p>
                        </div>

                        {/* Visual fidelity */}
                        <div
                            className="glass-card p-8 rounded-3xl group hover:border-tertiary/50 transition-all duration-300">
              <span
                  className="material-symbols-outlined text-tertiary text-4xl mb-6 filter drop-shadow(0 0 8px rgba(255,175,211,0.5)) group-hover:-rotate-12 transition-transform">
                <PencilLineIcon/>
              </span>
                            <h3 className="font-sans text-lg md:text-xl mb-3 font-semibold text-on-surface">
                                {t("home.expertise.visual_fidelity")}
                            </h3>
                            <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">
                                {t("home.expertise.visual_fidelity_desc")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Stack Breakdown Section */}
            <div className="space-y-12">
                <div
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant/30 pb-8 relative">
                    <div className="absolute -left-10 bottom-0 w-20 h-0.5 bg-primary shadow-[0_0_10px_#d0bcff]"/>
                    <div>
                        <h2 className="font-sans text-2xl md:text-3xl font-extrabold flex items-center gap-4 text-on-surface">
              <span className="material-symbols-outlined text-primary glow-primary">
                <LayersIcon/>
              </span>
                            {t('home.stack.title')}
                        </h2>
                        <p className="text-on-surface-variant text-sm md:text-base mt-2 max-w-lg">
                            {t('home.stack.description')}
                        </p>
                    </div>
                    <div
                        className="font-mono text-[11px] text-primary/90 bg-primary/10 px-4 py-2 rounded-lg border border-primary/30 backdrop-blur-sm self-start md:self-auto">
                        {t('home.stack.version')}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <SkillsCards
                        direction={"vertical"}
                        skillItem={core} className={"lg:col-span-5"} icon={<LayersIcon/>}/>
                    <SkillsCards
                        verticalColumns={1}
                        variant={"secondary"}
                        direction={"vertical"}
                        className={"lg:col-span-3 "}
                        skillItem={styleAndDesign}
                        icon={<PaletteIcon/>}
                        itemClassName={"border-0 bg-transparent group/item"}
                        customDotElement={<CircleCheckBigIcon className={"text-secondary group-hover/item:scale-125"}
                                                              size={16}/>}
                    />
                    <SkillsCards variant={"tertiary"} direction={'vertical'}
                                 className={"lg:col-span-4"}
                                 itemClassName={"flex items-center transition-colors tracking-widest text-on-surface-variant bg-surface-container-lowest/80 border border-outline-variant/25 hover:border-primary/60 hover:text-white"}
                                 skillItem={toolsAndTest} icon={<CogIcon/>} customDotElement={null}/>
                    <SkillsCards skillItem={cloudDataSection} icon={<CloudIcon/>} variant={'tertiary'}/>
                    <SkillsCards skillItem={AISection} variant={"secondary"} icon={<SparklesIcon/>}/>

                </div>

            </div>
        </section>
    );
}

export default HomePage;
