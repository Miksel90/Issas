import { useContext } from "react";
import { TranslatorContext, TranslatorContextType } from "./index";

export const useTranslator = (): TranslatorContextType => {
  const context = useContext(TranslatorContext);
  if (!context) {
    throw new Error("useTranslator must be used within a TranslatorProvider");
  }
  return context;
};
