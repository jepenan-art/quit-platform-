'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    // TODO: Implement actual logout logic
    router.push('/login');
  };

  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <Link href="/dashboard" className="font-bold text-xl hover:opacity-90 transition">
        Quit
      </Link>
      <div className="hidden md:flex gap-4">
        <Link
          href="/dashboard"
          className="px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Dashboard
        </Link>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}


