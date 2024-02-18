import About from "@/components/About";
import Header from "@/components/Header";
import HeaderSocials from "@/components/HeaderSocials";
import Hero from "@/components/Hero";
import { getPageInfo } from "@/sanity/sanity-utils";


export default async function Home() {
  const information = await getPageInfo();
  //console.log(information)
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

    </div>
  );
}
