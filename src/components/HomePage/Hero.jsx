import React from "react";
import Custom_Container from "../common/CustomContainer";
import Heading from "../common/Heading";
import Description from "../common/Description";
import { FaArrowRightLong } from "react-icons/fa6";
import IconCloudDemo from "../ui/icon-cloud";
import { cn } from "@/lib/utils";
import GridPatternHero from "../ui/grid-pattern-hero";
export default function Hero() {
  return (
    <div className=" bg-secondary">
      <Custom_Container>
        <div className="flex flex-col lg:flex-row gap-10 py-12 sm:py-14 lg:py-16 2xl:py-20 items-center ">
          <div className="flex-1">
            <Heading>
              Your Dream,
              <br />
              Our Responsibility
            </Heading>
            <Description>
              We provide web design & development, Android and iOS app
              development, UI/UX design, CMS solutions, SEO optimization,
              graphic design and secure payment integration services.
            </Description>

            <button className="relative text-xl px-5 py-2 md:py-2.5 transition-transform duration-300  bg-warning hover:bg-[#d73243] shadow-md text-white mt-2 group">
              <span className="flex items-center gap-3 transition-all duration-300 ease-in-out transform">
                Let’s Talk
                <FaArrowRightLong className="transition-all duration-500 ease-in-out transform group-hover:rotate-45" />
              </span>

              {/* Animated background effect */}
              <div className="absolute inset-0 bg-[#d73243] scale-0 transition-transform duration-500 ease-in-out rounded-lg opacity-10 group-hover:scale-100"></div>
            </button>
          </div>
          <div className="flex-1 relative z-20">
            <IconCloudDemo />
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
          "opacity-40", // Reduce opacity for a subtle effect
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}
