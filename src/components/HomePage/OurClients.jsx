"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef, useState, useEffect } from "react";
import Custom_Container from "../common/CustomContainer";
import Heading from "../common/Heading";
import SubHeading from "../common/SubHeading";
import OurClientsCard from "./OurClientsCard";

import { ourClients } from "../Hock/client";
import GridPatternHero from "../ui/grid-pattern-hero";
import { cn } from "@/lib/utils";
export default function OurClients(params) {
  const clients = ourClients;

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaApi, setEmblaApi] = useState(null);

  const scrollTo = (index) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  const onSelect = () => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  };

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
      onSelect();
    }
  }, [emblaApi]);

  return (
    <div className="bg-secondar">
      <section className="py-12 sm:py-14 lg:py-16 2xl:py-20 relative z-50 text-center ">
        <Custom_Container>
          <div>
            <SubHeading>Testimonials</SubHeading>
            <Heading>Words From Our Clients</Heading>
          </div>
          <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            setApi={setEmblaApi}
            className="w-full max-w-screen-xl mx-auto my-8 sm:my-10 lg:my-10 2xl:my-12 relative z-50"
          >
            <CarouselContent>
              {clients.map((client, index) => (
                <CarouselItem
                  key={index}
                  className="sm:basis-1/2 lg:basis-1/3 "
                >
                  <OurClientsCard client={client} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <br />
          {/* Index Buttons */}
          <div className="flex justify-center space-x-2 -m-6">
            {clients.map((_, index) => (
              <button
                key={index}
                className={`w-6 h-1 lg:w-10 lg:h-[6px] rounded-sm ${
                  selectedIndex === index ? "bg-white" : "bg-gray-400"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </Custom_Container>{" "}
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
    </div>
  );
}
