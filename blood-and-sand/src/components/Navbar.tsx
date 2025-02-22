"use client";
import { useState } from "react";
import { Button } from "../components/ui/button"; // Assuming you're using Shadcn's Button component
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold">Blood and Sand</div>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <Button variant="link" className="text-white hover:text-gray-300">
              Home
            </Button>
          </Link>
          <Link href="/pages/ludus">
            <Button variant="link" className="text-white hover:text-gray-300">
              Ludus
            </Button>
          </Link>
          <Link href="/pages/battle">
            <Button variant="link" className="text-white hover:text-gray-300">
              Battle
            </Button>
          </Link>
          <Link href="/pages/market">
            <Button variant="link" className="text-white">
              Market
            </Button>
          </Link>
          <Link href="/pages/profile">
            <Button variant="link" className="text-white hover:text-gray-300">
              Profile
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <Button
          className="md:hidden text-2xl"
          onClick={toggleMobileMenu}
        >
          &#9776;
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-700">
          <Link href="/">
            <Button variant="link" className="text-white">
              Home
            </Button>
          </Link>
          <Link href="/pages/ludus">
            <Button variant="link" className="text-white">
              Ludus
            </Button>
          </Link>
          <Link href="/pages/battle">
            <Button variant="link" className="text-white">
              Battle
            </Button>
          </Link>
          <Link href="/pages/market">
            <Button variant="link" className="text-white">
              Market
            </Button>
          </Link>
          <Link href="/pages/profile">
            <Button variant="link" className="text-white">
              Profile
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
