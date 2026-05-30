import {ContactItem} from "@models/contact-item.ts";
import {
    ArrowRightIcon,
    CodeIcon,
    MailIcon,
    Share2Icon,
} from "lucide-react";
import {ReactNode} from "react";
import {useTranslation} from "react-i18next";
import {twMerge} from "tailwind-merge";

interface SocialCardItem {
    name: string;
    icon: ReactNode;
    color?: string;
    textCol?: string;
    link: string;
}

interface SocialProps {
    contacts?: ContactItem[];
}

const getSocialIcon = (id: string) => {
    switch (id) {
        case "linkedin":
            return <Share2Icon/>;
        case "github":
            return <CodeIcon/>;
        case "gmail":
            return <MailIcon/>;
        default:
            return <CodeIcon/>;
    }
}

const SocialCard = ({contacts = []}: SocialProps) => {
    const {t} = useTranslation();
    const contactsMap: Array<SocialCardItem> = contacts.map((contact: ContactItem) => ({
        ...contact,
        icon: getSocialIcon(contact.id),
        name: t(contact.id),
    }));

    if (contactsMap.length === 0) {
        return null;
    }

    return (
        <div
            className="glass-card rounded-xl p-8 flex flex-col justify-center border-white/10 hover:border-[#4cd7f6]/30 transition-all duration-300 h-fit self-start">
            <h3 className="font-mono text-xs text-[#cbc3d7]/60 uppercase tracking-widest mb-6">
                {t('contact.social.title')}
            </h3>
            <div className="space-y-4">
                {contactsMap.map((soc) => (
                    <a
                        key={soc.name}
                        href={soc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={twMerge(`flex items-center justify-between p-4 bg-[#222a3d]/50 rounded-lg group/link transition-all border border-[#494454]/10`,
                            soc.color)}
                    >
                        <div className="flex items-center gap-4">
                    <span className={twMerge(`material-symbols-outlined`, soc.textCol)}>
                      {soc.icon}
                    </span>
                            <span className="font-sans text-lg font-semibold text-white">
                      {soc.name}
                    </span>
                        </div>
                        <span
                            className={twMerge(`material-symbols-outlined opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all`, soc.textCol)}>
                    <ArrowRightIcon/>
                  </span>
                    </a>
                ))}
            </div>
        </div>

    );
};

export {SocialCard};