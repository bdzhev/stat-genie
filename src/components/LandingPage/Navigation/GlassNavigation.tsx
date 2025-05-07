import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu';

import { NavLink } from '@/components/ui/NavLink/NavLink';

export const GlassNavigationMenu = () => {
  return (
    <div className="sticky">
      <NavigationMenu className="rounded-2xl bg-white/5 backdrop-blur-sm shadow-lg px-6 py-3">
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
