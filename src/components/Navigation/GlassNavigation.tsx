'use client';

import { useSessionData } from '../SessionProvider';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu';


import { NavLink } from '@/components/ui/NavLink/NavLink';

const navItems = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Contacts', link: '/contacts' },
  { label: 'Survey', link: '/survey' },
];

export const GlassNavigation = () => {
  const [userId, curStep] = useSessionData();

  return (
    <div className="sticky flex flex-row justify-center top-10 z-[1000] overflow-x-hidden">
      <NavigationMenu className="rounded-4xl border-1 border-lemon/5 bg-valhalla/80 backdrop-blur-sm px-6 py-3">
        <NavigationMenuList className="flex space-x-6">
          {navItems.map(({ label, link }, i) => {
            if (link !== '/survey') {
              return (
                <NavigationMenuItem key={i}>
                  <NavLink link={link}>{label}</NavLink>
                </NavigationMenuItem>
              );
            } else {
              const surveyLink = `${navItems[3].link}/${curStep}/?userId=${userId}`;
              return (
                <NavigationMenuItem key={i}>
                  <NavLink link={surveyLink}>{label}</NavLink>
                </NavigationMenuItem>
              );
            }
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
