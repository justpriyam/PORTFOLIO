"use client"

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { LanguageSwitcher } from "@/components/language-switcher"
import Image from "next/image"

interface HeroSectionProps {
  language: "en" | "hi" | "fr" | "es" | "ja"
}

const content = {
  en: {
    name: "Priyam Gupta",
    tagline: "CSE Undergraduate",
    intro:
      "Driven, passionate, and skilled in creating real-world tech solutions that make a difference. Building innovative software with modern technologies.",
    cta: "Download CV",
  },
  hi: {
    name: "प्रियम गुप्ता",
    tagline: "CSE स्नातक",
    intro: "वास्तविक दुनिया के तकनीकी समाधान बनाने में कुशल, जुनूनी और प्रेरित। आधुनिक तकनीकों के साथ नवाचार सॉफ्टवेयर का निर्माण।",
    cta: "CV डाउनलोड करें",
  },
  fr: {
    name: "Priyam Gupta",
    tagline: "Étudiant en CSE",
    intro:
      "Motivé, passionné et compétent dans la création de solutions technologiques réelles qui font la différence. Construire des logiciels innovants avec des technologies modernes.",
    cta: "Télécharger CV",
  },
  es: {
    name: "Priyam Gupta",
    tagline: "Estudiante de CSE",
    intro:
      "Motivado, apasionado y hábil en crear soluciones tecnológicas del mundo real que marcan la diferencia. Construyendo software innovador con tecnologías modernas.",
    cta: "Descargar CV",
  },
  ja: {
    name: "プリヤム・グプタ",
    tagline: "CSE学部生",
    intro: "違いを生む実世界の技術ソリューションの作成に情熱的で熟練している。現代技術で革新的なソフトウェアを構築。",
    cta: "履歴書をダウンロード",
  },
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = content[language]

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-purple-300">
            <path
              d="M10 10 L90 10 L90 90 L10 90 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 w-40 h-40 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-300">
            <path d="M10 50 L30 10 L70 10 L90 50 L70 90 L30 90 Z" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute top-1/2 right-20 w-20 h-20 opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl"></div>
        </div>
      </div>

      <Navigation language={language} />
      <LanguageSwitcher currentLanguage={language} onLanguageChange={() => {}} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-12 lg:p-16 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">{t.name}</h1>
                <p className="text-2xl lg:text-3xl text-white/90 font-medium">{t.tagline}</p>
              </div>

              <p className="text-lg text-white/80 leading-relaxed max-w-lg">{t.intro}</p>

              <div className="flex items-center gap-6 flex-wrap">
                <Button
                  size="lg"
                  className="bg-white text-purple-900 hover:bg-white/90 font-semibold px-8 py-3 rounded-full"
                  asChild
                >
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    {t.cta}
                  </a>
                </Button>

                <div className="flex gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    <a href="https://github.com/justpriyam" target="_blank" rel="noopener noreferrer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    <a href="https://linkedin.com/in/priyam-gupta-a944772b5" target="_blank" rel="noopener noreferrer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    <a href="https://twitter.com/justpriyam" target="_blank" rel="noopener noreferrer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    <a href="https://youtube.com/@justpriyam" target="_blank" rel="noopener noreferrer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <Image
                    src="/images/priyam-formal-2.png"
                    alt="Priyam Gupta"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-30 blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
