import { StoryCard } from "@/components/ui/StoryCard/StoryCard";

export const CardsSection = () => {
  return (
    <section className="z-50 flex-1 p-8 relative">
      <div className="grid gap-4 px-10 auto-rows-auto grid-cols-2 grid-flow-dense md:px-20 md:grid-cols-6 lg:px-40">
        <div className="row-span-2 col-span-2 md:col-span-4 md:row-span-2">
          <StoryCard hasPlaceholder>
            Hello, traveler! I heard it was you who wanted to join your friends TTRPG party, but met an unwelcomed foe along the way - the mighty Player's Handbook! No worry, friend, many were and many are in this situation and there are even some who gave up on creating their first macho-barbarian, nerdy wizard, or tabaxi-fighter-turned-bard or whatever.
          </StoryCard>
        </div>

        <div className="row-span-1 col-span-1 md:row-span-2 md:col-span-2">
          <StoryCard>
            So, what do I, the Great Developer of this page, might offer?
          </StoryCard>
        </div>

        <div className="row-span-1 col-span-1 md:row-span-1 md:col-span-6">
          <StoryCard>
            I present to you a little pet project of mine - the "StatWizard".
            So, the story is quite simple: I have designed (I am open to suggestions)
          </StoryCard>
        </div>

        <div className="row-span-2 col-span-2 md:col-span-2 md:row-span-1">
          <StoryCard>
            Step 1. Think (this is very important in general) of a character you would want to create:
            Is it a strong warrior, weak rogue, sexy wizard? In other words developer a strong concept of you hero.
          </StoryCard>
        </div>

        <div className="row-span-1 col-span-2 md:col-span-2 md:row-span-1">
          <StoryCard>
            Step 2. Answer the questions in the survey. If you don't have the time, you can always do it later, we save the results
            in a magical dimension called 'LocalStorage'
          </StoryCard>
        </div>

        <div className="row-span-1 col-span-2 md:col-span-2 md:col-span-2 md:row-span-1">
          <StoryCard hasPlaceholder>
            Step 3. Get your stats and ask your Game/Dungeon Master about what you should do next (Maybe GM wants you to level
            up your character to level 3, etc.) And finally, go roll some dice.
          </StoryCard>
        </div>
      </div>
    </section>
  );
};