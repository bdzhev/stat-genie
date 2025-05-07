import { TopSection, ProblemSection } from "@/components/LandingPage";

export default function Home() {
  return (
    <main className="w-full min-h-screen ">
      <div id='layout' className="w-full min-h-screen flex flex-col bg-woodsmoke">
        <TopSection />
        <ProblemSection />
      </div>
    </main>
  );
}
