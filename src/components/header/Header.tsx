import { User } from "lucide";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur dark:bg-zinc-900 dark:text-zinc-200 z-50 sticky top-0">
      <div className="container mx-auto flex justify-between items-center p-3">
        <div className="font-mono">
          <Link href="/">🏎️ rush/ui</Link>
        </div>
        <nav>
          <Link href="/">
            <button className="py-2 px-4 hover:bg-gray-100 rounded-lg text-sm transition font-medium">
              Home
            </button>
          </Link>
          <Link href="#">
            <button className="py-2 px-4 hover:bg-gray-100 rounded-lg text-sm transition font-medium">
              Components
            </button>
          </Link>
          <Link href="#">
            <button className="py-2 px-4 hover:bg-gray-100 rounded-lg text-sm transition font-medium">
              Docs
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
