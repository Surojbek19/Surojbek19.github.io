"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
    const { t, lang, setLang } = useLanguage();

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#0f0f0f]/90 backdrop-blur-md border-b border-white/10 z-50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                <h1 className="font-bold text-xl text-white">
                    Michael.
                </h1>

                <ul className="hidden md:flex gap-8 text-sm font-medium">
                    <li><a href="#home">{t.nav.home}</a></li>
                    <li><a href="#about">{t.nav.about}</a></li>
                    <li><a href="#skills">{t.nav.skills}</a></li>
                    <li><a href="#projects">{t.nav.projects}</a></li>
                    <li><a href="#experience">{t.nav.experience}</a></li>
                    <li><a href="#contact">{t.nav.contact}</a></li>
                </ul>

                <button
                    onClick={() =>
                        setLang(lang === "en" ? "ko" : "en")
                    }
                    className="text-sm border border-white/20 px-3 py-1 rounded-lg hover:border-white/50"
                >
                    {lang === "en" ? "한국어" : "EN"}
                </button>

            </div>
        </nav>
    );
}