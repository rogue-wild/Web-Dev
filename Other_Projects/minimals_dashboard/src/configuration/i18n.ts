import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations for different languages
import translationEN from "../locales/en.json";
import translationES from "../locales/es.json";

// Configure i18n
i18n.use(initReactI18next).init({
  lng: "en", // Default language
  resources: {
    en: {
      translation: translationEN,
    },
    es: {
      translation: translationES,
    },
  },
});

export default i18n;
