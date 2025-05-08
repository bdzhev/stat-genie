import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { NavLinkProps } from './Navlink.types';

const baseClass = `
  bg-transparent border-transparent border-1 
  hover:bg-transparent px-4 rounded-2xl text-lemon 
  transition-all hover:border-1 hover:shadow-lemon 
  hover:border-lemon hover:shadow-sm hover:text-lemon 
  md:px-8 focus:bg-lemon focus:text-deep-purple
`;

export const NavLink = (props: NavLinkProps) => {
  const { children, link } = props;

  return (
    <NavigationMenuLink href={link} className={baseClass}>
      {children}
    </NavigationMenuLink>
  );
};
