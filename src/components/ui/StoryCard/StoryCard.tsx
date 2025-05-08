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
    <div className={`${cardClasses} h-full flex flex-col gap-10 rounded-2xl bg-woodsmoke/50 border-lemon/5 border-1 backdrop-blur-sm flex flex-col overflow-hidden px-10 py-14`}>
      {(imagePath && imageAlt && (
        <Image src={imagePath} alt={imageAlt} width={32} height={32} />
      )) ||
        (hasPlaceholder && <div className="bg-accent min-h-20 max-h-60 rounded-sm"></div>)}
      <p className="text-lemon">{children}</p>
    </div>
  );
};
