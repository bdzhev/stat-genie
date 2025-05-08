import { MagicFrog } from '@/components/ui/icons/MagicFrog/MagicFrog';
import { IconSlider } from '../IconSlider/IconSlider';

export const Background = () => {
  return (
    <div id="top-section-bg" className="h-full absolute w-full">
      <div className="z-1 absolute opacity-20 left-0 top-20 hidden text-deep-purple md:block md:h-150 lg:h-220 lg:top-20">
        <MagicFrog />
      </div>
      <div className="hidden absolute bottom-0 md:block w-full">
        <IconSlider />
      </div>
    </div>
  );
};
