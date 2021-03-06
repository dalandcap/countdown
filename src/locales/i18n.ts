import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import En from './en.json';
import Ro from './ro.json';

i18n.use(LanguageDetector).init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: En,
    },
    ro: {
      translation: Ro,
    },
  },
});

export default i18n;
