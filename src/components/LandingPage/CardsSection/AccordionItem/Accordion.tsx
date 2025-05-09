import {
  AccordionContent,
  AccordionItem as AccItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  value: string;
}

export const AccordionItem = (props: AccordionProps) => {
  const {
    title,
    children,
    value,
  } = props;

  return (
    <AccItem value={value} className='font-mulish'>
      <AccordionTrigger className='text-lavender text-xl'>{title}</AccordionTrigger>
      <AccordionContent>
        {children}
      </AccordionContent>
    </AccItem>
  )
};
