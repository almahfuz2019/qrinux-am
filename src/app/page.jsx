"use client";
import AboutUs from "@/components/HomePage/AboutUs";
import Contact from "@/components/HomePage/Contact";
import Hero from "@/components/HomePage/Hero";
import OurClients from "@/components/HomePage/OurClients";
import ProjectsImagesCarousel from "@/components/HomePage/ProjectsImagesCarousel";
import { SpecialButton } from "@/components/HomePage/SpecialButton";
import WhatWeDo from "@/components/HomePage/WhatWeDo";
import Works from "@/components/HomePage/Works";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import React, { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <main>
      <SpecialButton />
      <Hero />
      <WhatWeDo />
      <section id="works">
        <Works />
      </section>

      <AboutUs />
      <div className="bg-secondary">
        <ProjectsImagesCarousel />
        <div></div>
        <OurClients />
        <div className="overflow-hidden">
          <div className="py-8 overflow-hidden border-5 border-red-500">
            <div className="text-primary font-semibold font-teko bg-white md:text-6xl text-4xl md:py-5 py-3 -rotate-2 ">
              <VelocityScroll
                text="web design | UI/UX | Wordpress | Webflow | Wix | Shopify | SEO | Android App | IOS App |"
                default_velocity={2}
                className=""
              />
            </div>
          </div>
        </div>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  );
};

export default Home;
