"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-800/90 backdrop-blur-md text-white z-50 shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/images/logo.png"
            alt="Logo"
            width={55}
            height={55}
          />

          <div>

            <h1 className="font-bold text-lg">
              MUUNGANO
            </h1>

            <p className="text-xs text-green-100">
              E-Learning Platform
            </p>

          </div>

        </Link>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex gap-8 font-semibold">

          <li><Link href="/">Home</Link></li>

          <li><Link href="/about">About</Link></li>

          <li><Link href="/courses">Modules</Link></li>

          <li><Link href="/videos">Videos</Link></li>

          <li><Link href="/quiz">Quiz</Link></li>

          <li><Link href="/certificate">Certificates</Link></li>

          <li><Link href="/contact">Contact</Link></li>

        </ul>

        {/* Buttons */}

        <div className="hidden lg:flex gap-4">

          <Link
            href="/login"
            className="px-6 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-6 py-2 rounded-full border border-white hover:bg-white hover:text-green-700 font-bold"
          >
            Register
          </Link>

        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={34} /> : <Menu size={34} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="lg:hidden bg-green-900 px-6 py-6">

          <ul className="space-y-5">

            <li><Link href="/">Home</Link></li>

            <li><Link href="/about">About</Link></li>

            <li><Link href="/courses">Modules</Link></li>

            <li><Link href="/videos">Videos</Link></li>

            <li><Link href="/quiz">Quiz</Link></li>

            <li><Link href="/certificate">Certificates</Link></li>

            <li><Link href="/contact">Contact</Link></li>

            <Link
              href="/login"
              className="block w-full bg-yellow-500 py-3 rounded-full text-center text-black font-bold mt-4"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="block w-full border py-3 rounded-full text-center mt-3"
            >
              Register
            </Link>

          </ul>

        </div>

      )}

    </nav>
  );
}