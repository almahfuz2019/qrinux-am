import React from "react";
import Custom_Container from "../common/CustomContainer";
import Heading from "../common/Heading";
import Description from "../common/Description";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import DotPattern from "../ui/dot-pattern";
import { cn } from "@/lib/utils";

export default function AboutUs() {
  return (
    <section className="bg-primary relative z-40">
      <Custom_Container>
        <div className="py-12 sm:py-14 lg:py-16 2xl:py-20">
          <div className="flex flex-col sm:flex-row gap-5 lg:gap-8 justify-between relative z-20">
            <figure className="md:w-[300px] lg:flex-1 relative z-20">
              <Image
                height={490}
                width={350}
                src="/assets/images/pages/home/About-us/founder.png"
                alt="Abdullah Al Mahfuz, Founder & CEO of Qrinux"
                className="h-full w-full object-cover"
              />
              <figcaption className="absolute bottom-5 right-5 left-5 p-5 text-white bg-primary font-jost">
                <h1 className="text-2xl font-medium hidden sm:block lg:hidden">
                  Al Mahfuz
                </h1>
                <h1 className="text-2xl font-medium sm:hidden lg:block">
                  Abdullah Al Mahfuz
                </h1>
                <p className="text-lg">Founder & CEO</p>
              </figcaption>
            </figure>
            <div className="sm:w-3/5 lg:w-2/3 bg-[#F7FAFF] px-5 py-10 lg:p-10">
              <Heading>
                <span className="text-secondary">
                  We Provide <br className="hidden lg:block" />
                  High-Quality Tech Services <br className="hidden lg:block" />{" "}
                  At Affordable Price
                </span>
              </Heading>
              <Description>
                <span className="text-primary">
                  At <b>Qrinux</b>, we bring together technology and design to
                  build seamless, user-friendly experiences. Our mission is to
                  empower businesses with creative and reliable digital
                  solutions that make an impact. With a focus on quality,
                  functionality, and user experience, we help brands connect
                  with their audience and shape the future.
                </span>
              </Description>
              <Link
                href="/about"
                className="text-2xl font-jost flex items-center gap-3 font-medium text-warning mt-4 transition-all duration-500 transform group hover:text-textColor5 hover:underline underline-offset-4"
              >
                More About Us
                <FaArrowRightLong className="transition-transform duration-500 transform group-hover:rotate-45" />
              </Link>
            </div>
          </div>
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
}
