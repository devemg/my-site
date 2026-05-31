import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import es from './locales/es.json';
import projectsEn from './locales/projects-en.json';
import projectsEs from './locales/projects-es.json';
import experienceEn from './locales/experience-en.json';
import experienceEs from './locales/experience-es.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { 
        translation: en,
        projects: projectsEn,
        experience: experienceEn
      },
      es: { 
        translation: es,
        projects: projectsEs,
        experience: experienceEs
      }
    },
    fallbackLng: 'es',
    detection: {
      order: ['navigator', 'localStorage', 'htmlTag'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
