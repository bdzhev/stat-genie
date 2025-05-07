import { StoryCard } from "@/components/ui/StoryCard/StoryCard";

export const ProblemSection = () => {
  return (
    <section className="flex-1 p-8">
      <div className="grid grid-rows-4 grid-cols-2 grid-flow-dense md:grid-cols-4 lg:grid-cols-6">
        <div className="row-span-2 col-span-2">
          <StoryCard hasPlaceholder>
            cool text
          </StoryCard>
        </div>

        <div className="row-span-1 col-span-2">
          <StoryCard>
            cool text
          </StoryCard>
        </div>

        <div className="row-span-1 col-span-2">
          <StoryCard>
            cool text
          </StoryCard>
        </div>

        <div className="row-span-1 col-span-2">
          <StoryCard>
            cool text
          </StoryCard>
        </div>

        <div className="row-span-2 col-span-2">
          <StoryCard>
            cool text
          </StoryCard>
        </div>

        <div className="row-span-2 col-span-2 md:col-span-2">
          <StoryCard hasPlaceholder>
            cool text
          </StoryCard>
        </div>
      </div>
    </section>
  );
};