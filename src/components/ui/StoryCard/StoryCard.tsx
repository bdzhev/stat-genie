import { StoryCardProps } from './StoryCard.types';
import Image from 'next/image';
import clsx from 'clsx';

export const StoryCard = (props: StoryCardProps) => {
  const {
    imagePath = null,
    imageAlt = null,
    children,
    hasBorder = false,
    hasPlaceholder = false,
  } = props;

  const cardClasses = clsx({
    'border-1': hasBorder,
    'border-granny-smith': hasBorder,
  });

  return (
    <div className={`${cardClasses} min-h-32 rounded-sm bg-granny-smith/50 backdrop-blur-lg flex flex-col overflow-hidden px-6 py-8`}>
      {(imagePath && imageAlt && (
        <Image src={imagePath} alt={imageAlt} width={32} height={32} />
      )) ||
        (hasPlaceholder && <div className="bg-accent w-full h-20 rounded-sm"></div>)}
      <p className="text-lemon">{children}</p>
    </div>
  );
};
