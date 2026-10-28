"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { navLinks } from "@/lib/site"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-6xl flex items-center justify-between gap-6 px-6 py-4">
        <a href="#" className="font-mono text-2xl text-primary tracking-tight">
          PlaySpace5
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#cenik"
            className="inline-flex items-center bg-primary text-primary-foreground text-sm tracking-wide px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity"
          >
            Pronájem prostoru
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-1"
          aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-border bg-background px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#cenik"
            onClick={() => setIsOpen(false)}
            className="mt-6 flex justify-center bg-primary text-primary-foreground text-sm tracking-wide px-5 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            Pronájem prostoru
          </a>
        </div>
      )}
    </nav>
  )
}
