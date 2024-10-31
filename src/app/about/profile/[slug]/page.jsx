"use client";
import Custom_Container from "@/components/common/CustomContainer";
import team from "@/components/Hock/team";
import BreadcrumbSection from "@/components/TeamDetailsPage/BreadcrumbSection";
import DotPattern from "@/components/ui/dot-pattern";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Profile(params) {
  const { slug } = useParams();
  console.log(slug);

  // Find the correct services using the slug
  const member = team.find((b) => b.slug === slug);
  const { img, name, designation, description, skills } = member || {};
  return (
    <>
      <div>
        <BreadcrumbSection />
      </div>
      <div className="bg-primary ">
        <div className="py-12 sm:py-14 lg:py-16 2xl:py-20  relative z-40">
          <Custom_Container>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-10">
              <div className="lg:w-60 flex flex-col sm:flex-row lg:flex-col gap-5">
                <Image
                  width={253}
                  height={353}
                  src={img}
                  alt={`image of  ${name}`}
                  className="w-full sm:w-[282px] lg:w-full h-fit"
                />
                <div className="">
                  <h1 className="text-2xl font-semibold font-inter text-white mb-2">
                    {name}
                  </h1>
                  <p className="text-lg font-inter text-[#F7FAFF] mb-5">
                    {designation}
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div>
                  <GradualSpacing
                    className="text-[80px] sm:text-[120px] font-semibold font-teko px-5 text-[#ffffff1d] lg:-mt-10 -mb-10 sm:-mb-16"
                    text="About"
                  />
                  {/* <p className="bg-[#F7FAFF] p-5 sm:p-10 text-primary font-jost text-[18px] sm:text-[20px]">
                    {description}
                  </p> */}
                  <div
                    className="bg-[#F7FAFF] p-5 sm:p-10 text-primary font-jost text-[18px] sm:text-[20px]"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                </div>
                <div>
                  <GradualSpacing
                    text="Skills"
                    className="text-[80px] sm:text-[120px] font-semibold font-teko px-5 text-[#ffffff1d] mt-4 sm:mt-8 -mb-10 sm:-mb-16"
                  />
                  <div className="bg-[#F7FAFF] p-5 sm:p-10 text-primary text-justify flex flex-wrap gap-5">
                    {skills?.map((skill) => (
                      <>
                        <button className="bg-primary text-white px-5 py-2 text-[20px] sm:text-[22px] font-medium font-jost">
                          {skill}
                        </button>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Custom_Container>{" "}
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
