import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import es from './locales/es.json';
import pt from './locales/pt.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        es: { translation: es },
        pt: { translation: pt },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback if translation isn't available
    interpolation: { escapeValue: false },
});

export default i18n;