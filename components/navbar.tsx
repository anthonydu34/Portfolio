"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-teal-500">Anthony</span>
          <span>Arozarena</span>
        </Link>
        <nav className="hidden md:flex gap-6 ml-10">
          <Link href="/" className="text-sm font-medium hover:text-teal-500 transition-colors">
            Accueil
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-teal-500 transition-colors">
            À propos
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-teal-500 transition-colors">
            Compétences
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-teal-500 transition-colors">
            Projets
          </Link>
          <Link href="#education" className="text-sm font-medium hover:text-teal-500 transition-colors">
            Formation
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-teal-500 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4 ml-auto">
          <Button asChild className="hidden sm:flex bg-teal-500 hover:bg-teal-600">
            <Link href="#contact">Me contacter</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className="text-sm font-medium hover:text-teal-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Accueil
                </Link>
                <Link
                  href="#about"
                  className="text-sm font-medium hover:text-teal-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  À propos
                </Link>
                <Link
                  href="#skills"
                  className="text-sm font-medium hover:text-teal-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Compétences
                </Link>
                <Link
                  href="#projects"
                  className="text-sm font-medium hover:text-teal-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Projets
                </Link>
                <Link
                  href="#education"
                  className="text-sm font-medium hover:text-teal-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Formation
                </Link>
                <Link
                  href="#contact"
                  className="text-sm font-medium hover:text-teal-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
