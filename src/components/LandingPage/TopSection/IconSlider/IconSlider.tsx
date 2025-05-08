import {
  Dragon,
  D6,
  OrcHead,
  MountedKnight,
  MagicPotion,
  D20,
  D20_1,
  D12,
  Mimic,
} from '@/components/ui/icons';

const delays = ['0s', '0.5s', '1s', '1.5s', '2s', '2.5s'];

export const IconSlider = () => {
  const icons = [
    <D20_1 />,
    <Dragon />,
    <D6 />,
    <OrcHead />,
    <D12 />,
    <MountedKnight />,
    <Mimic />,
    <MagicPotion />,
    <D20 />,
  ];

  return (
    <div className="slider overflow-x-hidden">
      <div className="slide-track gap-10 flex-nowrap py-10 md:gap-20">
        {icons.map((icon, i) => (
          <div
            className={`slide h-15 rounded-full backdrop-blur-sm text-lavender md:h-25 md:p-4  md:border-4 md:border-lavender/30`}
            key={i}
            style={{ animationDelay: delays[i % delays.length] }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};
