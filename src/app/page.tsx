import { TopSection, CardsSection } from "@/components/LandingPage";
import { GlassNavigation } from "@/components/Navigation/GlassNavigation";

export default function Home() {
  return (
    <main className="min-h-screen w-full gradient-anim">
      <div id='layout' className="min-h-screen w-full flex flex-col">
        <GlassNavigation />
        <TopSection />
        <CardsSection />
        <div className="w-full justify-center flex flex-col px-90 py-20">
        </div>
      </div>
    </main>
  );
}
