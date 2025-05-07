import { GlassNavigation } from "@/components/LandingPage/TopSection/Navigation/GlassNavigation";
import Image from "next/image";

export const TopSection = () => {
  return (
    <section id='top-section' className="grow-1 relative flex justify-center px-10 pb-10 md:px-20 lg:px-40 lg:pb-20 custom-gradient">
      <div id='top-section-bg' className="h-full w-full absolute gradient-anim"> 
      </div>
      <div id='header-wrapper' className="pt-8 relative">
        <div className="flex justify-center relative">
          <GlassNavigation/>
        </div>
        <div id="hero" className="flex justify-center">
          <h1 className="text-5xl mt-20 mb-14 px-4 max-w-md text-lemon font-relic-can line-clamp-4 text-center md:text-6xl md:text-right md:px-12 md:max-w-2xl lg:max-w-4xl lg:text-7xl">
            Simpler way to pick stats for your new adventurer
            <span>
              {<Image className='inline align-middle h-14 md:h-16 lg:h-20' src={'/icons/sparkles.svg'} alt='Sparkles' width={72} height={48}/>}
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};
