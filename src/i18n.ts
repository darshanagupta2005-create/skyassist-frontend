import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Greetings & Headers
      "good_day": "Good day",
      "welcome_back": "Welcome back — let's get you to your gate",
      "your_journey": "Your journey",
      "terminal_conditions": "Terminal conditions",
      "airport_assistant": "Airport Assistant",
      "powered_by": "Powered by real-time terminal data",

      // Flight & Gate Info
      "flight": "Flight",
      "terminal": "Terminal",
      "gate": "Gate",
      "boarding": "Boarding",
      "boarding_starts": "BOARDING STARTS IN",
      "status_on_time": "On Time",
      "status_delayed": "Delayed",
      "status_cancelled": "Cancelled",

      // Timeline & Journey Steps
      "check_in": "Check-In",
      "security": "Security",
      "immigration": "Immigration",
      "mark_next": "Mark next",
      "min_wait": "min wait",

      // Amenities & Amenities Toolbar
      "coffee": "Coffee",
      "food": "Food",
      "restrooms": "Restrooms",
      "atm": "ATM",
      "lounges": "Lounges",
      "charging": "Charging",

      // Controls & Accessibility
      "preferred_language": "Preferred language",
      "accessibility": "Accessibility",
      "signin_button": "Sign in to AeroGuide",
      "sign_out": "Sign Out"
    }
  },
  hi: {
    translation: {
      // Greetings & Headers
      "good_day": "शुभ दिन",
      "welcome_back": "वापसी पर आपका स्वागत है — चलिए आपको आपके गेट तक ले चलते हैं",
      "your_journey": "आपकी यात्रा",
      "terminal_conditions": "टर्मिनल की स्थिति",
      "airport_assistant": "एयरपोर्ट सहायक",
      "powered_by": "वास्तविक समय के टर्मिनल डेटा द्वारा संचालित",

      // Flight & Gate Info
      "flight": "उड़ान (फ़्लाइट)",
      "terminal": "टर्मिनल",
      "gate": "गेट",
      "boarding": "बोर्डिंग",
      "boarding_starts": "बोर्डिंग शुरू होने में समय",
      "status_on_time": "समय पर",
      "status_delayed": "विलंबित (देरी)",
      "status_cancelled": "रद्द",

      // Timeline & Journey Steps
      "check_in": "चेक-इन",
      "security": "सुरक्षा जाँच",
      "immigration": "इमिग्रेशन (आप्रवासन)",
      "mark_next": "अगला चिह्नित करें",
      "min_wait": "मिनट प्रतीक्षा",

      // Amenities & Amenities Toolbar
      "coffee": "कॉफी",
      "food": "खाना / भोजन",
      "restrooms": "शौचालय",
      "atm": "एटीएम",
      "lounges": "लाउंज",
      "charging": "चार्जिंग स्टेशन",

      // Controls & Accessibility
      "preferred_language": "पसंदीदा भाषा",
      "accessibility": "सुगम्यता (Accessibility)",
      "signin_button": "एयरोगाइड में साइन इन करें",
      "sign_out": "साइन आउट करें"
    }
  },
  mr: {
    translation: {
      // Greetings & Headers
      "good_day": "शुभ दिवस",
      "welcome_back": "पुन्हा स्वागत आहे — चला तुम्हाला तुमच्या गेटपर्यंत पोहोचवूया",
      "your_journey": "तुमचा प्रवास",
      "terminal_conditions": "टर्मिनलची स्थिती",
      "airport_assistant": "विमानतळ सहाय्यक",
      "powered_by": "रिअल-टाइम टर्मिनल डेटाद्वारे संचलित",

      // Flight & Gate Info
      "flight": "विमान (फ्लाइट)",
      "terminal": "टर्मिनल",
      "gate": "गेट",
      "boarding": "बोर्डिंग",
      "boarding_starts": "बोर्डिंग सुरू होण्यास उरलेला वेळ",
      "status_on_time": "वेळेवर",
      "status_delayed": "उशिरा",
      "status_cancelled": "रद्द",

      // Timeline & Journey Steps
      "check_in": "चेक-इन",
      "security": "सुरक्षा तपासणी",
      "immigration": "इमिग्रेशन (परदेशी पारपत्र तपासणी)",
      "mark_next": "पुढील निवडा",
      "min_wait": "मिनिटे वाट पाहावी लागेल",

      // Amenities & Amenities Toolbar
      "coffee": "कॉफी",
      "food": "खाद्यपदार्थ / अन्न",
      "restrooms": "शौचालय",
      "atm": "एटीएम",
      "lounges": "लाउंज",
      "charging": "चार्जिंग",

      // Controls & Accessibility
      "preferred_language": "निवडलेली भाषा",
      "accessibility": "सुलभता (Accessibility)",
      "signin_button": "एअरोगाइडमध्ये साइन इन करा",
      "sign_out": "साइन आउट करा"
    }
  },
  es: {
    translation: {
      "good_day": "Buenos días",
      "boarding_starts": "EL EMBARQUE COMIENZA EN",
      "coffee": "Café",
      "food": "Comida",
      "restrooms": "Baños",
      "atm": "Cajero",
      "lounges": "Salas VIP",
      "charging": "Carga"
    }
  },
  ar: {
    translation: {
      "good_day": "يوم سعيد",
      "boarding_starts": "يبدأ الصعود خلال",
      "coffee": "قهوة",
      "food": "طعام",
      "restrooms": "دورات المياه",
      "atm": "صراف آلي",
      "lounges": "صالات الإنتظار",
      "charging": "شحن"
    }
  },
  zh: {
    translation: {
      "good_day": "美好的一天",
      "boarding_starts": "距离登机还有",
      "coffee": "咖啡",
      "food": "美食",
      "restrooms": "洗手间",
      "atm": "自动取款机",
      "lounges": "休息室",
      "charging": "充电"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;