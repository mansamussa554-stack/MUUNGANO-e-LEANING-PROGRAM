"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-800/90 backdrop-blur-md text-white z-50 shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}

        <div className="flex items-center gap-3">

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

        </div>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex gap-8 font-semibold">

          <li className="hover:text-yellow-300 cursor-pointer">Home</li>

          <li className="hover:text-yellow-300 cursor-pointer">About</li>

          <li className="hover:text-yellow-300 cursor-pointer">Modules</li>

          <li className="hover:text-yellow-300 cursor-pointer">Videos</li>

          <li className="hover:text-yellow-300 cursor-pointer">Quiz</li>

          <li className="hover:text-yellow-300 cursor-pointer">Certificates</li>

          <li className="hover:text-yellow-300 cursor-pointer">Contact</li>

        </ul>

        {/* Buttons */}

        <div className="hidden lg:flex gap-4">

          <button className="px-6 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
            Login
          </button>

          <button className="px-6 py-2 rounded-full border border-white hover:bg-white hover:text-green-700 font-bold">
            Register
          </button>

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

            <li>Home</li>

            <li>About</li>

            <li>Modules</li>

            <li>Videos</li>

            <li>Quiz</li>

            <li>Certificates</li>

            <li>Contact</li>

            <button className="w-full bg-yellow-500 py-3 rounded-full text-black font-bold mt-4">
              Login
            </button>

            <button className="w-full border py-3 rounded-full mt-3">
              Register
            </button>

          </ul>

        </div>

      )}

    </nav>
  );
}