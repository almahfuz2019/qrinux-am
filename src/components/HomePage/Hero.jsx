import React from "react";
import Custom_Container from "../common/CustomContainer";
import Heading from "../common/Heading";
import Description from "../common/Description";
import { FaArrowRightLong } from "react-icons/fa6";
import IconCloudDemo from "../ui/icon-cloud";
import { cn } from "@/lib/utils";
import GridPatternHero from "../ui/grid-pattern-hero";
import HeroButton from "./HeroButton";

export default function Hero() {
  return (
    <section className="bg-secondary" aria-labelledby="hero-heading">
      <Custom_Container>
        <div className="flex flex-col lg:flex-row gap-10 py-12 sm:py-14 lg:py-16 2xl:py-20 items-center">
          <div className="flex-1">
            <Heading id="hero-heading">
              Your Dream,
              <br />
              Our Responsibility
            </Heading>
            <Description>
              We provide web design & development, Android and iOS app
              development, UI/UX design, CMS solutions, SEO optimization,
              graphic design, and secure payment integration services.
            </Description>

            <HeroButton />
          </div>
          <div className="flex-1 relative z-20" aria-hidden="true">
            <IconCloudDemo />
          </div>
        </div>
      </Custom_Container>

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
    </section>
  );
}
