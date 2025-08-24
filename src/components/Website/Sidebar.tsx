"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FaHouse,
    FaRocket,
    FaCubes,
    FaBook,
    FaChevronRight,
    FaGithub,
    FaDiscord,
    FaTwitter,
    FaTable,
    FaAngleRight,
    FaTriangleExclamation,
    FaKeyboard,
    FaSquare,
    FaWindowMaximize,
    FaCaretDown,
    FaAngleLeft,
    FaDownload,
    FaPalette,
    FaMoon,
    FaTerminal,
    FaCode,
    FaFigma,
    FaClock,
    FaFile
} from "react-icons/fa6";

export default function Sidebar() {
    const pathname = usePathname();

    const getStartedItems = [
        { name: "Introduction", href: "/", icon: FaHouse },
        { name: "Documentation", href: "/docs", icon: FaBook },
        { name: "Theming", href: "/docs/theming", icon: FaPalette },
    ];

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

    const socialLinks = [
        { name: "GitHub", href: "https://github.com/saurav-tiwari03/MorphixUI", icon: FaGithub },
    ];

    const isActive = (href: string) => {
        console.log('href', href);
        console.log('pathname', pathname);
        console.log('pathname.startsWith(href)', pathname.startsWith(href));
        if (href === "/") {
            return pathname === "/";
        }
        return pathname === href;
    };

    return (
        <div className="sidebar w-64 pt-16 bg-[var(--background-color)] flex flex-col fixed bottom-0 left-0 h-screen overflow-y-auto scrollbar-hide">
            {/* Navigation */}
            <nav className="flex-1 p-4">
                {/* Get Started Section */}
                <div className="mb-8">
                    <h3 className="text-xs font-semibold text-[var(--text-color)]/50 uppercase tracking-wider mb-3">
                        Get Started
                    </h3>
                    <ul className="space-y-1">
                        {getStartedItems.map((item) => {
                            const Icon = item.icon;
                            const active = isActive(item.href);

                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${active
                                            ? "bg-[var(--text-color)]/10 text-[var(--text-color)] border-r-2 border-[var(--text-color)]"
                                            : "text-[var(--text-color)]/70 hover:text-[var(--text-color)] hover:bg-[var(--text-color)]/5"
                                            }`}
                                    >
                                        <Icon
                                            className={`w-4 h-4 ${active ? "text-[var(--text-color)]" : "text-[var(--text-color)]/50 group-hover:text-[var(--text-color)]"
                                                }`}
                                        />
                                        <span className="flex-1">{item.name}</span>
                                        {active && (
                                            <FaChevronRight className="w-3 h-3 text-[var(--text-color)]/50" />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Components Section */}
                <div className="mb-8">
                    <h3 className="text-xs font-semibold text-[var(--text-color)]/50 uppercase tracking-wider mb-3">
                        Components
                    </h3>
                    <ul className="space-y-1">
                        {components.map((item) => {
                            const active = isActive(item.href);

                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${active
                                            ? "bg-[var(--text-color)]/10 text-[var(--text-color)] border-r-2 border-[var(--text-color)]"
                                            : "text-[var(--text-color)]/70 hover:text-[var(--text-color)] hover:bg-[var(--text-color)]/5"
                                            }`}
                                    >
                                        <span className="flex-1">{item.name}</span> 
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-xs font-semibold text-[var(--text-color)]/50 uppercase tracking-wider mb-3">
                        Community
                    </h3>
                    <div className="space-y-1">
                        {socialLinks.map((item) => {
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--text-color)]/70 hover:text-[var(--text-color)] hover:bg-[var(--text-color)]/5 transition-all duration-200"
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-[var(--border-color)]">
                <div className="text-xs text-[var(--text-color)]/50 text-center">
                    <p>Made with ❤️ by</p>
                    <p className="font-medium text-[var(--text-color)]/70 mt-1">MorphixUI Team</p>
                </div>
            </div>
        </div>
    );
}