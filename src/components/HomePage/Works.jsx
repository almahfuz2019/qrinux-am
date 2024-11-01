import React from "react";
import Custom_Container from "../common/CustomContainer";
import SubHeading from "../common/SubHeading";
import Heading from "../common/Heading";
import Description from "../common/Description";
import projects from "../Hock/projects";
import Work from "./Work";
import { cn } from "@/lib/utils";
import GridPatternHero from "../ui/grid-pattern-hero";

export default function Works() {
  const works = projects;
  return (
    <section
      className="py-12 sm:py-14 lg:py-16 2xl:py-20 relative z-20 bg-secondary"
      aria-labelledby="works-heading"
    >
      <Custom_Container>
        <header className="flex flex-col lg:flex-row justify-between items-start sm:items-center sm:text-center lg:text-start">
          <div className="flex-1">
            <SubHeading>Our Projects</SubHeading>
            <Heading id="works-heading">See Our Works</Heading>
          </div>
          <div className="flex-1">
            <Description>
              Explore our projects that showcase impactful designs and
              innovative digital solutions.
            </Description>
          </div>
        </header>
        <div className="pt-6 sm:pt-7 lg:pt-8 flex flex-col gap-5 lg:gap-10 relative z-20">
          {works?.map((work, i) => (
            <Work key={i} work={work} />
          ))}
          <div className="bg-[#FBFFF1] flex justify-center items-center py-20">
            <h2 className="text-[#C4C4C4] text-6xl sm:text-[100px] font-semibold font-teko">
              Coming soon
            </h2>
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
          "opacity-80", // Reduce opacity for a subtle effect
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
        )}
      />
    </section>
  );
}
