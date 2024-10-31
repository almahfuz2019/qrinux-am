import React from "react";
import BreadcrumbContainer from "../common/BreadcrumbContainer";
import SmallHeading from "../common/SmallHeading";
import SmallSubHeading from "../common/SmallSubHeading";
import DotPattern from "../ui/dot-pattern";
import { cn } from "@/lib/utils";
import GridPatternHero from "../ui/grid-pattern-hero";

export default function BreadcrumbSection() {
  return (
    <div className="bg-secondary relative z-10">
      <BreadcrumbContainer>
        <div className="flex flex-col justify-between items-center">
          <SmallHeading>Project Details</SmallHeading>
          <SmallSubHeading>Home / Projects / Project Details</SmallSubHeading>
        </div>
      </BreadcrumbContainer>
      <GridPatternHero
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 4"} // Increase gap for a softer look
        className={cn(
          "text-gray-100", // Use a lighter color
          "opacity-35", // Reduce opacity for a subtle effect
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}
