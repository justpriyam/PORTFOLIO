"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Award, Trophy, Heart } from "lucide-react"

interface ExperienceSectionProps {
  language: "en" | "hi"
}

const content = {
  en: {
    title: "Experience & Achievements",
    experience: {
      title: "Experience",
      items: [
        {
          role: "Managing Director",
          organization: "Astroverse Club, Graphic Era Hill University",
          description: "Leading the astronomy and space science club, organizing events and workshops for students.",
        },
        {
          role: "Placement Department Volunteer",
          organization: "Graphic Era Hill University",
          description: "Assisting in placement activities and connecting students with career opportunities.",
        },
        {
          role: "NSS Volunteer",
          organization: "National Service Scheme",
          description: "Contributing to community service and social development initiatives.",
        },
      ],
    },
    certifications: {
      title: "Certifications",
      items: [
        "AWS Cloud Practitioner (AWS Skill Builder)",
        "AWS Labs Badge",
        "AI Fundamentals of Statistics (NPTEL)",
        "Web Development (Simplilearn)",
        "Introduction to Generative AI (Google)",
      ],
    },
    competitive: {
      title: "Competitive Programming",
      achievements: [
        "100+ problems solved on LeetCode",
        "50+ problems solved on HackerRank",
        "Regular participant on Codeforces",
      ],
    },
    hobbies: {
      title: "Hobbies & Interests",
      items: ["Painting", "Traveling", "Astronomy", "Photography"],
    },
  },
  hi: {
    title: "अनुभव और उपलब्धियां",
    experience: {
      title: "अनुभव",
      items: [
        {
          role: "प्रबंध निदेशक",
          organization: "एस्ट्रोवर्स क्लब, ग्राफिक एरा हिल यूनिवर्सिटी",
          description: "खगोल विज्ञान और अंतरिक्ष विज्ञान क्लब का नेतृत्व, छात्रों के लिए कार्यक्रम और कार्यशालाओं का आयोजन।",
        },
        {
          role: "प्लेसमेंट विभाग स्वयंसेवक",
          organization: "ग्राफिक एरा हिल यूनिवर्सिटी",
          description: "प्लेसमेंट गतिविधियों में सहायता और छात्रों को करियर के अवसरों से जोड़ना।",
        },
        {
          role: "NSS स्वयंसेवक",
          organization: "राष्ट्रीय सेवा योजना",
          description: "सामुदायिक सेवा और सामाजिक विकास पहलों में योगदान।",
        },
      ],
    },
    certifications: {
      title: "प्रमाणपत्र",
      items: [
        "AWS क्लाउड प्रैक्टिशनर (AWS स्किल बिल्डर)",
        "AWS लैब्स बैज",
        "AI सांख्यिकी की मूल बातें (NPTEL)",
        "वेब डेवलपमेंट (सिम्प्लिलर्न)",
        "जेनेरेटिव AI का परिचय (गूगल)",
      ],
    },
    competitive: {
      title: "प्रतियोगी प्रोग्रामिंग",
      achievements: ["LeetCode पर 100+ समस्याएं हल", "HackerRank पर 50+ समस्याएं हल", "Codeforces पर नियमित भागीदार"],
    },
    hobbies: {
      title: "शौक और रुचियां",
      items: ["चित्रकारी", "यात्रा", "खगोल विज्ञान", "फोटोग्राफी"],
    },
  },
}

export function ExperienceSection({ language }: ExperienceSectionProps) {
  const t = content[language]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">{t.title}</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <Card className="glass-card hover:animate-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl">{t.experience.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {t.experience.items.map((item, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-4 space-y-2">
                  <h3 className="font-semibold text-primary">{item.role}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{item.organization}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="glass-card hover:animate-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl">{t.certifications.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {t.certifications.items.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Competitive Programming */}
          <Card className="glass-card hover:animate-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl">{t.competitive.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {t.competitive.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Badge variant="secondary" className="w-fit">
                      {achievement}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Hobbies */}
          <Card className="glass-card hover:animate-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl">{t.hobbies.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {t.hobbies.items.map((hobby, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {hobby}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
