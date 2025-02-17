"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const { setTheme } = useTheme();

  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Indy Van Canegem
        </Link>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link
              href="#about"
              className="text-muted-foreground hover:text-primary"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-muted-foreground hover:text-primary"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="text-muted-foreground hover:text-primary"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-primary"
            >
              Contact
            </Link>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </nav>
    </header>
  );
}
