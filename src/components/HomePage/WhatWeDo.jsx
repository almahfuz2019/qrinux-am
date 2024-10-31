import Image from "next/image";
import Custom_Container from "../common/CustomContainer";
import Description from "../common/Description";
import Heading from "../common/Heading";
import SubHeading from "../common/SubHeading";
import Card from "./Card";
import DotPattern from "../ui/dot-pattern";
import { cn } from "@/lib/utils";

const WhatWeDo = () => {
  const services = [
    {
      img: "/assets/images/pages/home/what-we-do-section/icon4.svg",
      title: "Web Design & Development",
    },
    {
      img: "/assets/images/pages/home/what-we-do-section/icon1.svg",
      title: "App Design & Development",
    },
    {
      img: "/assets/images/pages/home/what-we-do-section/icon2.svg",
      title: "CMS Solutions",
    },
    {
      img: "/assets/images/pages/home/what-we-do-section/icon3.svg",
      title: "SEO & Web Services",
    },
  ];

  return (
    <section className="bg-[#163359] relative z-30 py-12 sm:py-14 lg:py-16 2xl:py-20 ">
      <Custom_Container>
        <div className="flex flex-col lg:flex-row justify-between items-start sm:items-center sm:text-center lg:text-start">
          <div className="flex-1">
            <SubHeading>Our Services</SubHeading>
            <Heading>What We Do</Heading>
          </div>
          <div className="flex-1">
            <Description>
            From design to development, every service is crafted for your success.
            </Description>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6 sm:mt-7 lg:mt-8">
          {services.map((service, i) => (
            <Card key={i} service={service} />
          ))}
        </div>
      </Custom_Container>
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
    </section>
  );
};

export default WhatWeDo;
