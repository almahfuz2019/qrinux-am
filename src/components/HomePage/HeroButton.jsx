"use client";
import { useRouter, usePathname } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
export default function HeroButton(params) {
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
    <button
      onClick={() => handleNavigation("contact")}
      className="relative text-xl px-5 py-2 md:py-2.5 transition-transform duration-300  bg-warning hover:bg-[#D73243] shadow-md text-white mt-2 group flex items-center gap-3 ease-in-out transform"
    >
      Let’s Talk
      <FaArrowRightLong className="transition-all duration-500 ease-in-out transform group-hover:rotate-45" />
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-[#D73243] scale-0 transition-transform duration-500 ease-in-out rounded-lg opacity-10 group-hover:scale-100"></div>
    </button>
  );
}
