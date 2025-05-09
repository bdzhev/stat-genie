import { GlassNavigation } from "@/components/LandingPage";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full gradient-anim">
      <GlassNavigation />
      {children}
    </div>
  );
}
