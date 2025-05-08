import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu';

import { NavLink } from '@/components/ui/NavLink/NavLink';

export const GlassNavigation = () => {
  return (
    <div className="sticky flex flex-row justify-center top-10 z-[1000] overflow-x-hidden">
      <NavigationMenu className="rounded-4xl border-1 border-lemon/5 bg-valhalla/80 backdrop-blur-sm px-6 py-3">
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
