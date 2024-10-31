import React from "react";
import Custom_Container from "../common/CustomContainer";
import Image from "next/image";
import SubHeading from "../common/SubHeading";
import Description from "../common/Description";
import Heading from "../common/Heading";
import DotPattern from "../ui/dot-pattern";
import { cn } from "@/lib/utils";

export default function AboutSection() {
  return (
    <div>
      {" "}
      <div className="bg-primary relative z-40">
        <Custom_Container>
          <div className=" py-12 sm:py-14 lg:py-16 2xl:py-20 relative z-10">
            <div className="flex flex-col md:flex-row gap-5 md:gap-0 relative sm:bg-[#F7FAFF] lg:bg-transparent sm:px-5 sm:py-6">
              <Image
                height={500}
                width={445}
                src="/assets/images/pages/about/about-section/Rectangle 8390.png"
                alt=""
                className="md:w-2/5 h-[500px] object-cover "
              />
              <div className="md:w-3/5 lg:w-2/3 lg:py-10 lg:p-10 lg:absolute top-0 bottom-0 lg:m-10 left-1/4 bg-[#F7FAFF] px-5 py-10 sm:pl-5 sm:px-0 sm:py-0 ">
                <SubHeading>About</SubHeading>
                <Heading>
                  <span className="text-primary"> What Is Qrinux ?</span>
                </Heading>
                <Description>
                  <span className="text-[#163359]">
                    Qrinux is a dedicated agency of designers and developers
                    focused on bringing your vision to life. We create visually
                    stunning, user-friendly websites, apps, and digital
                    solutions that connect businesses with their audiences. By
                    combining creativity, technology, and precision, we ensure
                    each project aligns with your goals and resonates with your
                    target market. From sleek websites and dynamic apps to
                    comprehensive digital strategies, Qrinux delivers
                    exceptional results and service.
                  </span>
                </Description>
              </div>
            </div>
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
    </div>
  );
}
