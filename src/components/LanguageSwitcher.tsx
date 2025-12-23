import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-5 right-5 z-50 size-10 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center cursor-pointer overflow-hidden"
      aria-label="Switch language"
      title={i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      {i18n.language === 'en' ? (
        <svg className="w-full h-full" viewBox="0 0 7410 3900" preserveAspectRatio="xMidYMid slice">
          <rect width="7410" height="3900" fill="#b22234"/>
          <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" strokeWidth="300"/>
          <rect width="2964" height="2100" fill="#3c3b6e"/>
          <g fill="#fff">
            <g id="s18">
              <g id="s9">
                <g id="s5">
                  <g id="s4">
                    <path id="s" d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"/>
                    <use href="#s" y="420"/>
                    <use href="#s" y="840"/>
                    <use href="#s" y="1260"/>
                  </g>
                  <use href="#s" y="1680"/>
                </g>
                <use href="#s4" x="247" y="210"/>
              </g>
              <use href="#s9" x="494"/>
            </g>
            <use href="#s18" x="988"/>
            <use href="#s9" x="1976"/>
            <use href="#s5" x="2470"/>
          </g>
        </svg>
      ) : (
        <svg className="w-full h-full" viewBox="0 0 750 500" preserveAspectRatio="xMidYMid slice">
          <rect width="750" height="500" fill="#c60b1e"/>
          <rect y="125" width="750" height="250" fill="#ffc400"/>
        </svg>
      )}
    </button>
  );
};
