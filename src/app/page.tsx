
import HeroSection from "@/components/Website/Home/HeroSection";

export default function page() {

  return (
    <div className="min-h-screen bg-[var(--background-color)] text-[var(--text-color)] transition-colors duration-200">
      <div className="">
        <HeroSection />
      </div>
    </div>
  )
}