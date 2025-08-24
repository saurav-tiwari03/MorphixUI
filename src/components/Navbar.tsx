"use client";

import { useTheme } from "@/components/ThemeProvider";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme(); // Fetching current theme and toggle function
  const [stars, setStars] = useState<number | null>(null); // State to store the star count

  useEffect(() => {
    // Fetch the star count from the GitHub API
    const fetchStarCount = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/saurav-tiwari03/MorphixUI"
        );
        const data = await response.json();
        setStars(data.stargazers_count); // Set the star count from GitHub response
      } catch (error) {
        console.error("Error fetching star count:", error);
      }
    };

    fetchStarCount();
  }, []); // Empty dependency array to fetch data once on mount

  return (
    <div className="flex items-center justify-between px-4 py-2">
      {/* Logo and Home Link */}
      <Link href="/" className="flex items-center gap-2">
        <img
          src={theme === "dark" ? "/white-logo.png" : "/black-logo.png"}
          alt="MorphixUI logo"
          width={50}
          height={50}
          className="transition-all"
        />
        <h1 className="text-2xl font-bold">MorphixUI</h1>
      </Link>

      <div className="flex items-center gap-4">
        {/* <div className="flex items-center gap-4">
          <span className="text-lg">{stars !== null ? <div className="flex items-center gap-2"><FaStar /> {stars}</div> : "Loading..."}</span>
        </div> */}

        <div className="flex items-center gap-2 border-2 p-1 rounded-md">
          {theme === "dark" ? (
            <button
              className="text-xl dark:text-white cursor-pointer"
              onClick={() => toggleTheme("light")}
            >
              <MdOutlineWbSunny />
            </button>
          ) : (
            <button
              className="text-xl text-black cursor-pointer"
              onClick={() => toggleTheme("dark")}
            >
              <IoMdMoon />
            </button>
          )}
        </div>
      </div>

    </div>
  );
}
