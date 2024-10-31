"use client";

import { useState } from "react";
import Custom_Container from "../common/CustomContainer";
import WhyChoseUs from "./WhyChoseUs";
import OurServices from "./OurServices";
import HowWeWork from "./HowWeWork";
import GridPatternHero from "../ui/grid-pattern-hero";
import { cn } from "@/lib/utils";

export default function CommonInfoMobile() {
  const [show, setShow] = useState("whyChooseUs");

  return (
    <div className="py-12 sm:py-14 lg:py-16 2xl:py-20 text-white">
      <Custom_Container>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-1 flex-col sm:flex-row lg:flex-col text-4xl font-teko font-semibold gap-6">
            <div className="">
              <h1>Why Choose Us </h1>
              <WhyChoseUs />
            </div>
            <div className="">
              <h1>How We Work </h1>
              <HowWeWork />
            </div>
            <div className="">
              <h1>Our Services </h1>
              <OurServices />
            </div>
          </div>
        </div>
      </Custom_Container>{" "}
      <GridPatternHero
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 4"} // Increase gap for a softer look
        className={cn(
          "text-gray-100", // Use a lighter color
          "opacity-90", // Reduce opacity for a subtle effect
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}
