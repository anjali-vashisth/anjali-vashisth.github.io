"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Award,
  BookOpen,
  Briefcase,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/achievements", label: "Achievements", icon: Award },
  { href: "/research", label: "Research & Projects", icon: BookOpen },
  { href: "/career", label: "Career", icon: Briefcase },
  { href: "/side-works", label: "Side Works", icon: Sparkles },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-secondary p-2 rounded-lg text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative h-screen w-64 bg-gradient-to-b from-light via-primary to-light border-r border-secondary/20 transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-8">
          {/* Logo */}
          <Link href="/" className="block mb-12">
            <div className="text-3xl font-bold gradient-text">AV</div>
            <p className="text-xs text-secondary mt-2">Portfolio</p>
          </Link>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-secondary to-accent text-white shadow-lg"
                      : "text-secondary/70 hover:bg-secondary/10"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-xs text-secondary/60 mb-4">Connect with me</p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/anjalivash19231"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 text-secondary hover:text-accent transition-all"
                title="LinkedIn"
              >
                in
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 text-secondary hover:text-accent transition-all"
                title="GitHub"
              >
                gh
              </a>
              <a
                href="https://instagram.com/anjali__vashisth"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 text-secondary hover:text-accent transition-all"
                title="Instagram"
              >
                ig
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
