import {useTranslation} from "react-i18next";
import {ExperienceItem} from "@models/experience-item.ts";
import {
    BriefcaseBusinessIcon,
    MapPinIcon,
    SparklesIcon,
} from "lucide-react";
import {JobCard} from "@components/experience/JobCard.tsx";

const ExperiencePage = () => {
    const {t,} = useTranslation(["translation", "experience"]);

    // Try getting from experience namespace explicitly
    const experiences = t("items", {ns: "experience", returnObjects: true});

    console.log("Experiences data:", experiences); // Debugging aid if user can see console

    const experienceList = Array.isArray(experiences) ? (experiences as ExperienceItem[]) : [];

    // If list is empty, try direct access as fallback (sometimes namespace prefix is needed)
    const finalExperienceList = experienceList.length > 0
        ? experienceList
        : (t("experience:items", {returnObjects: true}) as Array<ExperienceItem>) || [];

    const experienceData = Array.isArray(finalExperienceList) ? finalExperienceList : [];
    const currentExperience = experienceData[0] || {role: "", company: ""};
    const totalYears = "5+";

    return (
        <section className="space-y-10">
            <div className="grid gap-6 lg:grid-cols-12">
                <div className="glass-card lg:col-span-8 rounded-3xl border border-white/10 p-8 md:p-10">
                    <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-secondary/80">
                        {t("experiencePage.hero.label")}
                    </p>
                    <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-on-surface md:text-5xl">
                        {t("experiencePage.hero.title")}{" "}
                        <span className="text-gradient font-black italic">
              {t("experiencePage.hero.titleAccent")}
            </span>
                    </h1>
                    <p className="mt-5 max-w-3xl text-base leading-relaxed text-on-surface-variant md:text-lg">
                        {t("experiencePage.hero.description")}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {["React", "Angular", "Tailwind CSS", "TypeScript", "Agile Teams"].map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-secondary/20 bg-surface-container/80 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface"
                            >
                {tag}
              </span>
                        ))}
                    </div>
                </div>

                <div className="grid gap-4 lg:col-span-4">
                    <div className="glass-card rounded-3xl border border-primary/20 p-6">
                        <div className="flex items-center gap-3">
                            <div
                                className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <SparklesIcon size={20}/>
                            </div>
                            <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-on-surface-variant/70">
                                    {t("experiencePage.stats.currentRole")}
                                </p>
                                <h2 className="text-lg font-bold text-white">
                                    {currentExperience.role}
                                </h2>
                            </div>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
                            {currentExperience.company} {t("experiencePage.stats.currentRoleDesc")}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass-card rounded-3xl border border-white/10 p-5 text-center">
                            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-on-surface-variant/60">
                                {t("experiencePage.stats.years")}
                            </p>
                            <p className="mt-3 text-4xl font-extrabold text-primary">
                                {totalYears}
                            </p>
                        </div>
                        <div className="glass-card rounded-3xl border border-white/10 p-5 text-center">
                            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-on-surface-variant/60">
                                {t("experiencePage.stats.roles")}
                            </p>
                            <p className="mt-3 text-4xl font-extrabold text-secondary">
                                {experienceData.length}
                            </p>
                        </div>
                    </div>

                    <div className="glass-card rounded-3xl border border-white/10 p-5">
                        <div className="flex items-center gap-3">
                            <div
                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                                <MapPinIcon size={18}/>
                            </div>
                            <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-on-surface-variant/60">
                                    {t("experiencePage.stats.base")}
                                </p>
                                <p className="font-semibold text-white">{t("experiencePage.stats.location")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-5">
                <div className="flex items-end justify-between gap-4 border-b border-outline-variant/30 pb-4">
                    <div>
                        <h2 className="flex items-center gap-3 text-2xl font-extrabold text-on-surface md:text-3xl">
                            <BriefcaseBusinessIcon className="text-primary" size={26}/>
                            {t("experiencePage.timeline.title")}
                        </h2>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-on-surface-variant">
                            {t("experiencePage.timeline.description")}
                        </p>
                    </div>
                </div>

                <div className="grid gap-5">
                    {experienceData.map((item) => (
                        <JobCard key={item.id} item={item}/>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default ExperiencePage;
