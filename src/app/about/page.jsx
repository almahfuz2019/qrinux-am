import AboutSection from "@/components/AboutPage/AboutSection";
import BreadcrumbSection from "@/components/AboutPage/BreadcrumbSection";
import CommonInfo from "@/components/AboutPage/CommonInfo";
import CommonInfoMobile from "@/components/AboutPage/CommonInfoMobile";
import { FAQ } from "@/components/AboutPage/FAQ";
import OurTeam from "@/components/AboutPage/OurTeam";
import OurClients from "@/components/HomePage/OurClients";

import React from "react";

export default function page() {
  return (
    <main className="overflow-x-hidden">
      <BreadcrumbSection />
      <AboutSection />
      <span className="hidden sm:block ">
        <CommonInfo />{" "}
      </span>
      <span className=" sm:hidden ">
        <CommonInfoMobile />
      </span>
      <OurTeam />
      <OurClients />
      <FAQ />
    </main>
  );
}
