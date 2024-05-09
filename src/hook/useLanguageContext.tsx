import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import ITmessages from "../i18n/ita.json";
import ENmessages from "../i18n/eng.json";

// Definizione del tipo per il valore del contesto della lingua
interface ILanguageChangeValue {
  LanguageState: {
    locale: string;
    messages: Record<string, string | Record<string, string>[]>; // Tipo dei messaggi come oggetto di stringhe chiave-valore
  };
  LanguageDispatch: React.Dispatch<{
    type: string;
    language: string;
  }>;
  updateLanguage: () => void;
}

// Contesto della lingua
const LanguageContext = createContext(null as unknown as ILanguageChangeValue);

// Riduttore della lingua
const LanguageReducer = (
  state: ILanguageChangeValue["LanguageState"],
  action: { type: string; language: string }
) => {
  let messages: Record<string, string | Record<string, string>[]> = {};
  switch (action.type) {
    case "UPDATE_LANGUAGE":
      switch (action.language) {
        case "it":
          messages = ITmessages;
          break;
        case "en":
        default:
          messages = ENmessages;
          break;
      }
      return {
        ...state,
        locale: action.language,
        messages: messages,
      };
    default:
      return state;
  }
};

// Hook per l'uso del contesto della lingua
export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("Context is not in the provider");
  }
  return context;
};

// Provider della lingua
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("it");
  const initialState = {
    locale: language,
    messages: ITmessages,
  };

  // Azioni

  const updateLanguage = () => {
    const newLanguage = language === "it" ? "en" : "it";
    setLanguage(newLanguage);
  };

  useEffect(() => {
    LanguageDispatch({ type: "UPDATE_LANGUAGE", language });
  }, [language]);

  const [LanguageState, LanguageDispatch] = useReducer(
    LanguageReducer,
    initialState
  );

  return (
    <LanguageContext.Provider
      value={{ LanguageState, LanguageDispatch, updateLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
