import Image from "next/image";

export default function OurServices() {
  const services = [
    {
      img: "/assets/images/pages/home/what-we-do-section/icon4.svg",
      title: "Web Design & Development",
    },
    {
      img: "/assets/images/pages/home/what-we-do-section/icon1.png",
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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-6 sm:py-7 lg:py-0">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-gradient-to-b from-[#1D3E6B] to-transparent flex flex-row sm:flex-col lg:justify-between items-center gap-4 text-start"
        >
          <div className="rounded-full bg-primary p-3 sm:p-5 w-28 h-28 sm:w-32 sm:h-32 flex justify-center items-center">
            <Image
              height={106}
              width={106}
              src={service.img}
              alt={`Icon representing ${service.title}`}
              className="w-full h-full object-contain p-2"
            />
          </div>
          <p className="text-xl sm:text-2xl font-jost font-medium sm:text-center text-[#ffffffb3]">
            {service.title}
          </p>
        </div>
      ))}
    </div>
  );
}
