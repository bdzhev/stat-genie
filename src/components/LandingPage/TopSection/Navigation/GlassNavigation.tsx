import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu';

import { NavLink } from '@/components/ui/NavLink/NavLink';

export const GlassNavigation = () => {
  return (
    <div className="sticky top-0">
      <NavigationMenu className="rounded-4xl bg-white/5 backdrop-blur-xs px-6 py-3">
        <NavigationMenuList className="flex space-x-6">

          <NavigationMenuItem>
            <NavLink link='/'>Home</NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink link='/about'>About</NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink link='/contacts'>Contacts</NavLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
