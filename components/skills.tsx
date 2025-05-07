"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Server, Wrench } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      icon: <Code className="h-5 w-5 text-purple-500" />,
      skills: ["JavaScript", "TypeScript"],
    },
    {
      category: "Backend Development",
      icon: <Server className="h-5 w-5 text-purple-500" />,
      skills: ["NestJS", "Node.js", "Express", "RESTful API Design"],
    },
    {
      category: "Frontend Development",
      icon: <Globe className="h-5 w-5 text-purple-500" />,
      skills: ["Next.js", "React", "Svelte", "Tailwind CSS", "shadcn/ui", "Responsive Web Design"],
    },
    {
      category: "Database Technologies",
      icon: <Database className="h-5 w-5 text-purple-500" />,
      skills: ["MySQL", "PostgreSQL", "Prisma ORM", "Database Design & Optimization"],
    },
    {
      category: "DevOps & Cloud",
      icon: <Wrench className="h-5 w-5 text-purple-500" />,
      skills: ["Nginx Configuration", "Oracle Cloud", "Git", "Automated backup systems", "CI/CD pipelines"],
    },
  ]

  return (
    <>
    {/* Skills Section */}
        <section id='skills' className='min-h-screen flex items-center py-20'>
          <div className='container mx-auto px-6'>
            <div className='mb-16 text-center'>
              <h2 className='text-3xl md:text-5xl font-bold mb-4'>
                My <span className='text-red-500'>Skills</span>
              </h2>
              <div className='w-20 h-1 bg-red-500 mx-auto'></div>
            </div>

            <div className='grid md:grid-cols-2 gap-12'>
              <div>
                <h3 className='text-2xl font-bold mb-6'>Technical Skills</h3>

                <div className='space-y-6'>
                  <div>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>JavaScript</span>
                      <span>90%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-700 rounded-full'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>React</span>
                      <span>85%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-700 rounded-full'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>Node.js</span>
                      <span>80%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-700 rounded-full'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>Nest.js</span>
                      <span>60%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-700 rounded-full'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '60%' }}></div>
                    </div>
                  </div>{' '}
                  <div>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>Mysql</span>
                      <span>70%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-700 rounded-full'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>TypeScript</span>
                      <span>75%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-700 rounded-full'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>Next.js</span>
                      <span>85%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-700 rounded-full'>
                      <div
                        className='h-full bg-red-500 rounded-full'
                        style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-2xl font-bold mb-6'>Professional Skills</h3>

                <div className='grid grid-cols-2 gap-6'>
                  <div className='flex flex-col items-center'>
                    <div className='relative w-32 h-32'>
                      <svg className='w-full h-full' viewBox='0 0 100 100'>
                        <circle
                          className='text-gray-700 stroke-current'
                          strokeWidth='10'
                          cx='50'
                          cy='50'
                          r='40'
                          fill='transparent'></circle>
                        <circle
                          className='text-red-500 stroke-current'
                          strokeWidth='10'
                          strokeLinecap='round'
                          strokeDasharray='251.2'
                          strokeDashoffset='50.24'
                          cx='50'
                          cy='50'
                          r='40'
                          fill='transparent'
                          transform='rotate(-90 50 50)'></circle>
                      </svg>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-2xl font-bold'>80%</span>
                      </div>
                    </div>
                    <span className='mt-4 font-medium'>Communication</span>
                  </div>

                  <div className='flex flex-col items-center'>
                    <div className='relative w-32 h-32'>
                      <svg className='w-full h-full' viewBox='0 0 100 100'>
                        <circle
                          className='text-gray-700 stroke-current'
                          strokeWidth='10'
                          cx='50'
                          cy='50'
                          r='40'
                          fill='transparent'></circle>
                        <circle
                          className='text-red-500 stroke-current'
                          strokeWidth='10'
                          strokeLinecap='round'
                          strokeDasharray='251.2'
                          strokeDashoffset='25.12'
                          cx='50'
                          cy='50'
                          r='40'
                          fill='transparent'
                          transform='rotate(-90 50 50)'></circle>
                      </svg>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-2xl font-bold'>90%</span>
                      </div>
                    </div>
                    <span className='mt-4 font-medium'>Problem Solving</span>
                  </div>

                  <div className='flex flex-col items-center'>
                    <div className='relative w-32 h-32'>
                      <svg className='w-full h-full' viewBox='0 0 100 100'>
                        <circle
                          className='text-gray-700 stroke-current'
                          strokeWidth='10'
                          cx='50'
                          cy='50'
                          r='40'
                          fill='transparent'></circle>
                        <circle
                          className='text-red-500 stroke-current'
                          strokeWidth='10'
                          strokeLinecap='round'
                          strokeDasharray='251.2'
                          strokeDashoffset='37.68'
                          cx='50'
                          cy='50'
                          r='40'
                          fill='transparent'
                          transform='rotate(-90 50 50)'></circle>
                      </svg>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-2xl font-bold'>85%</span>
                      </div>
                    </div>
                    <span className='mt-4 font-medium'>Teamwork</span>
                  </div>

                  <div className='flex flex-col items-center'>
                    <div className='relative w-32 h-32'>
                      <svg className='w-full h-full' viewBox='0 0 100 100'>
                        <circle
                          className='text-gray-700 stroke-current'
                          strokeWidth='10'
                          cx='50'
                          cy='50'
                          r='40'
                          fill='transparent'></circle>
                        <circle
                          className='text-red-500 stroke-current'
                          strokeWidth='10'
                          strokeLinecap='round'
                          strokeDasharray='251.2'
                          strokeDashoffset='50.24'
                          cx='50'
                          cy='50'
                          r='40'
                          fill='transparent'
                          transform='rotate(-90 50 50)'></circle>
                      </svg>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-2xl font-bold'>80%</span>
                      </div>
                    </div>
                    <span className='mt-4 font-medium'>Creativity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
