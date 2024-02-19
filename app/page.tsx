import About from "@/components/About";
import WorkExperience from "@/components/Experience";
import ExperienceCard from "@/components/ExperienceCard";
import Header from "@/components/Header";
import HeaderSocials from "@/components/HeaderSocials";
import Hero from "@/components/Hero";
import { getExperience, getPageInfo, getSkill } from "@/sanity/sanity-utils";



export default async function Home() {
  const information = await getPageInfo();
  const experiences = await getExperience();
  const skills = await getSkill();
  //console.log(experiences)
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen w-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0  scrollbar-track--gray-400/20 scrollbar-thumb-[#f7ab0a]/80 " >

      {/* Header */}
        <Header>
          <HeaderSocials/>
        </Header>
        
      {/* Hero */}
        <section id="hero" className='snap-center'>
          <Hero />
        </section>

      {/* About */}
        <section id='about' className='snap-center'>
          {information.map((data) => (
              <About 
                key={data._id}
                backgroundInformation={data.backgroundInformation}
                profilePicture={data.images[0].url}
                slug={data.slug}
              />
          ))}
        </section>

      {/* Experience  */}
        <section id='about' className='snap-center'>
          <WorkExperience>
          {experiences.map((experience)=>(
            <ExperienceCard 
              key={experience._id}
              jobTitle={experience.jobTitle}
              //companyImage={experience.companyImage}
              company={experience.company}
              dateStarted={experience.dateStarted}
              dateEnded={experience.dateEnded}
              // isCurrentlyWorkingHere={experience.isCurrentlyWorkingHere}
              // points={experience.points}
              //technologies={experience.technologies}
            />
          ))}
            </WorkExperience>
        </section>
          
    </div>
  );
}
