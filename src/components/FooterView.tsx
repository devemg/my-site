import {TerminalIcon} from "lucide-react";
import {useMemo} from "react";
import {useSocials} from "@hooks/useSocials.tsx";


export const FooterView = () => {
    const currentYear = new Date().getFullYear();
    const {findSocial,} = useSocials();

    const github = useMemo(() => findSocial("github"), [findSocial]);

    const linkedin = useMemo(() => findSocial("linkedin"), [findSocial]);

    const resume = useMemo(() => findSocial("resume"), [findSocial]);

    return (
        <footer
            className="w-full py-16 bg-surface-container-lowest/90 backdrop-blur-xl border-t border-outline-variant/30 relative z-20">
            <div
                className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 gap-10 max-w-7xl mx-auto">

                {/* Info Column */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-sm glow-primary">
              <TerminalIcon/>
            </span>
                        <span className="font-mono text-[12px] text-primary tracking-[0.2em] font-bold uppercase">
              devemg © {currentYear} v4.0.0
            </span>
                    </div>
                    <span className="font-sans text-xs text-on-surface-variant max-w-sm leading-relaxed opacity-20">
                        Inspired in BentoGrids collections
          </span>
                </div>

                {/* Links Column */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                    {github && (<a
                        href={github.link}
                        target="_blank"
                        key="github"
                        rel="noopener noreferrer"
                        className="group text-[11px] font-mono text-on-surface-variant hover:text-primary transition-all tracking-[0.25em] flex items-center gap-2 font-bold"
                    >
                        <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300"/>
                        GITHUB
                    </a>)}
                    {linkedin && (<a
                        href={linkedin.link}
                        target="_blank"
                        key="linkedin"
                        rel="noopener noreferrer"
                        className="group text-[11px] font-mono text-on-surface-variant hover:text-primary transition-all tracking-[0.25em] flex items-center gap-2 font-bold"
                    >
                        <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300"/>
                        LINKEDIN
                    </a>)}
                    {resume && (<a
                        href={resume.link}
                        target="_blank"
                        className="group text-[11px] font-mono text-on-surface-variant hover:text-primary transition-all tracking-[0.25em] flex items-center gap-2 font-bold cursor-pointer"
                    >
                        <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300"/>
                        RESUME.PDF
                    </a>)}
                </div>
            </div>
        </footer>
    );
}
