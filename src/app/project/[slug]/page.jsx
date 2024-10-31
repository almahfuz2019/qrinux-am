"use client";
import Custom_Container from "@/components/common/CustomContainer";
import Heading from "@/components/common/Heading";
import projects from "@/components/Hock/projects";
import BreadcrumbSection from "@/components/ProjectDetailsPage/BreadcrumbSection";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProjectDetails1(params) {
  const { slug } = useParams();
  console.log(slug);

  // Find the correct services using the slug
  const work = projects.find((b) => b.slug === slug);
  const {
    cover,
    title,
    description,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    color1,
    color2,
    color3,
    color4,
    color5,
    font1,
    font2,
    goal,
    targetAudience,
    designPrinciples,
    pages1,
    pages2,
  } = work || {};
  return (
    <>
      <>
        <BreadcrumbSection />
      </>
      <div className="bg-primary">
        <div className=" relative z-40 py-12 sm:py-14 lg:py-16 2xl:py-20">
          <Image
            width={1260}
            height={556}
            src={cover}
            alt={`image of  ${title}`}
            className="max-w-7xl w-full mx-auto lg:w-full px-[5%]"
          />
          <Custom_Container>
            <div className="bg-[#F7FAFF] p-5 lg:p-10  my-6 sm:my-7 lg:my-8 2xl:my-10">
              <Heading className="text-[40px] font-semibold  font-teko">
                <span className="text-secondary">{title}</span>
              </Heading>
              <p className="text-[20px] text-secondary font-jost mt-4">
                {description}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <figure className="md:w-2/3">
                <Image
                  width={730}
                  height={400}
                  src={img1}
                  alt={`image of  ${title}`}
                  className="w-full h-full object-cover"
                />
              </figure>
              <figure className="md:w-1/3">
                <Image
                  width={350}
                  height={400}
                  src={img2}
                  alt={`image of  ${title}`}
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
            <div className="bg-[#F7FAFF] text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-5 p-5 lg:p-10  my-6 sm:my-7 lg:my-8 2xl:my-10">
              <p
                className="lg:col-span-4 row-span-2 p-5 font-Jost text-2xl font-medium flex flex-col justify-end"
                style={{ backgroundColor: color1 }}
              >
                <span className="bg-black bg-opacity-25 w-min px-1">
                  {color1}
                </span>
              </p>
              <p
                className="lg:col-span-2 p-5 font-Jost text-2xl font-medium flex flex-col justify-end pt-16"
                style={{ backgroundColor: color2 }}
              >
                <span className="bg-black bg-opacity-25 w-min px-1">
                  {color2}
                </span>
              </p>
              <p
                className="lg:col-span-3 p-5 font-Jost text-2xl font-medium flex flex-col justify-end pt-16"
                style={{ backgroundColor: color3 }}
              >
                <span className="bg-black bg-opacity-25 w-min px-1">
                  {color3}
                </span>
              </p>
              <p
                className="lg:col-span-2 p-5 font-Jost text-2xl font-medium flex flex-col justify-end pt-16"
                style={{ backgroundColor: color4 }}
              >
                <span className="bg-black bg-opacity-25 w-min px-1">
                  {color4}
                </span>
              </p>
              <p
                className="lg:col-span-3 p-5 font-Jost text-2xl font-medium flex flex-col justify-end pt-16"
                style={{ backgroundColor: color5 }}
              >
                <span className="bg-black bg-opacity-25 w-min px-1">
                  {color5}
                </span>
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div
                className="bg-[#F7FAFF] p-5 flex justify-between items-center gap-5 md:w-1/2 font-medium "
                style={{ fontFamily: font1 }}
              >
                <h1 className="text-7xl lg:text-9xl text-textColor7 opacity-30">
                  Aa
                </h1>
                <p className="text-5xl lg:text-7xl mt-5">{font1}</p>
              </div>
              <div
                className="bg-[#F7FAFF] p-5 flex justify-between items-center gap-5 md:w-1/2 font-medium "
                style={{ fontFamily: font2 }}
              >
                <h1 className="text-7xl lg:text-9xl text-textColor7 opacity-30">
                  Aa
                </h1>
                <p className="text-5xl lg:text-7xl mt-5">{font2}</p>
              </div>
            </div>
            <div className="px-5 lg:px-10 bg-[#F7FAFF] relative my-6 sm:my-7 lg:my-8 2xl:my-10 overflow-hidden">
              <Image
                width={780}
                height={630}
                src={img3}
                alt={`image of  ${title}`}
                className="w-2/3 pt-10 z-20 relative shadow-[20px_20px_40px_10px_#1A1A1A33]"
              />
              <Image
                width={790}
                height={494}
                src={img4}
                alt={`image of  ${title}`}
                className="w-[43%] absolute right-5 lg:right-10 bottom-0 z-10 shadow-[20px_20px_40px_10px_#1A1A1A33]"
              />
            </div>
            <div className="bg-[#F7FAFF] p-5 sm:p-10">
              <div className="flex flex-col lg:flex-row gap-8">
                <Image
                  width={854}
                  height={570}
                  src={img5}
                  alt={`image of  ${title}`}
                  className="h-fit w-full lg:w-1/2"
                />
                <div className="w-full sm:text-lg md:text-xl font-Jost text-primary py-4 text-justify">
                  <p className="sm:text-lg md:text-xl font-Jost text-primary py-4 text-justify">
                    <b>Goal :</b> {goal}
                  </p>
                  <p className="sm:text-lg md:text-xl font-Jost text-primary py-4 text-justify">
                    <b>Target Audience :</b> {targetAudience}
                  </p>
                  <div
                    className="sm:text-lg md:text-xl font-Jost text-primary py-4 text-justify"
                    dangerouslySetInnerHTML={{ __html: designPrinciples }}
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#F7FAFF] my-6 sm:my-7 lg:my-8 2xl:my-10 overflow-hidden">
              <div className="p-5 sm:p-10">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                  <div
                    className="md:w-1/2 space-y-7 sm:text-lg md:text-xl font-Jost text-primary text-justify"
                    dangerouslySetInnerHTML={{ __html: pages1 }}
                  />

                  <div
                    className="md:w-1/2 space-y-7 sm:text-lg md:text-xl font-Jost text-primary text-justify"
                    dangerouslySetInnerHTML={{ __html: pages2 }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:gap-5 lg:gap-8 -rotate-12 w-[107%] h-44 sm:h-52 md:h-72 lg:h-96">
                <Image
                  width={380}
                  height={555}
                  src={img6}
                  alt={`image of  ${title}`}
                  className="shadow-[20px_20px_40px_10px_#1A1A1A33] w-full"
                />
                <Image
                  width={380}
                  height={555}
                  src={img7}
                  alt={`image of  ${title}`}
                  className="shadow-[20px_20px_40px_10px_#1A1A1A33] w-full"
                />
                <Image
                  width={380}
                  height={555}
                  src={img8}
                  alt={`image of  ${title}`}
                  className="shadow-[20px_20px_40px_10px_#1A1A1A33] w-full"
                />
              </div>
            </div>
          </Custom_Container>
        </div>
        <DotPattern
          width={30}
          height={30}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "fill-gray-500", // Set dot color to a soft gray
            "opacity-70", // Reduce opacity for a lighter appearance
            "[mask-image:linear-gradient(white,transparent,transparent)] py-4"
          )}
        />
      </div>
    </>
  );
}
