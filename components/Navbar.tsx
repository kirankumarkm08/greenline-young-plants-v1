"use client"

import { useState } from "react"
import { Leaf, Menu, Moon, Sun, Globe } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { NaviItems } from "@/constants/NaviItems"

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("EN")

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    // In a real app, you'd implement actual dark mode logic here
    document.documentElement.classList.toggle("dark")
  }

  const languages = [
    { code: "EN", name: "English" },
    { code: "ES", name: "Español" },
    { code: "FR", name: "Français" },
    { code: "DE", name: "Deutsch" },
    { code: "NL", name: "Nederlands" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-lg">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-green-700 dark:text-green-400">Greenline</span>
            <span className="text-xs text-green-600 dark:text-green-500 -mt-1">Young Plants</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-bold">
         {NaviItems.map((items)=>(
          <Link href={items.href || ""} key={items.name} className="text-gray-700 capitalize hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 transition-colors">
          {items.name}</Link>
         ))}
        </nav>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center space-x-2">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-9 px-3">
                <Globe className="h-4 w-4 mr-1" />
                {currentLanguage}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setCurrentLanguage(lang.code)}
                  className={currentLanguage === lang.code ? "bg-green-50 dark:bg-green-900/20" : ""}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Dark Mode Toggle */}
          <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="h-9 w-9 px-0">
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="sr-only">Toggle dark mode</span>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="md:hidden h-9 w-9 px-0">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between pb-4 border-b">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-8 h-8 bg-green-600 rounded-lg">
                    <Leaf className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-green-700 dark:text-green-400">Greenline</span>
                    <span className="text-xs text-green-600 dark:text-green-500 -mt-1">Young Plants</span>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-4 py-6">
                <SheetClose asChild>
                  <Link
                    href="/products"
                    className="text-lg font-medium text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 transition-colors"
                  >
                    Products
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/varieties"
                    className="text-lg font-medium text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 transition-colors"
                  >
                    Varieties
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/about"
                    className="text-lg font-medium text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 transition-colors"
                  >
                    About Us
                  </Link>
                </SheetClose>
              </nav>

              {/* Mobile Controls */}
              <div className="mt-auto pt-6 border-t space-y-4">
                {/* Language Selector */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Language</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Globe className="h-4 w-4 mr-2" />
                        {currentLanguage}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {languages.map((lang) => (
                        <DropdownMenuItem
                          key={lang.code}
                          onClick={() => setCurrentLanguage(lang.code)}
                          className={currentLanguage === lang.code ? "bg-green-50 dark:bg-green-900/20" : ""}
                        >
                          {lang.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Dark Mode Toggle */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dark Mode</span>
                  <Button variant="outline" size="sm" onClick={toggleDarkMode} className="h-9 w-16">
                    {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
