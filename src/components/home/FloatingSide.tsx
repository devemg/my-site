import {BadgeCheckIcon} from "lucide-react";

interface FloatingSideProps {
    optimizerValue?: number;
    image?: string;
}

const FloatingSide = ({
                          image, optimizerValue = 0
                      }: FloatingSideProps) => {
    if (!image) return null;
    return (
        <div>
            <div
                className="absolute -inset-10 bg-linear-to-tr from-primary/30 to-secondary/20 blur-[80px] opacity-40 animate-pulse pointer-events-none"/>

            <div className="relative animate-float">
                <div
                    className="glass-card p-1.5 rounded-2xl bg-linear-to-br from-primary/40 to-transparent">
                    <div
                        className="bg-[#0b1326] rounded-xl overflow-hidden aspect-square flex items-center justify-center relative group">
                        <img
                            alt="Emely Garcia Ilustration"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 scale-105 hover:scale-100 pointer-events-none"
                            src={image}
                        />
                        <div className="absolute inset-0 bg-surface-container-lowest/20 mix-blend-color"/>
                    </div>
                </div>

                {/* Floating Overlap Status Box */}
                <div
                    className="absolute -bottom-10 -right-4 p-5 glass-card rounded-xl border-primary/30 shadow-2xl max-w-50">
                    <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-secondary glow-accent text-sm"
                      style={{fontVariationSettings: "'FILL' 1"}}>
                  <BadgeCheckIcon/>
                </span>
                        <span
                            className="font-mono text-[9px] text-on-surface tracking-wider font-extrabold uppercase">
                  CORE_ENG_V4
                </span>
                    </div>

                    <div className="space-y-2">
                        <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                            <div
                                className="h-full bg-linear-to-r from-primary to-secondary transition-all duration-500 shadow-[0_0_8px_#4cd7f6]"
                                style={{width: `${optimizerValue}%`}}
                            />
                        </div>
                        <div className="flex justify-between font-mono text-[9px] text-on-surface-variant">
                            <span className="uppercase">EFICACIA</span>
                            <span className="text-secondary font-extrabold tracking-widest">
                    {optimizerValue}%
                  </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {FloatingSide};