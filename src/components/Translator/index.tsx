import React, { createContext, useState, useContext, ReactNode } from "react";
import navigationTranslations from "./Translations/navigasjon";
import contactFormTranslations from "./Translations/kontaktskjema";
import footerTranslations from "./Translations/footer";
import heroTranslations from "./Translations/hero";
import aboutPageTranslations from "./Translations/aboutPage";
import aboutContainerTranslations from "./Translations/aboutContainer";
import contactPageTranslations from "./Translations/contactPage";
import contactPeopleTranslations from "./Translations/contactPeoplePage";
import servicePageTranslations from "./Translations/servicePage";
import projectPageTranslations from "./Translations/projectPage";
import personvernPageTranslations from "./Translations/privacyPolicy";

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
      ...aboutPageTranslations,
      ...aboutContainerTranslations,
      ...contactPageTranslations,
      ...contactPeopleTranslations,
      ...servicePageTranslations,
      ...projectPageTranslations,
      ...personvernPageTranslations,
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
