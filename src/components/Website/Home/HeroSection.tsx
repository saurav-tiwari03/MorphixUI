"use client";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaEnvelope, FaLock, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";

export default function HeroSection() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => setIsLoading(false), 2000);
    };

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
                            <FaArrowRightLong className="-rotate-45" />
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
                        <Link href='/docs/components' className="border-b-1 border-dashed border-[var(--text-color)] pb-[2px]">Browse Components</Link>
                    </div>
                </div>

                {/* Right Section: Enhanced Login Form */}
                <div className="w-full hidden lg:flex flex-col justify-center lg:w-1/2 p-8 bg-[var(--background-color)] text-[var(--text-color)] rounded-xl shadow-2xl border border-[var(--text-color)]/20 max-w-md mx-auto lg:mx-0 backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h3 className="text-2xl text-start font-bold mb-3 bg-gradient-to-r from-[var(--text-color)] to-[var(--text-color)]/70 bg-clip-text text-transparent">
                                Login to your account
                            </h3>
                            <p className="text-sm text-[var(--text-color)]/70 leading-relaxed">
                                Enter your email below to login to your account.
                            </p>
                        </div>
                        <Link
                            href="/signup"
                            className="text-sm text-[var(--text-color)] hover:text-[var(--text-color)]/80 transition-colors duration-200 px-3 py-1 rounded-md hover:bg-[var(--text-color)]/10"
                        >
                            Sign Up
                        </Link>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-[var(--text-color)]/90 text-start">
                                Email
                            </label>
                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-color)]/50 text-sm" />
                                <input
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-[var(--text-color)]/30 bg-[var(--background-color)] text-[var(--text-color)] placeholder-[var(--text-color)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--text-color)]/40 focus:border-[var(--text-color)]/50 transition-all duration-300 hover:border-[var(--text-color)]/40"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="block text-sm font-medium text-[var(--text-color)]/90">
                                    Password
                                </label>
                                <Link
                                    href="/forgot-password"
                                    className="text-sm text-[var(--text-color)]/70 hover:text-[var(--text-color)] transition-colors duration-200"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                            <div className="relative">
                                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-color)]/50 text-sm" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    required
                                    className="w-full pl-10 pr-12 py-3 rounded-lg border border-[var(--text-color)]/30 bg-[var(--background-color)] text-[var(--text-color)] placeholder-[var(--text-color)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--text-color)]/40 focus:border-[var(--text-color)]/50 transition-all duration-300 hover:border-[var(--text-color)]/40"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--text-color)]/50 hover:text-[var(--text-color)]/80 transition-colors duration-200"
                                >
                                    {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4 pt-2">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3 rounded-lg bg-gradient-to-r from-[var(--text-color)]/20 to-[var(--text-color)]/30 text-[var(--text-color)] font-semibold hover:from-[var(--text-color)]/30 hover:to-[var(--text-color)]/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-4 h-4 border-2 border-[var(--text-color)]/30 border-t-[var(--text-color)] rounded-full animate-spin"></div>
                                        Logging in...
                                    </div>
                                ) : (
                                    "Login"
                                )}
                            </button>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-[var(--text-color)]/20"></div>
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-[var(--background-color)] px-2 text-[var(--text-color)]/50">Or continue with</span>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="w-full py-3 rounded-lg bg-[var(--background-color)] border-2 border-[var(--text-color)]/30 text-[var(--text-color)] font-medium hover:bg-[var(--text-color)]/10 hover:border-[var(--text-color)]/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                            >
                                <FaGoogle className="text-[var(--text-color)]/80" />
                                Login with Google
                            </button>
                        </div>

                        <div className="text-center pt-4">
                            <p className="text-xs text-[var(--text-color)]/60">
                                By logging in, you agree to our{" "}
                                <Link href="/terms" className="text-[var(--text-color)]/80 hover:underline">
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link href="/privacy" className="text-[var(--text-color)]/80 hover:underline">
                                    Privacy Policy
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
