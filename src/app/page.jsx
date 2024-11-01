import AboutUs from "@/components/HomePage/AboutUs";
import Contact from "@/components/HomePage/Contact";
import Hero from "@/components/HomePage/Hero";
import OurClients from "@/components/HomePage/OurClients";
import ProjectsImagesCarousel from "@/components/HomePage/ProjectsImagesCarousel";
import { SpecialButton } from "@/components/HomePage/SpecialButton";
import WhatWeDo from "@/components/HomePage/WhatWeDo";
import Works from "@/components/HomePage/Works";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import React from "react";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <header role="banner">
        <Hero />
      </header>

      <section id="what-we-do" aria-labelledby="what-we-do-heading">
        <WhatWeDo />
      </section>

      <section id="works" aria-labelledby="works-heading">
        <Works />
      </section>

      <section id="about-us" aria-labelledby="about-us-heading">
        <AboutUs />
      </section>

      <section id="projects">
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
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-heading">
        <Contact />
      </section>

      <nav aria-label="Special action">
        <SpecialButton />
      </nav>
    </main>
  );
};

export default Home;
