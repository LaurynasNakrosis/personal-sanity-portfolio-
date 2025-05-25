import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Header from "@/components/Header";
import HeaderSocials from "@/components/HeaderSocials";
import Hero from "@/components/Hero";
import { getExperience, getPageInfo, getProjects, getSkill } from "@/sanity/sanity-utils";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import MyLogo from "../pictures/MyLogoGold.jpg"
import Image from "next/image";
export default async function Home() {
  
  // Fetching information from Sanity
  const information = await getPageInfo();
  const experiences = await getExperience();
  const skills = await getSkill();
  const projects = await getProjects();
//blah blah blah
  // Rendering the home page components
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen w-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 " >
      {/* Header */}
      <Header>
        <HeaderSocials/>
      </Header>
        
      {/* Hero section */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About section */}
      <section id="about" className="snap-center">
        {/* Mapping over information to render About component */}
        <About information={information} />
      </section>

      {/* Experience section */}
      <section id="about" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills section */}
      <section id="skills" className="snap-center">
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contactme" className="snap-center">
        <ContactMe />
      </section>

      
      <footer className="sticky bottom-[65px] sm:bottom-5 w-full cursor-pointer z-50 ">
        <div className="flex flex-col items-center justify-center">
        <Link href="#hero">
          <Image 
          className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
          src={MyLogo} 
          alt="" />
        </Link>
          <p className=" text-gray-500 text-[10px]">Home</p>
        </div>
        
      </footer>
      
    </div>
  );
}
