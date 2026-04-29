"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Award,
  BookOpen,
  Briefcase,
  Github,
  Home,
  Instagram,
  Linkedin,
  Menu,
  Sparkles,
  TerminalSquare,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home", icon: Home, code: "00" },
  { href: "/achievements", label: "Achievements", icon: Award, code: "01" },
  { href: "/research", label: "Research", icon: BookOpen, code: "02" },
  { href: "/career", label: "Career", icon: Briefcase, code: "03" },
  { href: "/side-works", label: "Side Works", icon: Sparkles, code: "04" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/anjalivashisth",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://github.com/AnjaliVash",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://instagram.com/anjali__vashisth",
    label: "Instagram",
    icon: Instagram,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="fixed left-4 top-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-md border border-amber-300/30 bg-stone-950/90 text-amber-100 shadow-lg backdrop-blur md:hidden"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-stone-800 bg-[#080b0f]/95 shadow-2xl shadow-black/40 backdrop-blur-xl transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex min-h-0 flex-1 flex-col p-5">
          <Link
            href="/"
            className="group rounded-lg border border-stone-800 bg-stone-950/70 p-4"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-amber-300 text-stone-950 shadow-[0_0_28px_rgba(251,191,36,0.22)]">
                <TerminalSquare size={24} aria-hidden="true" />
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.22em] text-teal-200">
                  anjali.dev
                </div>
                <div className="text-lg font-black text-stone-50">Data Playground</div>
              </div>
            </div>
            <div className="mt-4 rounded border border-stone-800 bg-black/30 px-3 py-2 font-mono text-xs text-stone-400">
              status: moving_data
              <span className="ml-2 inline-block h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_16px_rgba(45,212,191,0.9)]" />
            </div>
          </Link>

          <nav className="mt-8 space-y-2" aria-label="Primary navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center gap-3 rounded-md border px-3 py-3 transition ${
                    isActive
                      ? "border-amber-300/40 bg-amber-300/10 text-amber-100"
                      : "border-transparent text-stone-400 hover:border-teal-300/25 hover:bg-teal-300/10 hover:text-teal-100"
                  }`}
                >
                  <span className="font-mono text-xs text-stone-600 group-hover:text-teal-300">
                    {item.code}
                  </span>
                  <Icon size={18} aria-hidden="true" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto">
            <div className="rounded-lg border border-stone-800 bg-stone-950/60 p-4">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
                current stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Python", "SQL", "Spark", "Airflow"].map((tool) => (
                  <span key={tool} className="rounded-full bg-teal-300/10 px-2.5 py-1 text-xs text-teal-100">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-stone-800 bg-stone-950/70 text-stone-400 transition hover:-translate-y-0.5 hover:border-amber-300/45 hover:text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-[#080b0f]"
                    aria-label={link.label}
                    title={link.label}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </aside>

      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/70 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-label="Close navigation overlay"
        />
      )}
    </>
  );
}
