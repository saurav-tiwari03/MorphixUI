"use client";

import { useTheme } from "@/components/ThemeProvider";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import Link from "next/link";


export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-between px-4 py-2">
      <Link href="/" className="flex items-center">
        <img src={theme === "dark" ? "/white-logo.png" : "/black-logo.png"} alt="logo" width={50} height={100} />
        <h1 className="text-2xl font-bold">MorphixUI</h1>
      </Link>
      <div className="flex items-center gap-2 border-2 p-1 rounded-md">
        {
            theme === "dark" ? (
                <button className="text-xl dark:text-white cursor-pointer" onClick={() => toggleTheme("light")}><MdOutlineWbSunny/></button>
            ) : (
                <button className="text-xl text-black cursor-pointer" onClick={() => toggleTheme("dark")}><IoMdMoon/></button>
            )
        }
      </div>
    </div>
  )
}