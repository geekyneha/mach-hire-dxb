import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ar from "./ar.json";

const savedLanguage =
  typeof window !== "undefined"
    ? window.localStorage.getItem("site-language")
    : null;
const defaultLanguage = savedLanguage === "ar" ? "ar" : "en";

const resources = {
  en: { translation: en },
  ar: { translation: ar },
};

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
