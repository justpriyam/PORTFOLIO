"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Linkedin, Download, MapPin } from "lucide-react"

interface ContactSectionProps {
  language: "en" | "hi"
}

const content = {
  en: {
    title: "Get In Touch",
    subtitle: "Let's connect and discuss opportunities",
    resume: "Download Resume",
    contact: {
      email: "Contact via Email",
      phone: "Call Me",
      location: "Bhimtal, Uttarakhand, India",
    },
    social: {
      github: "GitHub Profile",
      linkedin: "LinkedIn Profile",
    },
    footer: "© 2025 Priyam Gupta. All rights reserved.",
  },
  hi: {
    title: "संपर्क करें",
    subtitle: "आइए जुड़ें और अवसरों पर चर्चा करें",
    resume: "रिज्यूमे डाउनलोड करें",
    contact: {
      email: "ईमेल के माध्यम से संपर्क करें",
      phone: "मुझे कॉल करें",
      location: "भीमताल, उत्तराखंड, भारत",
    },
    social: {
      github: "GitHub प्रोफाइल",
      linkedin: "LinkedIn प्रोफाइल",
    },
    footer: "© 2025 प्रियम गुप्ता। सभी अधिकार सुरक्षित।",
  },
}

export function ContactSection({ language }: ContactSectionProps) {
  const t = content[language]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">{t.title}</h2>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <Card className="glass-card hover:animate-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{t.contact.email}</p>
                    <p className="text-sm text-muted-foreground">priyam@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{t.contact.phone}</p>
                    <p className="text-sm text-muted-foreground">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">{t.contact.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resume & Social */}
            <Card className="glass-card hover:animate-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button size="lg" className="w-full animate-glow" asChild>
                  <a
                    href="https://drive.google.com/file/d/1suArmBZGPpy--lzSyCAp4ZFri6IvmvEC/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    {t.resume}
                  </a>
                </Button>

                <div className="space-y-3">
                  <Button variant="outline" size="lg" className="w-full justify-start bg-transparent" asChild>
                    <a href="https://github.com/justpriyam" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-3" />
                      {t.social.github}
                    </a>
                  </Button>

                  <Button variant="outline" size="lg" className="w-full justify-start bg-transparent" asChild>
                    <a href="https://linkedin.com/in/priyam-gupta-a944772b5" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-3" />
                      {t.social.linkedin}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center py-8 border-t border-border">
            <p className="text-muted-foreground">{t.footer}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
