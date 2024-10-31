"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Custom_Container from "../common/CustomContainer";
import { Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import HyperText from "../ui/hyper-text";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (sectionId) => {
    if (pathname === "/") {
      scrollToSection(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <div className="bg-primary py-4 text-white font-Jost relative z-50">
      <Custom_Container>
        <div className="flex justify-between items-center gap-5">
          {/* Logo Section - Always Visible */}
          <Link href="/" className="flex z-50 items-center gap-3">
            <Image
              src="/assets/images/Common/logo.png"
              alt="Logo"
              width={50}
              height={50}
            />
            <h1 className="text-5xl font-teko hidden md:block">Qrinux</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden z-20 sm:flex items-center gap-10 justify-end text-xl font-jost">
            <Link href="/">
              {" "}
              <HyperText text="Home" className="cursor-pointer" />
            </Link>
            <Link href="/about">
              <HyperText text="About" className="cursor-pointer" />
            </Link>
            <button onClick={() => handleNavigation("works")}>
              <HyperText text="Works" className="cursor-pointer" />
            </button>
            <button
              className="text-xl px-5 transition-transform duration-300  bg-warning hover:bg-[#d73243]   shadow-md text-white "
              onClick={() => handleNavigation("contact")}
            >
              <HyperText text="Contact" className="cursor-pointer" />
            </button>
          </div>

          {/* Mobile Contact Button and Menu Toggle */}
          <div className="sm:hidden flex items-center gap-4 z-50">
            {/* <button
              className="text-xl px-5 py-2 md:py-2.5 bg-warning hover:bg-opacity-90  text-white transition-transform duration-300 "
              onClick={() => handleNavigation("contact")}
            >
              Contact
            </button> */}
            <button
              className="text-white transition-transform duration-300 hover:scale-110 "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={35} /> : <Menu size={35} />}
            </button>
          </div>
        </div>
      </Custom_Container>

      {/* Dropdown Menu */}
      <div
        className={`fixed inset-0 bg-primary bg-opacity-95 text-white flex flex-col items-center justify-center transition-all duration-500 ease-in-out z-10 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-3xl font-jost">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="transition-opacity duration-300 hover:opacity-80"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="transition-opacity duration-300 hover:opacity-80"
          >
            About
          </Link>
          <button
            onClick={() => {
              handleNavigation("works");
              setIsMenuOpen(false);
            }}
            className="transition-opacity duration-300 hover:opacity-80"
          >
            Works
          </button>
          <button
            onClick={() => {
              handleNavigation("contact");
              setIsMenuOpen(false);
            }}
            className="text-3xl px-5 py-1 transition-transform duration-300 hover:scale-105 bg-warning hover:bg-opacity-90 shadow-md"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
