import React from "react";
import Custom_Container from "../common/CustomContainer";
import SubHeading from "../common/SubHeading";
import Heading from "../common/Heading";
import Card from "./Card";
import team from "../Hock/team";
import Image from "next/image";
import DotPattern from "../ui/dot-pattern";
import { cn } from "@/lib/utils";

export default function OurTeam() {
  const MyTeam = team;
  return (
    <div className="py-12 sm:py-14 lg:py-16 2xl:py-20 text-center bg-primary relative z-40">
      <Custom_Container>
        <SubHeading>Our Team</SubHeading>
        <Heading>Who We Are</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-start pt-8 sm:pt-10 lg:pt-10 relative z-20">
          {MyTeam?.map((team) => (
            <Card key={team?._id} team={team} />
          ))}
        </div>
      </Custom_Container>{" "}
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
    </div>
  );
}
