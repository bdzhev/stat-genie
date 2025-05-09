import { Accordion } from '@/components/ui/accordion';
import { StoryCard } from '@/components/ui/StoryCard/StoryCard';
import { AccordionItem } from './AccordionItem/Accordion';

export const CardsSection = () => {
  return (
    <section className="z-50 flex-1 px-20 relative lg:px-40">
      <div className="grid gap-4 auto-rows-auto grid-cols-3 grid-flow-dense md:grid-cols-6 ">
        <div className="row-span-2 col-span-3 md:col-span-4 md:row-span-4">
          <StoryCard hasPlaceholder title={'Hello, traveler!'}>
            <>
              I heard it was you who wanted to join your friends TTRPG party,
              but met an unwelcomed foe along the way - the mighty Player's
              Handbook! No worry, friend, many were and many are in this
              situation and there are even some who gave up on creating their
              first macho-barbarian, nerdy wizard, or tabaxi-fighter-turned-bard
              or whatever.
              <br />
              So, what do I, the Great Developer of this page, might offer, and
              what, do YOU, the visitor of this website should do if you wish to
              generate stats for your new character in the easiest way?
            </>
          </StoryCard>
        </div>

        <div className="row-span-1 col-span-1 md:row-span-2 md:col-span-2">
          <StoryCard>Put some image or something here</StoryCard>
        </div>

        <div className="row-span-1 col-span-1 md:row-span-2 md:col-span-2">
          <StoryCard>Put some image or something here</StoryCard>
        </div>
      </div>
      <div className="py-20" id="dropdown-section">
        <h3 className="font-relic-can text-lavender text-center text-3xl lg:text-5xl">
          The 3 main steps
        </h3>
        <Accordion type="single" collapsible>
          <AccordionItem title="Step 1" value="step-1-data">
            Think (this is very important in general) of a character you would
            want to create: Is it a strong warrior, weak rogue, sexy wizard? In
            other words developer a strong concept of you hero.
          </AccordionItem>
          <AccordionItem title="Step 2" value="step-2-data">
            Fill and submit the survey as if you were, essentially, your
            character. If, for some reason, you are interrupted on your
            survey-filling-quest, you can always finish the form later, but make
            sure to continue filling via the same device and browser, because we
            save the results in a magical dimension called 'LocalStorage'
          </AccordionItem>
          <AccordionItem title="Step 3" value="step-3-data">
            Get your stats and ask your Game/Dungeon Master about what you
            should do next (Maybe GM wants you to level up your character to
            level 3, etc.) And finally, go roll some dice.
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
