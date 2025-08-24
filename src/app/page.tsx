import ThemeToggle from "@/components/ThemeToggle";

export default function page() {

  return (
    <div className="min-h-screen bg-[var(--background-color)] text-[var(--text-color)] transition-colors duration-200">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold underline mb-8">Hello World</h1>
        <ThemeToggle />
      </div>
    </div>
  )
}