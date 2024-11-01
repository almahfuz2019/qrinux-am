import React from "react";
import Image from "next/image";
import Marquee from "../ui/marquee";

export default function ProjectsImagesCarousel() {
  const projectImages = [
    {
      id: 1,
      src: "/assets/images/pages/home/project-screenshorts/project-screenshort1.png",
      alt: "Project Screenshot 1",
    },
    {
      id: 2,
      src: "/assets/images/pages/home/project-screenshorts/project-screenshort1.png",
      alt: "Project Screenshot 2",
    },
    {
      id: 3,
      src: "/assets/images/pages/home/project-screenshorts/project-screenshort1.png",
      alt: "Project Screenshot 3",
    },
    {
      id: 4,
      src: "/assets/images/pages/home/project-screenshorts/project-screenshort1.png",
      alt: "Project Screenshot 4",
    },
  ];

  return (
    <section className="bg-primary">
      <div className="overflow-x-hidden">
        <div className="pb-12 sm:pb-14 lg:pb-16 2xl:pb-20 space-y-8">
          {/* Marquee: Left to Right */}
          <Marquee
            className="w-full"
            repeat={40}
            pauseOnHover={true}
            reverse={false}
          >
            {projectImages.map((image) => (
              <figure key={image.id}>
                <Image
                  width={255}
                  height={255}
                  src={image.src}
                  alt={image.alt}
                  className="object-cover" // Optional: to maintain image aspect ratio
                />
                <figcaption className="sr-only">{image.alt}</figcaption>
              </figure>
            ))}
          </Marquee>

          {/* Marquee: Right to Left */}
          <Marquee
            className="w-full"
            repeat={40}
            pauseOnHover={true}
            reverse={true}
          >
            {projectImages.map((image) => (
              <figure key={image.id}>
                <Image
                  width={255}
                  height={255}
                  src={image.src}
                  alt={image.alt}
                  className="object-cover" // Optional: to maintain image aspect ratio
                />
                <figcaption className="sr-only">{image.alt}</figcaption>
              </figure>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
