import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Header from "@/components/Header";
import HeaderSocials from "@/components/HeaderSocials";
import Hero from "@/components/Hero";
import { getExperience, getPageInfo, getProjects, getSkill, getReviews } from "@/sanity/sanity-utils";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import MyLogo from "../pictures/MyLogoGold.jpg"
import Image from "next/image";
import { PageInfo } from "@/types/PageInfo";
import { Experience } from "@/types/Experience";
import { Skill } from "@/types/Skill";
import { Project } from "@/types/Project";
import { Review } from "@/types/Review";

export default async function Home() {
  
  // Fetching information from Sanity
  let information: PageInfo[], experiences: Experience[], skills: Skill[], projects: Project[], reviews: Review[];
  
  try {
    information = await getPageInfo();
    experiences = await getExperience();
    skills = await getSkill();
    projects = await getProjects();
    reviews = await getReviews();
  } catch (error) {
    console.error('Error fetching data:', error);
    // Provide fallback empty arrays
    information = [];
    experiences = [];
    skills = [];
    projects = [];
    reviews = [];
  }
  
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
      <section id="workExperience" className="snap-center">
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

      {/* Reviews */}
      <section id="reviews" className="snap-center">
        <Reviews reviews={reviews} />
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
