import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from "i18next-browser-languagedetector";

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
  fallbackLng: 'en',
  resources: {
    en: {
      translations: require('./locales/en.json')
    },
    fr: {
      translations: require('./locales/fr.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations',
  react: {
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'b'],
  },
});

i18n.languages = ['en', 'fr'];

export default i18n;
