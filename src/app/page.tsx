import { TopSection, ProblemSection, GlassNavigation } from "@/components/LandingPage";

export default function Home() {
  return (
    <main className="min-h-screen w-full gradient-anim">
      <div id='layout' className="min-h-screen w-full flex flex-col">
        <GlassNavigation />
        <TopSection />
        <ProblemSection />
      </div>
    </main>
  );
}
