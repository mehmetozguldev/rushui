"use client";

import React from "react";
import { Header } from "@/components/header/Header";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Define an interface for sidebar items
interface SidebarItem {
  name: string;
  href: string;
}

// Create an array of sidebar items
const sidebarItems: SidebarItem[] = [
  { name: "Button", href: "/components/button" },
  { name: "Badge", href: "/components/badge" },
  { name: "Accordion", href: "/components/accordion" },
  { name: "Tabs", href: "/components/tabs" },
  { name: "Card", href: "/components/card" },
  { name: "Modal", href: "/components/modal" },
  { name: "Dropdown", href: "/components/dropdown" },
  { name: "Input", href: "/components/input" },
  { name: "Checkbox", href: "/components/checkbox" },
  { name: "Radio", href: "/components/radio" },
  { name: "Select", href: "/components/select" },
  { name: "Toggle", href: "/components/toggle" },
  { name: "Tooltip", href: "/components/tooltip" },
  { name: "Popover", href: "/components/popover" },
  { name: "Progress", href: "/components/progress" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <div>
      <Header />
      <div className="container flex items-start p-12 gap-12">
        <aside className="w-72">
          <nav className="flex flex-col gap-3">
            <h2 className="font-bold text-lg mb-4">Components</h2>
            {sidebarItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`hover:text-zinc-500 transition ${
                  router.pathname === item.href
                    ? "font-semibold text-blue-600"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
