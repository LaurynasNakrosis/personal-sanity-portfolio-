import Header from "@/components/Header";
import HeaderSocials from "@/components/HeaderSocials";
import Hero from "@/components/Hero";
import HeroImage from "@/components/HeroImge";
import Image from "next/image";

export default function Home() {
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

    </div>
  );
}
