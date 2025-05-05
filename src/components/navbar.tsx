
import { BookOpen, Menu } from "lucide-react";
import { Button } from "./ui/button";
import React from "react";

// Tipe untuk setiap item navigasi
type NavItem = {
  name: string;
  link: string;
};

export const Navbar: React.FC = () => {
  const navlink: NavItem[] = [
    { name: "Beranda", link: "#link" },
    { name: "Tentang Kami", link: "#about" },
    { name: "Lokasi", link: "#location" },
    { name: "Kontak", link: "#kontak" },
  ];

  return (
    <header className="sticky px-6 top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-orange-500" />
          <span className="text-xl font-bold">Pathatu</span>
        </div>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navlink.map((item: NavItem, index: number) => (
            <a
              key={index}
              href={item.link}
              className="text-basefont-medium hover:underline underline-offset-4"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

