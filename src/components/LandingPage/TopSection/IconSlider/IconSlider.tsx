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
    <div className="slider overflow-x-hidden max-w-screen">
      <div className="slide-track flex-nowrap gap-20 py-10 max-w-screen">
        {icons.map((icon, i) => (
          <div
            className={`slide h-25 border-4 border-lavender/30 p-4 rounded-full backdrop-blur-sm text-lavender`}
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
