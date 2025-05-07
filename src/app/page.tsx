import { GlassNavigationMenu } from "@/components/LandingPage/Navigation/GlassNavigation";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div id='layout' className="w-full h-full bg-black flex flex-column">
        <section id='top-section' className="w-full h-128 relative">
          <div id='top-section-bg' className="h-full w-full absolute">
            <BackgroundBeams/>
          </div>
          <div id='header-wrapper' className="pt-8">
            <header className="flex justify-center">
              <GlassNavigationMenu/>
            </header>
          </div>
        </section>
      </div>
    </main>
  );
}
