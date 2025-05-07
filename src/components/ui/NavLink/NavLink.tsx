import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { NavLinkProps } from './Navlink.types';

export const NavLink = (props: NavLinkProps) => {
  const { children, link } = props;

  return (
    <NavigationMenuLink 
      href={link}
      className="bg-transparent border-transparent border-1 hover:bg-transparent px-4 rounded-2xl text-lavender transition-all hover:border-1 hover:shadow-lemon hover:border-lemon hover:shadow-sm hover:text-lemon md:px-8"
    >
      {children}
    </NavigationMenuLink>
  );
}
