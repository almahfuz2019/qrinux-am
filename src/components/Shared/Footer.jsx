"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

import { useRouter, usePathname } from "next/navigation";
import HyperText from "../ui/hyper-text";
import { cn } from "@/lib/utils";
import DotPattern from "../ui/dot-pattern";
import { Dock, DockIcon } from "../ui/dock";
export default function Footer(params) {
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
    <footer
      className={`${
        pathname === "/" || pathname === "/about"
          ? "bg-primary  relative z-50"
          : ""
      } text-white `}
    >
      <div className="max-w-[1200px] mx-auto px-[5%] pt-12 sm:pt-14 pb-8 lg:pt-16 2xl:pt-20 2xl:pb-10">
        <div className="flex justify-between items-center gap-5">
          <div className="hidden sm:flex z-50 items-center gap-3">
            <Image
              src="/assets/images/Common/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="h-12 w-full"
            />
            <h1 className="text-5xl font-teko">Qrinux</h1>
          </div>
          <div className="z-20 flex flex-row sm:items-center gap-3 sm:gap-10 justify-evenly sm:justify-end text-lg font-jost w-full">
            <Link href="/about">
              <HyperText text="About" className="cursor-pointer" />
            </Link>
            <button onClick={() => handleNavigation("works")}>
              <HyperText text="Our Works" className="cursor-pointer" />
            </button>
            <button onClick={() => handleNavigation("contact")}>
              <HyperText text="Contact Us" className="cursor-pointer" />
            </button>
          </div>
        </div>
        <div className="h-[1px] mb-6 mt-5 sm:my-7 lg:my-8 2xl:my-10 bg-[#ffffffc5]"></div>
        <div className="relative overflow-hidden h-32">
          <Dock direction="middle">
            <DockIcon>
              <a
                href="https://www.facebook.com/profile.php?id=61566863548599"
                target="_blank"
              >
                <FaFacebook className="bg-white text-primary p-1 text-3xl" />
              </a>
            </DockIcon>
            <DockIcon>
              {" "}
              <a
                href="https://www.linkedin.com/in/abdullah-al-mahfuz-ceo-of-qrinux/"
                target="_blank"
              >
                <FaLinkedinIn className="bg-white text-primary p-1 text-3xl" />
              </a>
            </DockIcon>
            <DockIcon>
              {" "}
              <FaInstagram className="bg-white text-primary p-1 text-3xl" />
            </DockIcon>
         
          </Dock>
        </div>
    
        <div className="flex sm:hidden z-50 justify-center items-center gap-3 mt-12">
          <Image
            src="/assets/images/Common/logo.png"
            alt="Logo"
            width={50}
            height={50}
          />
          <h1 className="text-5xl font-teko">Qrinux</h1>
        </div>
      </div>
      <DotPattern
        width={30}
        height={30}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "fill-gray-500", // Set dot color to a soft gray
          "opacity-70", // Reduce opacity for a lighter appearance
          "[mask-image:linear-gradient(white,transparent,transparent)] py-4",
        )}
      />
    </footer>
  );
}
