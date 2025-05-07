"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Layers } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Poon Hill Treks",
      description:
        "A responsive travel information site focused on the famous Poonhill trek with interactive maps and trek itinerary planning features. Optimized for SEO and fast loading speeds.",
      technologies: ["Next.js", "Tailwind CSS"],
      liveUrl: "https://poonhill.adhikarishishir.com.np",
      githubUrl: "#",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Hi Nepal Treks",
      description:
        "Designed and implemented content management system for admin users with optimized application performance for improved user experience.",
      technologies: ["Next.js", "NestJS", "MySQL"],
      liveUrl: "https://hinepaltreks.com",
      githubUrl: "#",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Med Tracker",
      description:
        "Developed a backend system for tracking medication schedules and patient compliance with secure API endpoints and efficient database schemas.",
      technologies: ["NestJS", "MySQL", "TypeScript", "Prisma ORM"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "E-commerce Backend",
      description:
        "Developed a backend system for ecommerce business for college project with secure API endpoints and e-sewa payment gateway integration.",
      technologies: ["Node.js", "MySQL", "TypeScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/adkshishir/ecommerce-backend-node",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-subtle"></div>
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>

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
              My Work
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">
              A showcase of my best work and technical achievements
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full overflow-hidden border-purple-200 dark:border-purple-800 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col bg-background/80 backdrop-blur-sm">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.technologies.slice(0, 2).map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-background/80 backdrop-blur-sm">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 2 && (
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                          +{project.technologies.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Layers className="h-5 w-5 text-purple-500" />
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-3">
                    {project.liveUrl !== "#" && (
                      <Button
                        variant="default"
                        size="sm"
                        asChild
                        className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      >
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl !== "#" && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="gap-2 border-purple-200 dark:border-purple-800"
                      >
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
