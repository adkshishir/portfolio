"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-grid mask-radial-faded opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-pink-500/20 dark:bg-pink-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container px-4 md:px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block rounded-full px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 mb-4"
              >
                Full Stack Software Developer
              </motion.div>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter glow-text"
              >
                <span className="text-gradient">SHISHIR</span> ADHIKARI
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl md:text-2xl text-muted-foreground mt-4 max-w-[600px]"
              >
                Building scalable and performant web applications with modern technologies
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="gap-2 border-2 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300"
              >
                <Link href="#contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex gap-6 mt-8"
            >
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            <div className="relative w-[450px] h-[450px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl animate-float"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-20"></div>
              <div className="absolute inset-5 rounded-full bg-background flex items-center justify-center overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Shishir Adhikari"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>

              {/* Floating tech icons */}
              <div
                className="absolute top-0 left-1/4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Image src="/placeholder.svg?height=30&width=30" alt="React" width={30} height={30} />
              </div>
              <div
                className="absolute bottom-10 right-0 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <Image src="/placeholder.svg?height=30&width=30" alt="Node.js" width={30} height={30} />
              </div>
              <div
                className="absolute bottom-20 left-0 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg animate-float"
                style={{ animationDelay: "2s" }}
              >
                <Image src="/placeholder.svg?height=30&width=30" alt="TypeScript" width={30} height={30} />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
