'use client';

import { useEffect, useState } from 'react';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu';

import { getCurStepDataInLocalStorage } from '@/lib/actions/checkLocalStorage';

import { NavLink } from '@/components/ui/NavLink/NavLink';
import { SurveySteps } from '@/lib/data/surveyData';

const navItems = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Contacts', link: '/contacts' },
  { label: 'Survey', link: '/survey' },
];

export const GlassNavigation = () => {
  const [curSurveyStep, setCurSurveyStep] = useState<SurveySteps>(0);

  useEffect(() => {
    const step = getCurStepDataInLocalStorage();
    setCurSurveyStep(step);
  }, []);

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
              const surveyLink = `${navItems[3].link}/${curSurveyStep}`;
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
