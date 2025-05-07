"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseBusiness, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      company: "Aarambha IT",
      position: "Software Developer",
      period: "June 2024 - Present",
      responsibilities: [
        "Developed responsive frontend for Tishy and Co, an Australian coffee shop website using modern web technologies",
        "Built full-stack solution for Pokhara Ultralight website, handling both client-facing interface and server-side logic",
        "Created interactive frontend for Myst Lounge, a Canada-based bar & restaurant with focus on user experience",
        "Implemented backend architecture and provided frontend debugging support for Easy Billings application",
        "Enhanced functionality and resolved critical issues for freehindifonts, focusing on backend optimization",
      ],
    },
    {
      company: "Skybase Innovations",
      position: "Software Developer",
      period: "Jul 2023 - May 2024",
      responsibilities: [
        "Developed Munchy Mo, a single-page restaurant application using Svelte framework",
        "Enhanced search functionality and fixed critical bugs for Sasto Ticket platform",
        "Collaborated with cross-functional teams to deliver feature improvements on time",
      ],
    },
    {
      company: "Skybase Innovations",
      position: "Intern",
      period: "Feb 2023 - Jun 2023",
      responsibilities: [
        "Contributed significant features to Bhoklagyo App including pagination, advanced search, and filtering capabilities",
        "Built a comprehensive Job Portal application using Laravel and Svelte frameworks",
        "Participated in code reviews and implemented feedback to improve code quality and performance",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10 bg-grid opacity-20"></div>
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block rounded-full px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 mb-4"
            >
              Work Experience
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
              My Professional <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">
              A timeline of my career growth and key achievements
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-pink-500 transform md:translate-x-px"></div>

            <div className="space-y-12 relative">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? "md:rtl" : ""}`}
                >
                  <div className={`${index % 2 === 0 ? "md:text-right" : ""} md:ltr`}>
                    <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-x-1/2 md:-translate-x-3 z-10 glow"></div>

                    <Card className="overflow-hidden border-purple-200 dark:border-purple-800 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <CardHeader>
                        <div className="flex flex-col gap-2">
                          <Badge
                            variant="outline"
                            className="w-fit text-sm font-normal px-3 py-1 border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300"
                          >
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            {exp.period}
                          </Badge>
                          <CardTitle className="text-xl md:text-2xl">{exp.position}</CardTitle>
                          <CardDescription className="text-base flex items-center gap-1">
                            <BriefcaseBusiness className="h-4 w-4" />
                            {exp.company}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-none space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="text-muted-foreground relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-r before:from-purple-500 before:to-pink-500"
                            >
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
