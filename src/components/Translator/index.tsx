import React, { createContext, useState, useContext, ReactNode } from "react";
import navigationTranslations from "./Translations/navigasjon";
import contactFormTranslations from "./Translations/kontaktskjema";
import footerTranslations from "./Translations/footer";
import heroTranslations from "./Translations/hero";

interface TranslatorContextType {
  language: string;
  setLanguage: (language: string) => void;
  translate: (text: string) => string;
  toggleLanguage: () => void;
}

const TranslatorContext = createContext<TranslatorContextType | null>(null);

interface TranslatorProps {
  children: ReactNode;
}

const Translator: React.FC<TranslatorProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>("en");

  const translate = (text: string): string => {
    const translations: Record<string, Record<string, string>> = {
      ...navigationTranslations,
      ...contactFormTranslations,
      ...footerTranslations,
      ...heroTranslations,
    };

    return translations[text] ? translations[text][language] : text;
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "no" : "en"));
  };

  return (
    <TranslatorContext.Provider
      value={{ language, setLanguage, translate, toggleLanguage }}
    >
      {children}
    </TranslatorContext.Provider>
  );
};

export const useTranslator = (): TranslatorContextType => {
  const context = useContext(TranslatorContext);
  if (!context) {
    throw new Error("useTranslator must be used within a TranslatorProvider");
  }
  return context;
};

export default Translator;
