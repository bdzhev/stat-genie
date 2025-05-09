import Image from 'next/image';
import { Background } from './Background/Background';

export const TopSection = () => {
  return (
    <section
      id="top-section"
      className="relative flex flex-col pb-20 justify-center mt-35 md:mt-40 lg:pb-20 lg:mt-50"
    >
      <Background />
      <div id="hero" className='z-50 flex flex-col justify-center mb-25 md:mb-40 md:px-10 lg:mb-30'>
        <h1 className="text-5xl mx-auto text-lemon font-relic-can text-center md:mr-0 md:text-right md:text-6xl md:px-20 lg:px-40 lg:max-w-5xl lg:text-7xl lg:mx-auto">
          StatGenie
          <span>
            {
              <Image
                className="inline align-middle h-14 md:h-16 lg:h-20"
                src={'/icons/sparkles.svg'}
                alt="Sparkles"
                width={48}
                height={48}
              />
            }
          </span>
        </h1>
        <article className='font-mulish max-w-lg mx-auto text-lavender text-center text-xl mt-2 line-clamp-2 px-20 md:text-right md:mr-0 lg:mx-auto lg:text-center'>
          Simplified, survey-based stat generator for new TTRPG players
        </article>
      </div>
    </section>
  );
};
