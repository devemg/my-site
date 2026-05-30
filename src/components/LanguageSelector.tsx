import {useTranslation} from 'react-i18next';

export const LanguageSelector = () => {
    const {i18n} = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="fixed bottom-3 left-6 z-30 cursor-pointer hidden sm:flex items-center gap-2 font-mono text-[9px] text-[#4cd7f6]/60 bg-[#060e20]/60 px-2.5 py-1 rounded border border-[#494454]/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-[#4cd7f6] rounded-full animate-pulse"/>
            <span>// {i18n.language === 'es' ? "ESPAÑOL" : "ENGLISH"}</span>

        {/*    CYBER_SYS_STATE: SECURE  */}
        </button>
    )
};
