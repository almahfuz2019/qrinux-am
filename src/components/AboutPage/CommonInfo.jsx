"use client";
import { useState } from "react";
import Custom_Container from "../common/CustomContainer";
import GridPatternHero from "../ui/grid-pattern-hero";
import HowWeWork from "./HowWeWork";
import OurServices from "./OurServices";
import WhyChoseUs from "./WhyChoseUs";
import { cn } from "@/lib/utils";

export default function InfoTabs() {
  const [activeTab, setActiveTab] = useState("whyChooseUs");

  return (
    <section className="relative py-12 sm:py-14 lg:py-16 2xl:py-20 text-white overflow-hidden">
      {/* Background Pattern */}
      <GridPatternHero
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 4"}
        className={cn(
          "absolute inset-0",
          "text-gray-100",
          "opacity-50",
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "-z-10",
        )}
      />

      {/* Main Content */}
      <Custom_Container>
        <div className="flex flex-col lg:flex-row justify-between relative">
          <header className="flex flex-1 flex-col justify-between lg:justify-start sm:flex-row lg:flex-col text-[38px] lg:text-[60px] lg:gap-0 font-teko font-semibold">
            {["whyChooseUs", "howWeWork", "ourServices"].map((section) => (
              <h1
                key={section}
                onClick={() => setActiveTab(section)}
                onKeyDown={(e) => e.key === "Enter" && setActiveTab(section)} // Handle keyboard navigation
                tabIndex={0} // Make the heading focusable
                className={`cursor-pointer border-b-4 lg:border-b-0 lg:border-s-4 lg:pl-5 w-full text-center lg:text-start ${
                  activeTab === section
                    ? "text-white border-white"
                    : "text-[#ffffff3b] border-[#ffffff3b]"
                } hover:text-white hover:border-white transition duration-200 ease-in-out`}
                aria-selected={activeTab === section} // Accessibility
              >
                {section === "whyChooseUs"
                  ? "Why Choose Us"
                  : section === "howWeWork"
                  ? "How We Work"
                  : "Our Services"}
                <span className="ml-2 text-lg">
                  {activeTab === section ? "▼" : "►"}
                </span>
              </h1>
            ))}
          </header>
          <div className="flex flex-1 flex-col text-3xl mt-4 lg:mt-0">
            <div className={activeTab === "whyChooseUs" ? `block` : `hidden`}>
              <WhyChoseUs />
            </div>
            <div className={activeTab === "howWeWork" ? `block` : `hidden`}>
              <HowWeWork />
            </div>
            <div className={activeTab === "ourServices" ? `block` : `hidden`}>
              <OurServices />
            </div>
          </div>
        </div>
      </Custom_Container>
    </section>
  );
}
