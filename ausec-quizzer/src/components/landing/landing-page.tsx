"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Award,
  BookOpen,
  Briefcase,
  Building,
  Calendar,
  ChevronDown,
  ChevronRight,
  Cpu,
  GraduationCap,
  Heart,
  Home,
  Leaf,
  Lightbulb,
  MapPin,
  Palette,
  Recycle,
  Rocket,
  School,
  ShieldQuestion,
  Sparkles,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  APP_NAME,
  APP_NAME_TAMIL,
  REGISTER_FORM_LINK,
} from "~/utils/constants";

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

  const [showAll, setShowAll] = useState(false);
  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  const fadeInFromLeft = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b">
      <header className="bg-gray-600 py-4 text-white">
        <motion.section className="mb-0 flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-150%" }}
            transition={{
              repeat: Infinity,
              duration: 7,
              ease: "linear",
            }}
            className="whitespace-nowrap"
          >
            <p className="pb-4 text-2xl font-extrabold text-orange-500">
              Registrations extended till 4th November 2024
            </p>
          </motion.div>
        </motion.section>
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
          <div>
            <div className="mb-4 flex justify-center">
              <div className="flex items-center space-x-4">
                {" "}
                {/* Changed to flex and added space-x-4 */}
                <div className="w-25 h-24 overflow-hidden rounded-lg border border-gray-300">
                  {" "}
                  {/* Changed to rounded-lg */}
                  <img
                    src="https://i.imgur.com/kXHaZGh.png"
                    alt="First Image"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-25 h-24 overflow-hidden rounded-lg border border-gray-300">
                  {" "}
                  {/* Changed to rounded-lg */}
                  <img
                    src="https://i.imgur.com/PcMxZbD.png"
                    alt="Second Image"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <motion.div className="mb-8 text-center" variants={fadeIn}>
            <h2 className="mb-4 text-6xl font-bold text-primary">
              <Typewriter
                words={[APP_NAME, APP_NAME_TAMIL]}
                loop={-1}
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
                cursor
                cursorBlinking
              />
            </h2>
            <p className="mb-6 text-2xl text-muted-foreground">
              Igniting Young Minds, Cultivating Tomorrow&apos;s Innovators
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button>
                <a
                  href="/quiz"
                  className="hover:bg-primary-dark rounded-lg bg-primary px-4 py-2 font-semibold text-white"
                >
                  Take the Quiz
                </a>
              </motion.button>
              <motion.button>
                <a
                  href={REGISTER_FORM_LINK}
                  target="_blank"
                  className="rounded-lg bg-primary px-4 py-2 font-semibold text-white"
                >
                  Register Now
                </a>
              </motion.button>
            </div>
          </motion.div>
          <motion.section
            className="mb-12 flex items-center justify-center"
            {...fadeIn}
          >
            <Card>
              <a
                className="rounded-lg bg-primary px-4 py-2 font-semibold text-white"
                href="/themes.pdf"
                target="_blank"
              >
                <strong>Themes and Deadlines</strong>
              </a>
            </Card>
          </motion.section>
          <motion.div
            className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3"
            variants={staggerChildren}
          >
            <motion.div
              className="flex flex-col items-center rounded-lg bg-secondary p-6 shadow-md"
              variants={fadeInFromLeft}
            >
              <Sparkles className="mb-4 h-12 w-12 text-yellow-500" />
              <h3 className="mb-2 text-center text-xl font-semibold">
                School Innovation and Ideation Challenge
              </h3>
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

        <motion.section
          className="mb-12 flex items-center justify-center"
          {...fadeIn}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-orange-500">
                Event Flowchart
              </CardTitle>
            </CardHeader>
            <CardContent className="flex h-full items-center justify-center">
              <img
                src="/flowchart.png"
                alt="Event Flowchart"
                className="h-[90%] w-[90%] object-contain"
              />
            </CardContent>
          </Card>
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
          <Card className="border-orange-500 bg-secondary text-black">
            <CardHeader>
              <CardTitle className="text-orange-500">Eligibility</CardTitle>
              <CardDescription>
                Who can participate in {APP_NAME}?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Students from State Board, Matriculation, CBSE, IB, and
                ICSE/IGCSE schools across Tamil Nadu, from grades 8 to 12, are
                eligible.
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
              <Card className="h-full rounded-lg bg-red-700 p-4 text-white shadow">
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
              <Card className="h-full rounded-lg bg-green-700 p-4 text-white shadow">
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
              <Card className="h-full rounded-lg bg-blue-700 p-4 text-white shadow">
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
              <Card className="h-full rounded-lg bg-purple-800 p-4 text-white shadow">
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
              <Card className="h-full rounded-lg bg-yellow-500 p-4 text-white shadow">
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
              <Card className="h-full rounded-lg bg-indigo-600 p-4 text-white shadow">
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
              <Card className="h-full rounded-lg bg-orange-600 p-4 text-white shadow">
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
                  className="rounded-lg bg-blue-800 p-4 shadow"
                  variants={fadeInFromLeft}
                >
                  <h4 className="mb-2 flex items-center font-semibold text-white">
                    <Recycle className="mr-2 h-5 w-5 text-blue-600" />
                    Innovative Solutions for Local Problems
                  </h4>
                  <p className="text-white">
                    Focus on solving local community issues such as waste
                    management, water conservation, sustainable agriculture,
                    etc.
                  </p>
                </motion.li>
                <motion.li
                  className="rounded-lg bg-green-700 p-4 shadow"
                  variants={fadeInFromLeft}
                >
                  <h4 className="mb-2 flex items-center font-semibold text-white">
                    <Cpu className="mr-2 h-5 w-5 text-green-600" />
                    Tech & Innovation Challenge
                  </h4>
                  <p className="text-white">
                    Develop tech-based solutions, apps, or products tied to
                    current trends like AI, machine learning, or robotics.
                  </p>
                </motion.li>
                <motion.li
                  className="rounded-lg bg-yellow-600 p-4 shadow"
                  variants={fadeInFromLeft}
                >
                  <h4 className="mb-2 flex items-center font-semibold text-white">
                    <Leaf className="mr-2 h-5 w-5 text-yellow-500" />
                    Sustainability Startup Challenge
                  </h4>
                  <p className="text-white">
                    Create startups focused on sustainability, eco-friendly
                    solutions, and green technology.
                  </p>
                </motion.li>
                <motion.li
                  className="rounded-lg bg-red-700 p-4 shadow"
                  variants={fadeInFromLeft}
                >
                  <h4 className="mb-2 flex items-center font-semibold text-white">
                    <Atom className="mr-2 h-5 w-5 text-red-600" />
                    STEM-Based Business Challenge
                  </h4>
                  <p className="text-white">
                    Build innovative startups in sectors like health tech,
                    edtech, or agri-tech using STEM principles.
                  </p>
                </motion.li>
                <motion.li
                  className="rounded-lg bg-purple-800 p-4 shadow"
                  variants={fadeInFromLeft}
                >
                  <h4 className="mb-2 flex items-center font-semibold text-white">
                    <Palette className="mr-2 h-5 w-5 text-purple-600" />
                    Creative Arts and Media Startups
                  </h4>
                  <p className="text-white">
                    Develop startups in fields like digital marketing, design
                    services, or content creation.
                  </p>
                </motion.li>
                <motion.li
                  className="rounded-lg bg-orange-500 p-4 shadow"
                  variants={fadeInFromLeft}
                >
                  <h4 className="mb-2 flex items-center font-semibold text-white">
                    <Heart className="mr-2 h-5 w-5 text-orange-600" />
                    Health and Wellness Startup Competition
                  </h4>
                  <p className="text-white">
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
                    <a
                      href="http://auced.com/"
                      className="inline-flex items-center font-medium text-black hover:underline dark:text-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      About CED
                      <svg
                        className="ml-2 h-4 w-4 text-blue-600 dark:text-blue-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The Centre for Entrepreneurship Development (CED) at Anna
                    University, founded in 2003, is a launchpad for student
                    innovation, turning ideas into successful startups.
                    Collaborating with EDII Tamil Nadu through a unique Hub &
                    Spoke model, CED connects entrepreneurship cells across
                    various institutions, from engineering to arts. Their
                    flagship initiative, AUSEC, drives startup culture through
                    events like ENANTRA, which empower students with hands-on
                    training in design thinking, innovation, and
                    entrepreneurship. This holistic approach has transformed
                    graduates into dynamic entrepreneurs, creating a vibrant
                    startup ecosystem across Tamil Nadu.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>
        <motion.div variants={fadeInFromLeft}>
          <Card className="mt-6 h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Home className="mr-2 h-6 w-6 text-red-600" />
                District Venue Partner
              </CardTitle>
            </CardHeader>
            <CardContent>
              {" "}
              {/* Reduced bottom padding */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Left Half - Text */}
                <div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Inviting Schools & Colleges to grab the opportunity to serve
                    as District Venue Partner
                  </h3>
                  <p className="mb-4">
                    Cost to host: ₹50,000 for schools and ₹1,00,000 for
                    colleges.
                  </p>
                  <h4 className="text-md mb-2 font-semibold">Criteria:</h4>
                  <ul className="mb-4 list-inside list-disc">
                    <li>Provision of Halls</li>
                    <li>Canteen Facilities</li>
                    <li>Other basic amenities</li>
                    <li>Hospitality for Organising Team of up to 5 members</li>
                  </ul>
                  <p className="font-bold">
                    Nov 6, 7, 8, 2024 - District level selection will take
                    place.
                  </p>
                  <br></br>
                  <p className="mb-4">
                    For Queries, please write to{" "}
                    <a
                      href="mailto:cedau.outreach@gmail.com"
                      className="text-blue-600"
                    >
                      cedau.outreach@gmail.com
                    </a>
                  </p>
                </div>

                {/* Right Half - QR Code Image */}
                <div className="mt-[-2rem] flex items-start justify-center">
                  <img
                    src="https://i.imgur.com/kajcAZP.jpeg" // Replace with actual QR code link
                    alt="QR Code"
                    className="h-auto max-h-[80%] w-3/4 object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.section className="mb-12 pt-5" {...fadeIn}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
            <motion.div variants={fadeInFromLeft}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShieldQuestion className="mr-2 h-6 w-6 text-red-600" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-5">
                  {/* FAQ Questions */}
                  <div className="mb-4">
                    <strong>
                      1. Who can participate in the Puthulir – TN Innovation and
                      Ideation Challenge?
                    </strong>
                    <p>
                      Students from Tamil Nadu schools in classes 8th to 12th
                      are eligible to participate.
                    </p>
                  </div>
                  <div className="mb-4">
                    <strong>2. How many students can form a team?</strong>
                    <p>A team can have a maximum of 3 students.</p>
                  </div>
                  <div className={showAll ? "mb-4" : "mb-0"}>
                    <strong>3. Is there a registration fee?</strong>
                    <p>
                      There are no registration charges for Government and
                      Government Aided Schools.
                    </p>
                  </div>
                  {showAll && (
                    <>
                      <div className="mb-4">
                        <strong>
                          4. How do we register for the challenge?
                        </strong>
                        <p>
                          Teams can register using the link{" "}
                          <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfUD8icLkB3UUhivl0mEAmTcYbREjhegYxPo1fU1eLvI-EQjQ/viewform"
                            className="bold text-blue-600"
                          >
                            Registration Form
                          </a>
                          .
                        </p>
                      </div>
                      <div className="mb-4">
                        <strong>5. What happens after registration?</strong>
                        <p>
                          After registering, teams will attend a quiz on
                          innovation and startups.
                        </p>
                      </div>
                      <div className="mb-4">
                        <strong>
                          6. What information do we receive after the quiz?
                        </strong>
                        <p>
                          Teams will receive an email with their Team ID, a
                          problem template, a problem submission link, and
                          necessary instructions for submitting the problem.
                        </p>
                      </div>
                      <div className="mb-4">
                        <strong>
                          7. What is the next step after submitting the problem?
                        </strong>
                        <p>
                          Upon selection, teams will receive an email with an
                          idea template and venue details to attend the
                          district-level competition.
                        </p>
                      </div>
                      <div className="mb-4">
                        <strong>
                          8. What happens at the district-level competition?
                        </strong>
                        <p>
                          Selected teams will present their problem and solution
                          (idea) in front of a jury panel at their respective
                          venue.
                        </p>
                      </div>
                      <div className="mb-4">
                        <strong>
                          9. What happens if our team is selected at the
                          district level?
                        </strong>
                        <p>
                          Selected teams will receive an email to attend an
                          online business mentoring session.
                        </p>
                      </div>
                      <div className="mb-4">
                        <strong>
                          10. What is the final stage of the competition?
                        </strong>
                        <p>
                          Selected teams will attend the finale at Anna
                          University, Chennai, and present their innovative
                          ideas as a visual prototype/model. An actual
                          prototype/MVP is not needed.
                        </p>
                      </div>
                      <div className="mb-4">
                        <strong>
                          11. Are there any awards for the best ideas?
                        </strong>
                        <p>
                          Yes, the best innovative ideas will receive cash
                          awards and prototyping opportunities from the Centre
                          for Entrepreneurship Development (CED), Anna
                          University.
                        </p>
                      </div>
                      <div className="mb-4">
                        <strong>12. Is the mentoring session mandatory?</strong>
                        <p>
                          Yes, the business mentoring session is mandatory for
                          the selected teams as it helps them refine their ideas
                          and presentation.
                        </p>
                      </div>
                      <div className="mb-4">
                        <strong>
                          13. What should we prepare for the finale
                          presentation?
                        </strong>
                        <p>
                          Teams should prepare a visual prototype/model to
                          present their innovative ideas. An actual prototype or
                          Minimum Viable Product (MVP) is not required.
                        </p>
                      </div>
                      <div className="mb-4">
                        <strong>
                          14. Who organizes the Puthulir – TN Innovation and
                          Ideation Challenge?
                        </strong>
                        <p>
                          The challenge is organized by the Centre for
                          Entrepreneurship Development, Anna University.
                        </p>
                      </div>
                      <div className="mb-4">
                        <strong>
                          15. Can students from private schools participate in
                          the challenge?
                        </strong>
                        <p>
                          Yes, students from private schools can participate,
                          but registration charges may apply.
                        </p>
                      </div>
                    </>
                  )}
                </CardContent>
                <div className="mt-4 flex justify-center pb-5">
                  <button
                    className="flex items-center text-red-600 transition-colors hover:text-gray-800"
                    onClick={handleToggle}
                  >
                    <span className="flex items-center">
                      <ChevronDown className="mr-2 h-6 w-6 text-red-600 transition-transform duration-300" />
                      {showAll ? "Show less" : "Show more"}
                    </span>
                  </button>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="mt-8 bg-gray-600 py-4 text-white">
        <div className="container mx-auto px-4 text-center text-xs">
          <p>
            &copy; 2024 Centre for Entrepreneurship Development, Anna
            University. All rights reserved. <br></br>
            <a
              href="https://github.com/Primer-Labs?view_as=public"
              className="inline-flex items-center font-medium text-white hover:underline dark:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developed by Primer-Labs
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
