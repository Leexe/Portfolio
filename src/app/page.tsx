import { HeroSection } from "@/components/Hero/Hero"
import { ProjectSection } from "@/components/Projects/projects"

export default function Home() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <ProjectSection />
        </div>
    )
}