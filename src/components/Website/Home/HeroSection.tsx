import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function HeroSection() {
    return (
        <div className="bg-[var(--background-color)] text-[var(--text-color)] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 text-center">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                {/* Left Section: Text and Buttons */}
                <div className="flex flex-col items-center lg:items-start space-y-4 sm:space-y-6 w-full lg:w-1/2 text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                        React Component Library for Your Next Project
                    </div>
                    <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl">
                        MorphixUI provides sleek, customizable, and pre-built components that
                        help you speed up your development while building modern and responsive
                        user interfaces.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                        <Link
                            href="/getting-started"
                            className="bg-[var(--opposite-background-color)] flex items-center justify-center gap-2 border-2 border-[var(--border-color)] text-[var(--opposite-text-color)] py-2 px-6 rounded-lg text-base sm:text-lg transition-transform transform hover:scale-105 w-full sm:w-auto"
                        >
                            Get Started
                            <FaArrowRightLong className="-rotate-45"/>
                        </Link>
                        <a
                            href="https://github.com/saurav-tiwari03/MorphixUI"
                            className="bg-[var(--background-color)] flex items-center justify-center gap-2 border-2 border-[var(--border-color)] text-[var(--text-color)] py-2 px-6 rounded-lg text-base sm:text-lg transition-transform transform hover:scale-105 w-full sm:w-auto"
                        >
                            GitHub
                            <FaGithub />
                        </a>
                    </div>
                    <div>
                        <Link href='/components' className="border-b-1 border-dashed border-[var(--text-color)] pb-[2px]">Browse Components</Link>
                    </div>
                </div>

                {/* Right Section: Minimalist Signup Form */}
                <div className="w-full hidden lg:flex flex-col justify-center lg:w-1/2 p-4 sm:p-6 bg-[var(--background-color)] text-[var(--text-color)] rounded-lg shadow-lg border border-[var(--text-color)]/20 max-w-md mx-auto lg:mx-0">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Sign Up</h3>
                    <form className="space-y-3 sm:space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-2 sm:p-3 rounded-lg border border-[var(--text-color)]/30 bg-[var(--background-color)] text-[var(--text-color)] placeholder-[var(--text-color)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--text-color)]/40 focus:border-[var(--text-color)]/50 transition-all duration-200 text-sm sm:text-base"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-2 sm:p-3 rounded-lg border border-[var(--text-color)]/30 bg-[var(--background-color)] text-[var(--text-color)] placeholder-[var(--text-color)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--text-color)]/40 focus:border-[var(--text-color)]/50 transition-all duration-200 text-sm sm:text-base"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 sm:py-3 rounded-lg bg-[var(--text-color)] text-[var(--background-color)] font-semibold hover:bg-[var(--text-color)]/80 active:bg-[var(--text-color)]/90 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl text-sm sm:text-base"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
