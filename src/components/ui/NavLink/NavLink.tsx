import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { NavLinkProps } from './Navlink.types';

export const NavLink = (props: NavLinkProps) => {
  const { children, link } = props;

  return (
    <NavigationMenuLink 
      href={link}
      className="text-white transition-all hover:shadow-md hover:shadow-accent md:px-8 rounded-lg"
    >
      {children}
    </NavigationMenuLink>
  );
}
