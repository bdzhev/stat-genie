import { TopSection, CardsSection } from "@/components/LandingPage";
import { GlassNavigation } from "@/components/Navigation/GlassNavigation";

export default function Home() {
  return (
    <main className="min-h-screen w-full gradient-anim">
      <div id='layout' className="min-h-screen w-full flex flex-col">
        <GlassNavigation />
        <TopSection />
        <CardsSection />
      </div>
    </main>
  );
}
