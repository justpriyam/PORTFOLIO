"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Brain, Globe, Users } from "lucide-react"

interface ProjectsSectionProps {
  language: "en" | "hi"
}

const content = {
  en: {
    title: "Featured Projects",
    projects: [
      {
        title: "AI-Based Student Performance Predictor",
        description:
          "Machine learning system that analyzes student datasets to predict academic performance using advanced ML algorithms and data visualization.",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
        icon: Brain,
        category: "AI/ML",
      },
      {
        title: "Personal Portfolio Website",
        description:
          "Modern, responsive portfolio website built with Next.js, featuring glassmorphism design, smooth animations, and multi-language support.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        icon: Globe,
        category: "Web Development",
      },
      {
        title: "Club Event Management System",
        description:
          "Java-based desktop application for managing college club events, member tracking, and event scheduling with intuitive GUI.",
        tech: ["Java", "Swing", "MySQL", "JDBC"],
        icon: Users,
        category: "Desktop Application",
      },
    ],
    viewCode: "View Code",
    liveDemo: "Live Demo",
  },
  hi: {
    title: "चुनिंदा प्रोजेक्ट्स",
    projects: [
      {
        title: "AI-आधारित छात्र प्रदर्शन भविष्यवाणी",
        description:
          "मशीन लर्निंग सिस्टम जो उन्नत ML एल्गोरिदम और डेटा विज़ुअलाइज़ेशन का उपयोग करके शैक्षणिक प्रदर्शन की भविष्यवाणी करने के लिए छात्र डेटासेट का विश्लेषण करता है।",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
        icon: Brain,
        category: "AI/ML",
      },
      {
        title: "व्यक्तिगत पोर्टफोलियो वेबसाइट",
        description:
          "Next.js के साथ बनी आधुनिक, रेस्पॉन्सिव पोर्टफोलियो वेबसाइट, जिसमें ग्लासमॉर्फिज्म डिज़ाइन, स्मूथ एनिमेशन और बहुभाषी समर्थन है।",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        icon: Globe,
        category: "वेब डेवलपमेंट",
      },
      {
        title: "क्लब इवेंट प्रबंधन सिस्टम",
        description: "कॉलेज क्लब इवेंट्स, सदस्य ट्रैकिंग और इवेंट शेड्यूलिंग के लिए सहज GUI के साथ Java-आधारित डेस्कटॉप एप्लिकेशन।",
        tech: ["Java", "Swing", "MySQL", "JDBC"],
        icon: Users,
        category: "डेस्कटॉप एप्लिकेशन",
      },
    ],
    viewCode: "कोड देखें",
    liveDemo: "लाइव डेमो",
  },
}

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const t = content[language]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">{t.title}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card
                key={index}
                className="glass-card hover:animate-glow transition-all duration-300 group hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Github className="w-4 h-4 mr-2" />
                      {t.viewCode}
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t.liveDemo}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
