import Image from 'next/image';
import { Background } from './Background/Background';

export const TopSection = () => {
  return (
    <section
      id="top-section"
      className="relative flex flex-col pt-10 justify-center pb-10 lg:pb-20"
    >
      <Background />
      <div id="hero" className='z-50 flex flex-cols justify-center'>
        {/* <h1 className='font-folies-b text-lemon'>sdfa</h1> */}
        <h2 className="text-5xl mt-20 mb-14 px-4 max-w-md text-lemon font-relic-can line-clamp-4 text-center md:mb-40 md:px-10 md:text-right md:text-6xl md:px-0 md:max-w-3xl lg:mb-30 lg:max-w-6xl lg:text-7xl">
          Simpler way to pick stats for your new adventurer
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
        </h2>
      </div>
    </section>
  );
};
