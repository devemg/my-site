import {ProjectItem} from "@models/project-item.ts";
import {useEffect, useMemo, useState} from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "lucide-react";
import {useTranslation} from "react-i18next";

interface GalleryProps {
    project: ProjectItem;
}

const Gallery = ({project}: GalleryProps) => {
    const {t} = useTranslation();
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const projectImages = useMemo(() => project.images ?? [], [project]);
    const activeImage = projectImages[selectedImageIndex] ?? projectImages[0];

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

    return (
        <div className="xl:col-span-5 rounded-xl border border-slate-700 bg-slate-950/70 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-400">
                        {t('projectDetails.gallery.title')}
                    </p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">
                    {projectImages.length.toString().padStart(2, '0')} {t('projectDetails.gallery.frames')}
                </span>
            </div>

            <div className="mt-5 space-y-4">
                <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60">
                    {activeImage ? (
                        <img
                            src={activeImage.src}
                            alt={activeImage.alt ?? project?.name}
                            className="h-auto w-full aspect-video object-contain"
                            referrerPolicy="no-referrer"
                        />
                    ) : (
                        <div
                            className="flex min-h-70 items-center justify-center bg-slate-900 text-slate-400">
                            {t('projectDetails.gallery.noScreenshots')}
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
                            aria-label={t('projectDetails.gallery.previous')}
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
                                            alt={image.alt ?? `${project?.name} screenshot ${index + 1}`}
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
                            aria-label={t('projectDetails.gallery.next')}
                        >
                            <ChevronRightIcon size={16}/>
                        </button>
                    </div>
                )}
            </div>
        </div>

    );
};

export {Gallery};
