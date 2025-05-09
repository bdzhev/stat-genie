import { StoryCardProps } from './StoryCard.types';
import Image from 'next/image';
import clsx from 'clsx';

const ImagePlaceholder = () => {
  return (
    <div className="bg-lemon/30 rounded-md min-h-20 max-h-60 min-h-40 p-2"/>
  )
};

export const StoryCard = (props: StoryCardProps) => {
  const {
    imagePath = null,
    imageAlt = null,
    children,
    hasBorder = false,
    hasPlaceholder = false,
    title,
  } = props;

  const cardClasses = clsx({
    'border-1': hasBorder,
    'border-granny-smith': hasBorder,
  });

  return (
    <div className={`${cardClasses} h-full flex flex-col gap-5 rounded-2xl bg-lemon/5 border-r-woodsmoke border-r-1 border-l-lemon/5 border-t-lemon/5 border-l-1 border-t-1 backdrop-blur-sm flex flex-col overflow-hidden px-10 py-14`}>
      {(imagePath && imageAlt && (
        <Image src={imagePath} alt={imageAlt} width={32} height={32} />
      )) ||
        (hasPlaceholder && <ImagePlaceholder/>)}
      <article>
        <h5 className="font-bold text-lemon text-xl mb-2">{title}</h5>
        <p className="text-lemon">{children}</p>
      </article>
    </div>
  );
};
