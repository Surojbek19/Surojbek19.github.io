"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import { translations } from "../data/translations";

type Language = "en" | "ko";

const LanguageContext = createContext<any>(null);

export function LanguageProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [lang, setLang] = useState<Language>("en");

    useEffect(() => {
        const saved = localStorage.getItem("language");

        if (saved === "en" || saved === "ko") {
            setLang(saved);
        }
    }, []);

    const changeLanguage = (newLang: Language) => {
        localStorage.setItem("language", newLang);
        setLang(newLang);
    };

    return (
        <LanguageContext.Provider
            value={{
                lang,
                setLang: changeLanguage,
                t: translations[lang],
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () =>
    useContext(LanguageContext);