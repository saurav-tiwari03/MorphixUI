import Link from "next/link";


export default function page() {

    const components = [
        { name: "Accordion", href: "/docs/components/accordion" },
        { name: "Button", href: "/docs/components/button" },
        { name: "Input", href: "/docs/components/input" },
        { name: "Card", href: "/docs/components/card" },
        { name: "Modal", href: "/docs/components/modal" },
        { name: "Dropdown", href: "/docs/components/dropdown" },
        { name: "Table", href: "/docs/components/table" },
        { name: "Pagination", href: "/docs/components/pagination" },
        { name: "Alert", href: "/docs/components/alert" },
    ];

  return (
    <div className="min-h-screen pt-16 bg-[var(--background-color)] text-[var(--text-color)] transition-colors duration-200">
        <div className="flex flex-col mb-4">
            <h1 className="text-2xl font-bold">Components</h1>
            <p className="text-sm text-gray-500">Browse all the components available in MorphixUI.</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
            {components.map((component) => (
                <div key={component.name} className="hover:underline">
                    <Link href={component.href}>{component.name}</Link>
                </div>
            ))}
        </div>
    </div>
  )
}