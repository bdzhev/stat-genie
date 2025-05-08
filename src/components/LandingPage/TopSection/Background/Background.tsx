import { MagicFrog } from '@/components/ui/icons/MagicFrog/MagicFrog';
import { IconSlider } from '../IconSlider/IconSlider';

export const Background = () => {
  return (
    <div id="top-section-bg" className="h-full absolute w-full">
      <div className="z-1 absolute opacity-20 right-[10rem] top-0 h-[70rem] text-deep-purple md:right-0 md:left-0 md:top-20 md:h-[30rem] lg:h-[50rem] lg:left-auto lg:right-[45rem] lg:top-[-4rem]">
        <MagicFrog />
      </div>
      <div className="absolute bottom-0 w-full">
        <IconSlider />
      </div>
    </div>
  );
};
