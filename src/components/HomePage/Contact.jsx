import Custom_Container from "../common/CustomContainer";
import Description from "../common/Description";
import Heading from "../common/Heading";
import SubHeading from "../common/SubHeading";
import ContactForm from "./ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import GridPatternHero from "../ui/grid-pattern-hero";
import { cn } from "@/lib/utils";
export default function Contact(params) {
  return (
    <section className="py-12 sm:py-14 lg:py-16 2xl:py-20 relative z-50">
      <Custom_Container>
        <div className="flex flex-col lg:flex-row justify-between items-start sm:items-center sm:text-center lg:text-start">
          <div className="flex-1">
            <SubHeading>Contact</SubHeading>
            <Heading>We Are Here, Let’s Talk </Heading>
          </div>
          <div className="flex-1 lg:hidden">
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod
              tempor incididunt ut labore et dolore magn
            </Description>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <ContactForm />
          <div className="flex flex-col sm:flex-row lg:flex-col justify-between text-white w-full lg:w-[440px] space-y-3 lg:space-y-10">
            <div className="flex items-center gap-5 font-jost">
              <FaPhoneAlt className="text-5xl bg-[#F7FAFF] rounded-full text-primary p-[10px] lg:h-12 w-12" />
              <div>
                <h1 className="text-lg font-light">Call Us</h1>
                <a
                  href="tel:+8801787878743"
                  className="text-2xl font-semibold font-jost"
                >
                  +8801787-878743
                </a>
              </div>
            </div>
            <div className="flex items-center gap-5 font-jost">
              <MdEmail className="text-5xl bg-[#F7FAFF] rounded-full text-primary p-[10px] lg:h-12 w-12" />
              <div>
                <h1 className="text-lg font-light">Email Us</h1>
                <a
                  href="mailto:info@qriunx.com"
                  className="text-2xl font-semibold font-jost"
                >
                  info@qriunx.com
                </a>
              </div>
            </div>
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
          "opacity-70", // Reduce opacity for a subtle effect
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
        )}
      />
    </section>
  );
}
