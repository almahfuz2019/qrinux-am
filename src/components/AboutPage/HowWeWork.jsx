import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Understanding Your Needs & Defining the Project Scope",
    description:
      "We take time and listen carefully to your needs, goals, and vision. Conduct market research, competitor analysis, and user interviews to gather insights. Develop a project plan that includes timelines, milestones, and deliverables.",
    imgSrc: "/assets/images/pages/about/how-we-work/1.png",
    altText: "Understanding Your Needs",
  },
  {
    number: "2",
    title: "Design, Prototyping & Collaboration",
    description:
      "We create custom and best solutions just for you to meet your demand. We work closely with you every step of the way to ensure satisfaction. We improve our designs based on your valuable feedback and insights.",
    imgSrc: "/assets/images/pages/about/how-we-work/2.png",
    altText: "Design and Prototyping",
  },
  {
    number: "3",
    title: "Development, Delivery & Post-launch Support",
    description:
      "We translate the approved design into code using HTML, CSS, JavaScript, and other relevant technologies. We develop the server-side logic, databases, and integrations necessary to support the application. We present the final, polished designs to you on time to fix perfectly. We regularly review the product’s performance and make iterative improvements.",
    imgSrc: "/assets/images/pages/about/how-we-work/3.png",
    altText: "Development and Support",
  },
];

export default function HowWeWork() {
  return (
    <div className="font-jost flex flex-col gap-5 py-6 sm:py-7 lg:py-0">
      {steps.map((step) => (
        <div key={step.number} className="flex gap-5">
          <Image
            height={106}
            width={106}
            src={step.imgSrc}
            alt={step.altText}
            className="hidden sm:block w-14 h-fit"
          />
          <div className="flex-1">
            <h2 className="text-2xl sm:text-[32px] font-medium font-teko mb-4">
              <span className="sm:hidden">{step.number}. </span>
              {step.title}
            </h2>
            <p className="text-lg sm:text-[22px] font-light text-[#ffffffb3]">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
