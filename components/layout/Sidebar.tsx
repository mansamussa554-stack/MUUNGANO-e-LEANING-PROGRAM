"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-green-800 text-white min-h-screen p-6">

      <h1 className="text-2xl font-bold mb-8">
        MUUNGANO
      </h1>

      <nav className="space-y-3">

        <Link href="/student" className="block hover:bg-green-700 p-3 rounded">
          🏠 Dashboard
        </Link>

        <Link href="/courses" className="block hover:bg-green-700 p-3 rounded">
          📚 Courses
        </Link>

        <Link href="/lessons" className="block hover:bg-green-700 p-3 rounded">
          📖 Lessons
        </Link>

        <Link href="/quiz" className="block hover:bg-green-700 p-3 rounded">
          📝 Quiz
        </Link>

        <Link href="/certificates" className="block hover:bg-green-700 p-3 rounded">
          🏆 Certificates
        </Link>

        <Link href="/profile" className="block hover:bg-green-700 p-3 rounded">
          👤 Profile
        </Link>

        <Link href="/settings" className="block hover:bg-green-700 p-3 rounded">
          ⚙ Settings
        </Link>

      </nav>

    </aside>
  );
}