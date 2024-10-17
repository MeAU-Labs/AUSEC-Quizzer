"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Award,
  BookOpen,
  Briefcase,
  Building,
  Calendar,
  ChevronRight,
  Cpu,
  GraduationCap,
  Heart,
  Leaf,
  Lightbulb,
  MapPin,
  Palette,
  Recycle,
  Rocket,
  School,
  Sparkles,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { APP_NAME } from "~/utils/constants";

export default function LandingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInFromLeft = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b">
      <header className="bg-background py-4 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-md font-bold">
            Centre for Entrepreneurship Development
          </h1>
          <p className="text-xs">Anna University, Chennai - 600 025</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <motion.section
          className="mb-16"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.div className="mb-8 text-center" variants={fadeIn}>
            <h2 className="mb-4 text-6xl font-bold text-primary">{APP_NAME}</h2>
            <p className="mb-6 text-2xl text-muted-foreground">
              Igniting Young Minds, Cultivating Tomorrow&apos;s Innovators
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button>
                <a
                  href="/quiz"
                  className="hover:bg-primary-dark rounded-lg bg-primary px-4 py-2 font-semibold text-white"
                >
                  Take the quiz
                </a>
              </motion.button>
              <motion.button>
                <a
                  href="/register"
                  className="rounded-lg border-2 border-white bg-background px-4 py-2 font-semibold text-white"
                >
                  register now
                </a>
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3"
            variants={staggerChildren}
          >
            <motion.div
              className="flex flex-col items-center rounded-lg bg-secondary p-6 shadow-md"
              variants={fadeInFromLeft}
            >
              <Sparkles className="mb-4 h-12 w-12 text-yellow-500" />
              <h3 className="mb-2 text-xl font-semibold">Idea Hackathon</h3>
              <p className="text-center">
                Unleash your creativity and problem-solving skills
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center rounded-lg bg-secondary p-6 shadow-md"
              variants={fadeInFromLeft}
            >
              <MapPin className="mb-4 h-12 w-12 text-red-500" />
              <h3 className="mb-2 text-xl font-semibold">Tamil Nadu-wide</h3>
              <p className="text-center">
                Bringing together young minds from across the state
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center rounded-lg bg-secondary p-6 shadow-md"
              variants={fadeInFromLeft}
            >
              <Calendar className="mb-4 h-12 w-12 text-green-500" />
              <h3 className="mb-2 text-xl font-semibold">Multi-stage Event</h3>
              <p className="text-center">
                From district-level to state finals at Anna University
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section className="mb-12" {...fadeIn}>
          <h3 className="mb-4 text-2xl font-semibold">Event Timeline</h3>
          <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-stretch md:space-x-2 md:space-y-0">
            <div className="flex-1 rounded-lg bg-secondary p-4 shadow-md">
              <h4 className="font-bold">1. Preparedness Round</h4>
              <p>Online quiz on Innovation and chosen theme</p>
            </div>
            <ChevronRight className="hidden md:block" />
            <div className="flex-1 rounded-lg bg-secondary p-4 shadow-md">
              <h4 className="font-bold">2. Problem Statement Evaluation</h4>
              <p>Submit problem statement for next level evaluation</p>
            </div>
            <ChevronRight className="hidden md:block" />
            <div className="flex-1 rounded-lg bg-secondary p-4 shadow-md">
              <h4 className="font-bold">3. District Level Scrutiny</h4>
              <p>Pitch across 38 districts in Tamil Nadu</p>
            </div>
            <ChevronRight className="hidden md:block" />
            <div className="flex-1 rounded-lg bg-secondary p-4 shadow-md">
              <h4 className="font-bold">4. State Level (Finale)</h4>
              <p>Final pitch at Anna University, Chennai</p>
            </div>
          </div>
        </motion.section>

        <motion.section className="mb-12" {...fadeIn}>
          <Card>
            <CardHeader>
              <CardTitle>Eligibility</CardTitle>
              <CardDescription>
                Who can participate in {APP_NAME}?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Students from State Board, Matriculation, CBSE, and ICSE/IGCSE
                schools across Tamil Nadu, from grades 8 to 12, are eligible.
              </p>
              <h4 className="mb-2 mt-4 font-semibold">
                Team Composition & Registration
              </h4>
              <ul className="list-inside list-disc">
                <li>
                  Each team may comprise of not more than 3 students guided by a
                  mentor (teacher/guardian).
                </li>
                <li>
                  Registration Fee of Rs. 500 per team (No registration charges
                  for students from TN Government & Govt. Aided Schools)
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section className="mb-12" {...fadeIn}>
          <h3 className="mb-4 text-2xl font-semibold">Key Takeaways</h3>
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInFromLeft}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-6 w-6" />
                    AUSEC Membership
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Become part of the Anna University Student Entrepreneurship
                    Club (AUSEC) Student Chapter.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInFromLeft}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="mr-2 h-6 w-6" />
                    Internships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Access to student internship opportunities and workshops
                    from CED-AU/AUSEC.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInFromLeft}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="mr-2 h-6 w-6" />
                    Cash Rewards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Win cash prizes for your innovative ideas and solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInFromLeft}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="mr-2 h-6 w-6" />
                    Mentorship
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Receive guidance from experienced mentors to develop your
                    ideas.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInFromLeft}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Rocket className="mr-2 h-6 w-6" />
                    Startup Incubation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Get the opportunity to incubate your startup idea with
                    expert support.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInFromLeft}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="mr-2 h-6 w-6" />
                    Scholarships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Access to scholarships for entrepreneurial boot camps.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInFromLeft}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="mr-2 h-6 w-6" />
                    Resource Access
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Gain access to valuable resources, including co-working
                    spaces and funding opportunities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section className="mb-12" {...fadeIn}>
          <Card>
            <CardHeader>
              <CardTitle>Themes of Interest</CardTitle>
              <CardDescription>
                Explore various themes for your innovative ideas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.ul
                className="grid grid-cols-1 gap-4 md:grid-cols-2"
                variants={staggerChildren}
                initial="initial"
                animate="animate"
              >
                <motion.li
                  className="rounded-lg bg-blue-900 p-4 shadow"
                  variants={fadeInFromLeft}
                >
                  <h4 className="mb-2 flex items-center font-semibold">
                    <Recycle className="mr-2 h-5 w-5 text-blue-600" />
                    Innovative Solutions for Local Problems
                  </h4>
                  <p>
                    Focus on solving local community issues such as waste
                    management, water conservation, sustainable agriculture,
                    etc.
                  </p>
                </motion.li>
                <motion.li
                  className="rounded-lg bg-green-900 p-4 shadow"
                  variants={fadeInFromLeft}
                >
                  <h4 className="mb-2 flex items-center font-semibold">
                    <Cpu className="mr-2 h-5 w-5 text-green-600" />
                    Tech & Innovation Challenge
                  </h4>
                  <p>
                    Develop tech-based solutions, apps, or products tied to
                    current trends like AI, machine learning, or robotics.
                  </p>
                </motion.li>
                <motion.li
                  className="rounded-lg bg-yellow-900 p-4 shadow"
                  variants={fadeInFromLeft}
                >
                  <h4 className="mb-2 flex items-center font-semibold">
                    <Leaf className="mr-2 h-5 w-5 text-yellow-600" />
                    Sustainability Startup Challenge
                  </h4>
                  <p>
                    Create startups focused on sustainability, eco-friendly
                    solutions, and green technology.
                  </p>
                </motion.li>
                <motion.li
                  className="rounded-lg bg-red-900 p-4 shadow"
                  variants={fadeInFromLeft}
                >
                  <h4 className="mb-2 flex items-center font-semibold">
                    <Atom className="mr-2 h-5 w-5 text-red-600" />
                    STEM-Based Business Challenge
                  </h4>
                  <p>
                    Build innovative startups in sectors like health tech,
                    edtech, or agri-tech using STEM principles.
                  </p>
                </motion.li>
                <motion.li
                  className="rounded-lg bg-purple-900 p-4 shadow"
                  variants={fadeInFromLeft}
                >
                  <h4 className="mb-2 flex items-center font-semibold">
                    <Palette className="mr-2 h-5 w-5 text-purple-600" />
                    Creative Arts and Media Startups
                  </h4>
                  <p>
                    Develop startups in fields like digital marketing, design
                    services, or content creation.
                  </p>
                </motion.li>
                <motion.li
                  className="rounded-lg bg-indigo-900 p-4 shadow"
                  variants={fadeInFromLeft}
                >
                  <h4 className="mb-2 flex items-center font-semibold">
                    <Heart className="mr-2 h-5 w-5 text-indigo-600" />
                    Health and Wellness Startup Competition
                  </h4>
                  <p>
                    Create apps, services, or products aimed at promoting
                    healthier lifestyles.
                  </p>
                </motion.li>
              </motion.ul>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section className="mb-12" {...fadeIn}>
          <h3 className="mb-4 text-2xl font-semibold">About the Organizers</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.div variants={fadeInFromLeft}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-6 w-6 text-blue-600" />
                    About AUSEC
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The Anna University Student Entrepreneurship Club (AUSEC) is
                    a student-run organization dedicated to fostering
                    entrepreneurship and innovation among students. Our mission
                    is to:
                  </p>
                  <ul className="list-inside list-disc space-y-2">
                    <li>Support start-up enthusiasts by incubating ideas</li>
                    <li>Provide guidance and mentorship</li>
                    <li>
                      Organize events that promote creativity, leadership, and
                      start-up culture
                    </li>
                    <li>
                      Help students develop essential skills for
                      entrepreneurship
                    </li>
                    <li>
                      Offer a platform to nurture and refine innovative ideas
                    </li>
                  </ul>
                  <p className="mt-4">
                    AUSEC plays a key role in the CED chapter in Chennai,
                    helping young pioneers navigate the challenges of building
                    successful ventures.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInFromLeft}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <School className="mr-2 h-6 w-6 text-green-600" />
                    About CED
                  </CardTitle>
                </CardHeader>
                <CardContent>
                <p className="mb-4">
                    The Centre for Entrepreneurship Development (CED) at Anna University, founded in 2003, is a launchpad for student innovation, 
                    turning ideas into successful startups. Collaborating with EDII Tamil Nadu through a unique Hub & Spoke model, CED connects 
                    entrepreneurship cells across various institutions, from engineering to arts. Their flagship initiative, AUSEC, drives startup 
                    culture through events like ENANTRA, which empower students with hands-on training in design thinking, innovation, and entrepreneurship. 
                    This holistic approach has transformed graduates into dynamic entrepreneurs, creating a vibrant startup ecosystem across Tamil Nadu.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="mt-8 bg-secondary py-4 text-white">
        <div className="container mx-auto px-4 text-center text-xs">
          <p>
            &copy; 2024 Centre for Entrepreneurship Development, Anna
            University. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
