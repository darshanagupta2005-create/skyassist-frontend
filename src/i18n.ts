import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      email: "Email",
      password: "Password",
      welcome_back: "Welcome back — let's get you to your gate.",
      sign_in: "Sign in to AeroGuide",
    },
  },
  hi: {
    translation: {
      email: "ईमेल",
      password: "पासवर्ड",
      welcome_back: "वापसी पर स्वागत है — चलिए आपको आपके गेट तक ले चलें।",
      sign_in: "एरोगाइड में साइन इन करें",
    },
  },
  mr: {
    translation: {
      email: "ईमेल",
      password: "पासवर्ड",
      welcome_back: "पुन्हा स्वागत आहे — चला तुम्हाला तुमच्या गेटवर घेऊन जाऊया.",
      sign_in: "एरोगाइडमध्ये साइन इन करा",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;