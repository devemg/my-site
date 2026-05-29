import {ActiveTab} from "@models/types.ts";
import {Link} from "react-router";
import {TerminalIcon} from "lucide-react";


export const FooterView = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-16 bg-[#060e20]/90 backdrop-blur-xl border-t border-[#494454]/30 relative z-20">
            <div
                className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 gap-10 max-w-7xl mx-auto">

                {/* Info Column */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#d0bcff] text-sm glow-primary">
              <TerminalIcon/>
            </span>
                        <span className="font-mono text-[12px] text-[#d0bcff] tracking-[0.2em] font-bold uppercase">
              devemg © {currentYear} v4.0.0
            </span>
                    </div>
                    <span className="font-sans text-xs text-[#cbc3d7] max-w-sm leading-relaxed">
          </span>
                </div>

                {/* Links Column */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                    <a
                        href="https://github.com"
                        target="_blank"
                        key="github"
                        rel="noopener noreferrer"
                        className="group text-[11px] font-mono text-[#cbc3d7] hover:text-[#d0bcff] transition-all tracking-[0.25em] flex items-center gap-2 font-bold"
                    >
                        <span className="w-0 group-hover:w-3 h-[1px] bg-[#d0bcff] transition-all duration-300"/>
                        GITHUB
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        key="linkedin"
                        rel="noopener noreferrer"
                        className="group text-[11px] font-mono text-[#cbc3d7] hover:text-[#d0bcff] transition-all tracking-[0.25em] flex items-center gap-2 font-bold"
                    >
                        <span className="w-0 group-hover:w-3 h-[1px] bg-[#d0bcff] transition-all duration-300"/>
                        LINKEDIN
                    </a>
                    <Link
                        to={ActiveTab.Experience}
                        type="button"
                        className="group text-[11px] font-mono text-[#cbc3d7] hover:text-[#d0bcff] transition-all tracking-[0.25em] flex items-center gap-2 font-bold cursor-pointer"
                    >
                        <span className="w-0 group-hover:w-3 h-[1px] bg-[#d0bcff] transition-all duration-300"/>
                        RESUME.PDF
                    </Link>
                </div>
            </div>
        </footer>
    );
}
