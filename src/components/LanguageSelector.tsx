import {useTranslation} from 'react-i18next';

export const LanguageSelector = () => {
    const {i18n} = useTranslation();

    const toggleLanguage = async () => {
        const newLang = i18n.resolvedLanguage === 'es' ? 'en' : 'es';
        await i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="fixed bottom-3 left-6 z-30 cursor-pointer hidden sm:flex items-center gap-2 font-mono text-[9px] text-secondary/60 bg-surface-container-lowest/60 px-2.5 py-1 rounded border border-outline-variant/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"/>
            <span>// {i18n.resolvedLanguage === 'es' ? "ESPAÑOL" : "ENGLISH"}</span>

        {/*    CYBER_SYS_STATE: SECURE  */}
        </button>
    )
};
