"use client"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface LanguageSwitcherProps {
  onLanguageChange: (lang: "en" | "hi" | "fr" | "es" | "ja") => void
  currentLanguage: "en" | "hi" | "fr" | "es" | "ja"
}

export function LanguageSwitcher({ onLanguageChange, currentLanguage }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  const languages = {
    en: { name: "English", native: "English" },
    hi: { name: "Hindi", native: "हिंदी" },
    fr: { name: "French", native: "Français" },
    es: { name: "Spanish", native: "Español" },
    ja: { name: "Japanese", native: "日本語" },
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="glass-card hover:animate-glow transition-all duration-300 bg-white/10 backdrop-blur-md border-white/20"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        {languages[currentLanguage].native}
        <ChevronDown className="w-3 h-3 ml-1" />
      </Button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg min-w-[120px] animate-zoom-in">
          {Object.entries(languages).map(([code, lang]) => (
            <button
              key={code}
              onClick={() => {
                onLanguageChange(code as any)
                setIsOpen(false)
              }}
              className={`w-full px-3 py-2 text-left hover:bg-white/10 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                currentLanguage === code ? "bg-purple-500/20 text-purple-200" : "text-white"
              }`}
            >
              {lang.native}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
