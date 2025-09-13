"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "hi" | "fr" | "es" | "ja">("en")
  const [currentSection, setCurrentSection] = useState("home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            setCurrentSection(sectionId)

            // Add transition effects
            entry.target.classList.add("animate-section-enter")
          }
        })
      },
      { threshold: 0.3 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen">
      <section id="home" className="transition-section">
        <HeroSection language={language} />
      </section>

      <section id="about" className="transition-section">
        <AboutSection language={language} />
      </section>

      <section id="projects" className="transition-section">
        <ProjectsSection language={language} />
      </section>

      <section id="experience" className="transition-section">
        <ExperienceSection language={language} />
      </section>

      <section id="contact" className="transition-section">
        <ContactSection language={language} />
      </section>
    </main>
  )
}
