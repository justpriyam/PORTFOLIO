"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code, Target } from "lucide-react"

interface AboutSectionProps {
  language: "en" | "hi"
}

const content = {
  en: {
    title: "About Me",
    bio: "Priyam Gupta is a motivated and disciplined Computer Science Engineering undergraduate at Graphic Era Hill University, Bhimtal (GPA: 8.85, expected graduation: Jan 2027). Strong foundation in Data Structures and Algorithms, C++, Java, and Web Development, with experience building and deploying real-world AI and web systems. Passionate about scalable solutions for real-world problems, aiming for a role as a Software Developer.",
    education: {
      title: "Education",
      degree: "B.Tech in Computer Science Engineering",
      university: "Graphic Era Hill University - Bhimtal",
      gpa: "GPA: 8.85",
      graduation: "Expected Jan 2027",
    },
    skills: {
      title: "Technical Skills",
      categories: {
        languages: "Programming Languages",
        concepts: "Core Concepts",
        tools: "Tools & Technologies",
      },
    },
    goals: {
      title: "Career Goals",
      description:
        "Aspiring to become a Software Developer, focusing on building scalable solutions that solve real-world problems and make a positive impact.",
    },
  },
  hi: {
    title: "मेरे बारे में",
    bio: "प्रियम गुप्ता ग्राफिक एरा हिल यूनिवर्सिटी, भीमताल में कंप्यूटर साइंस इंजीनियरिंग के एक प्रेरित और अनुशासित स्नातक हैं (GPA: 8.85, अपेक्षित स्नातक: जनवरी 2027)। डेटा स्ट्रक्चर्स और एल्गोरिदम, C++, Java, और वेब डेवलपमेंट में मजबूत आधार के साथ, वास्तविक दुनिया के AI और वेब सिस्टम बनाने और तैनात करने का अनुभव। वास्तविक समस्याओं के लिए स्केलेबल समाधानों के बारे में जुनूनी, सॉफ्टवेयर डेवलपर की भूमिका का लक्ष्य।",
    education: {
      title: "शिक्षा",
      degree: "कंप्यूटर साइंस इंजीनियरिंग में B.Tech",
      university: "ग्राफिक एरा हिल यूनिवर्सिटी - भीमताल",
      gpa: "GPA: 8.85",
      graduation: "अपेक्षित जनवरी 2027",
    },
    skills: {
      title: "तकनीकी कौशल",
      categories: {
        languages: "प्रोग्रामिंग भाषाएं",
        concepts: "मुख्य अवधारणाएं",
        tools: "उपकरण और तकनीकें",
      },
    },
    goals: {
      title: "करियर लक्ष्य",
      description:
        "सॉफ्टवेयर डेवलपर बनने की आकांक्षा, स्केलेबल समाधान बनाने पर ध्यान देना जो वास्तविक समस्याओं को हल करे और सकारात्मक प्रभाव डाले।",
    },
  },
}

const skills = {
  languages: ["C", "C++", "Java", "JavaScript", "HTML", "CSS"],
  concepts: ["Data Structures", "Algorithms", "OOP", "Problem Solving"],
  tools: ["Git", "VS Code", "MySQL", "React", "Node.js"],
}

export function AboutSection({ language }: AboutSectionProps) {
  const t = content[language]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">{t.title}</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio and Education */}
          <div className="space-y-8">
            <Card className="glass-card hover:animate-glow transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground">{t.bio}</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:animate-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold">{t.education.title}</h3>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">{t.education.degree}</p>
                  <p className="text-muted-foreground">{t.education.university}</p>
                  <div className="flex gap-4 text-sm">
                    <Badge variant="secondary">{t.education.gpa}</Badge>
                    <Badge variant="outline">{t.education.graduation}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills and Goals */}
          <div className="space-y-8">
            <Card className="glass-card hover:animate-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold">{t.skills.title}</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3 text-primary">{t.skills.categories.languages}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 text-primary">{t.skills.categories.concepts}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.concepts.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 text-primary">{t.skills.categories.tools}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover:animate-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold">{t.goals.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{t.goals.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
