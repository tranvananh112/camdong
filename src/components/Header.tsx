"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header = ({ className = "" }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Trang chủ", href: "#hero" },
    { label: "Vị trí", href: "#location-section" },
    { label: "Hình ảnh", href: "#gallery-section" },
    { label: "Du lịch", href: "#tourism-section" },
    { label: "Đánh giá", href: "#testimonial-section" },
    { label: "Liên hệ", href: "#contact-section" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3 px-6"
          : "bg-transparent py-5 px-6",
        className,
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="#hero" className="flex items-center group">
          <span
            className={cn(
              "text-xl font-bold transition-colors duration-300",
              scrolled ? "text-green-700" : "text-white",
            )}
          >
            Cẩm Đồng
          </span>
          <span
            className={cn(
              "ml-2 text-sm transition-colors duration-300",
              scrolled ? "text-green-600" : "text-white/90",
            )}
          >
            Thôn Quê Yên Bình
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "transition-colors hover:text-green-500",
                scrolled ? "text-gray-700" : "text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Language Switcher */}
        <div className="hidden md:flex items-center ml-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={scrolled ? "ghost" : "outline"}
                size="sm"
                className={cn(
                  "flex items-center gap-1",
                  !scrolled && "text-white border-white hover:bg-white/20",
                )}
              >
                <Globe className="h-4 w-4" />
                <span>Tiếng Việt</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="cursor-pointer">
                Tiếng Việt
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "md:hidden",
            !scrolled && "text-white hover:bg-white/20",
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 md:hidden">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-200">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1 w-full justify-start"
                >
                  <Globe className="h-4 w-4" />
                  <span>Tiếng Việt</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1 w-full justify-start"
                >
                  <Globe className="h-4 w-4" />
                  <span>English</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
