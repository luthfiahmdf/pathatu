
import React, { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

type NavItem = {
  name: string;
  link: string;
};

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navlink: NavItem[] = [
    { name: "Beranda", link: "#link" },
    { name: "Tentang Kami", link: "#about" },
    { name: "Lokasi", link: "#location" },
    { name: "Kontak", link: "#kontak" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold">Pathatu</span>
          </div>

          {/* Toggle button for mobile menu */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navlink.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-base font-medium hover:underline underline-offset-4"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Overlay + Sidebar mobile nav */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Sidebar menu */}
          <div className="ml-auto w-3/4 max-w-xs bg-white dark:bg-zinc-900 shadow-xl h-full z-50 transform translate-x-0 transition-transform duration-300">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-bold">Navigasi</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <nav className="flex flex-col gap-4 p-4">
              {navlink.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium hover:text-orange-500 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

