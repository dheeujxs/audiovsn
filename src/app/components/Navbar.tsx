"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";


export default function Navbar() {
  return (
    <nav className="w-full bg-white/90 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-indigo-600">
          Audiovis
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-gray-700 hover:text-indigo-600 transition">
            Features
          </Link>
       
          <Link href="#about" className="text-gray-700 hover:text-indigo-600 transition">
            About
          </Link>
        </div>

        {/* Button */}
        <Button className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2">
            <Link href='/dashboard'>    Get Started</Link>
      
        </Button>
      </div>
    </nav>
  );
}
