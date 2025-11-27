"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Logo, Download, Menu } from "./assets";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-row justify-between py-5 shadow-md bg-white px-4 md:px-20">
        {/* Logo div */}
        <div className="flex flex-row items-center gap-2">
          <Image src={Logo} alt="Logo" width={40} height={40} />
          <h5 className="font-h5 semibold">Portfolio</h5>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-row items-center gap-6">
          <Link href="#about-me" className="hover:text-primary">About Me</Link>
          <Link href="#experience" className="hover:text-primary">Experience</Link>
        </div>

        {/* Desktop Resume Button */}
        <div className="hidden md:block">
          <Button 
            asChild
            className="bg-primary text-white hover:bg-primary/90 p-4"
          >
            <a 
              href={encodeURI("/Maryam Rashid.pdf")}
              download="Maryam Rashid.pdf"
            >
              <span>Resume</span>
              <Image src={Download} alt="Download" width={15} height={15} />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <Image src={Menu} alt="Menu" width={24} height={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4">
          <div className="flex flex-col space-y-4">
            <Link href="#about-me" className="hover:text-primary py-2">About Me</Link>
            <Link href="#experience" className="hover:text-primary py-2">Experience</Link>
            <Button 
              asChild
              className="bg-primary text-white hover:bg-primary/90 p-4 w-fit"
            >
              <a 
                href={encodeURI("/Maryam Rashid.pdf")}
                download="Maryam Rashid.pdf"
              >
                <span>Resume</span>
                <Image src={Download} alt="Download" width={15} height={15} />
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}