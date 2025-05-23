import type { Route } from "./+types/home";
import HeroSection from "~/components/Home/HeroSection";
import { FloatingSkillsShowcase } from "~/components/ui/devsloka-ui/FloatingSkillsShowcase";
import { FloatingDots } from "~/components/ui/devsloka-ui/FloatingDots";
import { useTheme } from "~/components/theme-provider";
import ProjectSection from "~/components/Home/ProjectSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Adarsh" },
    { name: "description", content: "Welcome to Adarsh's PortFolio!" },
    {favicon:"/favicon.ico"},
  ];
}

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className="relative bg-background">
      <FloatingDots
        className="w-full h-full z-1"
        maxRadius={0.5}
        maxSpeed={0.8}
        minSpeed={0.1}
        color={theme === "dark" ? "white" : "black"}
      />
      <HeroSection />
      <FloatingSkillsShowcase />
      <ProjectSection/>
    </div>
  );
}
