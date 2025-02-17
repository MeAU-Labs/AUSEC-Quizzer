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
  Contact,
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
import { APP_NAME, APP_NAME_TAMIL } from "~/utils/constants";

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

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-b">
      <header className="bg-gray-600 py-2 text-white">
        <motion.section className="mb-0 flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-150%" }}
            transition={{
              repeat: Infinity,
              duration: 13,
              ease: "linear",
            }}
            className="flex whitespace-nowrap"
          >
            <span className="pb-4 text-2xl font-extrabold text-orange-500">
              PUTHULIR 2024 FINALS - Award winning ideas have been declared.{" "}
              {""}
              Check below to view the results.
            </span>
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
          <div className="mb-8 mt-4 flex justify-center">
            <div className="flex items-center space-x-4">
              {" "}
              {/* Changed to flex and added space-x-4 */}
              <div className="w-25 h-24 overflow-hidden rounded-lg shadow-lg">
                {" "}
                {/* Changed to rounded-lg */}
                <img
                  src="https://i.imgur.com/kXHaZGh.png"
                  alt="First Image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-25 h-24 overflow-hidden rounded-lg shadow-lg">
                {" "}
                {/* Changed to rounded-lg */}
                <img
                  src="Puthulir.jpg"
                  alt="Puthulir Image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-25 h-24 overflow-hidden rounded-lg shadow-lg">
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
          <motion.div className="mb-6 text-center" variants={fadeIn}>
            <h2 className="mb-6 text-6xl font-bold text-primary">
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
            <p className="mb-4 text-2xl text-muted-foreground">
              Igniting Young Minds, Cultivating Tomorrow&apos;s Innovators
            </p>

            <div className="mb-4 flex justify-center" id="state-results">
              <h1 className="text-md inline-block transform rounded-lg bg-orange-500 px-4 py-2 font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 md:text-lg">
                <a href="/finals-awards.pdf" target="_blank">
                  Award Winning Ideas of Puthulir 2024 Finals
                </a>
              </h1>
            </div>
          </motion.div>

          {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                {[
                  "State Board",
                  "IB-ICSE-IGCSE Board",
                  "Matric Board",
                  "CBSE Board",
                ].map((label, index) => {
                  const filePaths = [
                    "/SB_district.pdf",
                    "/IB-ICSE-IGCSE_district.pdf",
                    "/Matric_district.pdf",
                    "/CBSE_district.pdf",
                  ];
                  return (
                    <motion.button
                      key={index}
                      className="hover:bg-primary-dark w-48 transform rounded-lg bg-primary px-2 py-1 font-semibold text-white transition-transform hover:scale-105 focus:outline-none"
                      onClick={() => window.open(filePaths[index], "_blank")}
                      aria-label={`Download ${label} Results`}
                    >
                      {label}
                    </motion.button>
                  );
                })}
              </div> */}

          {/* <div className="mb-4 space-y-4 text-center"> */}
          {/* Quiz and Register Buttons */}
          {/* <motion.div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                <motion.button className="hover:bg-primary-dark w-48 rounded-lg bg-primary px-2 py-1 font-semibold text-white">
                  <a href="/quiz" className="block w-full">
                    Take the Quiz
                  </a>
                </motion.button>
                <motion.button className="hover:bg-primary-dark w-48 rounded-lg bg-primary px-2 py-1 font-semibold text-white">
                  <a
                    href={REGISTER_FORM_LINK}
                    target="_blank"
                    className="block w-full"
                  >
                    Register Now
                  </a>
                </motion.button>
              </motion.div> */}

          {/* Venue PDF Buttons */}
          {/* <motion.div
                className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0"
                {...fadeIn}
              >
                <motion.button
                  className="w-48 rounded-lg bg-primary px-2 py-1 font-semibold text-white"
                  onClick={() => window.open("/district_venue.pdf", "_blank")}
                >
                  District Venues
                </motion.button>
                <motion.button
                  className="w-48 rounded-lg bg-primary px-2 py-1 font-semibold text-white"
                  onClick={() => window.open("/district_poc.pdf", "_blank")}
                >
                  District Venue POCs
                </motion.button>
              </motion.div>  */}

          {/* Themes and Deadlines PDF */}
          {/* <motion.div className="flex justify-center" {...fadeIn}>
                <motion.button
                  className="w-48 rounded-lg bg-primary px-2 py-1 font-semibold text-white"
                  onClick={() => window.open("/themes.pdf", "_blank")}
                >
                  Themes and Deadlines
                </motion.button>
              </motion.div>
            </div>
          </motion.div> */}

          <div className="relative">
            <motion.section
              className="mb-8 flex flex-col items-center justify-center gap-8 px-4 md:flex-row"
              {...fadeIn}
            >
              <Card className="flex flex-col items-center gap-4 p-2 md:flex-row md:items-start">
                {/* Small Poster with Overlay Button */}
                <div className="relative w-48 flex-shrink-0">
                  <img
                    src="/poster.jpg"
                    alt="Event Poster"
                    className="w-full cursor-pointer transition-transform hover:scale-105"
                    onClick={handleOpen} // Open full poster on click
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={handleOpen}
                      className="rounded-lg bg-orange-500 px-3 py-1 font-semibold text-white transition-transform hover:scale-105"
                    >
                      View Poster
                    </button>
                  </div>
                </div>

                {/* Event Information */}
                <div className="mt-4 max-w-sm p-2 text-center text-sm text-gray-600 md:mt-0 md:text-left">
                  <p className="mt-4">
                    Hon'ble Minister for School Education Thiru Anbil Mahesh
                    Poyyamozhi released the logo of the Puthulir Event in his
                    chamber at Secretariat, 04-11-2024.
                  </p>
                  <p className="mt-2">
                    This logo is created out of the handwriting of Kalaignar M.
                    Karunanidhi, retrieved from letters to present Chief
                    Minister Thiru. M K Stalin on 28.11.1977, written from
                    Central Prison, Chennai, congratulating the birth of present
                    Deputy Chief Minister Thiru. Udhayanidhi Stalin.
                  </p>
                </div>
              </Card>
            </motion.section>

            {/* Full-size Poster Modal */}
            {isOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                <div className="relative mx-auto flex max-h-full max-w-full items-center justify-center overflow-hidden rounded-lg bg-white p-2 shadow-lg">
                  {/* Center the image within the modal */}
                  <img
                    src="/poster.jpg"
                    alt="Event Poster"
                    className="h-auto max-h-[90vh] w-auto max-w-[90vw] rounded-lg" // Use max dimensions to avoid overflow
                  />
                  <button
                    onClick={handleClose}
                    className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-gray-700"
                    aria-label="Close"
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="mb-8 flex flex-col items-center p-4">
              <h1 className="mb-2 text-xl font-bold text-primary md:text-2xl">
                District Venue Partners
              </h1>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                <div className="flex h-full items-center justify-center rounded-lg bg-white p-4 shadow-lg">
                  <img
                    src="./Partner1.jpg"
                    alt="KSR College of Engineering"
                    className="h-20 w-32 object-contain"
                  />
                </div>

                <div className="flex h-full items-center justify-center rounded-lg bg-white p-4 shadow-lg">
                  <img
                    src="./Partner2.jpg"
                    alt="Knowledge Institute of Technology"
                    className="h-20 w-32 object-contain"
                  />
                </div>

                <div className="flex h-full items-center justify-center rounded-lg bg-white p-4 shadow-lg">
                  <img
                    src="./Partner3.jpg"
                    alt="Prim Buds Garden"
                    className="h-20 w-32 object-contain"
                  />
                </div>

                <div className="flex h-full items-center justify-center rounded-lg bg-white p-4 shadow-lg">
                  <img
                    src="./Partner4.jpg"
                    alt="Sri Eshwar College of Engineering"
                    className="h-20 w-32 object-contain"
                  />
                </div>

                <div className="flex h-full items-center justify-center rounded-lg bg-white p-4 shadow-lg">
                  <img
                    src="./Partner5.jpg"
                    alt="Jeppiaar Institute of Technology"
                    className="h-20 w-32 object-contain"
                  />
                </div>

                <div className="flex h-full items-center justify-center rounded-lg bg-white p-4 shadow-lg">
                  <img
                    src="./Partner6.jpg"
                    alt="Vivekanandha Educational Institutions"
                    className="h-20 w-32 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

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

        <motion.section className="mb-12 mt-4 pt-5" {...fadeIn}>
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
                            className="bold text-red-600"
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
                      <div className="mb-4">
                        <strong>
                          16. What is required for the district rounds in terms
                          of team composition and mentor presence?
                        </strong>
                        <p>
                          Teams must be accompanied by a mentor. If a mentor
                          cannot attend, another faculty member or a parent may
                          accompany the team with authorization from the school
                          principal. All team members should ideally attend to
                          receive certificates.
                        </p>
                      </div>
                      <div className="mb-4">
                        <strong>
                          17. What materials do teams need to bring to the
                          district round presentation?
                        </strong>
                        <p>
                          Teams must prepare four mandatory slides covering the
                          problem statement, approach, use case, and solution. A
                          demo is optional. Presentations should be stored on a
                          pen drive, and teams can also have them accessible by
                          email.
                        </p>
                      </div>
                      <div className="mb-4">
                        <strong>
                          18. Are students required to wear a specific dress
                          code?
                        </strong>
                        <p>
                          Students are expected to be in school uniforms and
                          carry ID cards during district rounds.
                        </p>
                      </div>

                      <div className="mb-4">
                        <strong>
                          19. Is there an option for online participation?
                        </strong>
                        <p>
                          Online participation is not encouraged. If it is
                          necessary, the reason must be compelling, like a
                          health issue.
                        </p>
                      </div>

                      <div className="mb-4">
                        <strong>
                          20. Is accommodation provided at the venue?
                        </strong>
                        <p>
                          Accommodation can be arranged through the Venue Point
                          of Contact, but it is not mandatory.
                        </p>
                      </div>

                      <div className="mb-4">
                        <strong>
                          21. Are all teams who submitted presentations eligible
                          for the district rounds?
                        </strong>
                        <p>
                          Yes, every team that submitted the presentation is
                          eligible to attend the district round.
                        </p>
                      </div>

                      <div className="mb-4">
                        <strong>
                          22. What is the reporting time for the district event?
                        </strong>
                        <p>
                          The event is scheduled to start at 9:00 or 10:00 AM.
                          Teams should arrive early and check with the venue's
                          point of contact for logistics.
                        </p>
                      </div>

                      <div className="mb-4">
                        <strong>
                          23. What if a team or school did not receive a
                          confirmation letter?
                        </strong>
                        <p>
                          No individual confirmation letter is provided. The
                          list of eligible teams and event details are available
                          on the official group or the puthulir.com website.
                        </p>
                      </div>

                      <div className="mb-4">
                        <strong>
                          24. Can students present in a language of their
                          choice?
                        </strong>
                        <p>
                          Yes, presentations can be conducted in English, Tamil,
                          or a combination of both, depending on students’
                          comfort.
                        </p>
                      </div>

                      <div className="mb-4">
                        <strong>
                          25. Is it mandatory to bring a model along with the
                          presentation?
                        </strong>
                        <p>
                          Bringing a model is not mandatory; only the
                          presentation is required.
                        </p>
                      </div>

                      <div className="mb-4">
                        <strong>
                          26. What should mentors do during the event?
                        </strong>
                        <p>
                          Mentors need to sign the attendance sheet at the
                          venue, take a photograph of each presenting team with
                          the event banner in the background, and coordinate any
                          logistical issues.
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
        <Card className="mt-6 h-full">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Contact className="mr-2 h-6 w-6 text-red-600" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="font-semibold">For any queries, please contact:</p>
              <ul className="space-y-2">
                <li>
                  <strong>Sakthivel:</strong> +91 99440 85762
                </li>
                <li>
                  <strong>Sivakumar:</strong> +91 93666 55446
                </li>
                <li>
                  <strong>Vasanthan:</strong> +91 90473 73594
                </li>
                <li>
                  <strong>Rajkapoor:</strong> +91 95000 43581
                </li>
              </ul>
              <p className="font-semibold">For quiz-related problems:</p>
              <p>
                Kindly email us at:{" "}
                <a
                  href="mailto:puthulirausec@gmail.com"
                  className="text-red-600 underline"
                >
                  puthulirausec@gmail.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
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
