import Image from "next/image";

export default function HowWeWork(params) {
  return (
    <div className="font-jost  flex flex-col gap-5 py-6 sm:py-7 lg:py-0">
      <div className="flex gap-5">
        <Image
          height={106}
          width={106}
          src="/assets/images/pages/about/how-we-work/1.png"
          alt={`image of 01`}
          className="hidden sm:block w-14 h-fit"
        />
        <div className="flex-1">
          <h1 className="text-2xl sm:text-[32px] font-medium font-teko mb-4">
            <span className="sm:hidden">1. </span>
            Understanding Your Needs & Defining the Project Scope
          </h1>
          <p className="text-lg sm:text-[22px] font-light text-[#ffffffb3]">
            We take time and listen carefully to your needs, goals, and vision.
            Conduct market research, competitor analysis, and user interviews to
            gather in-sigh. Develop a project plan that includes timelines,
            milestones, and deliverables.
          </p>
        </div>
      </div>
      <div className="flex gap-5">
        <Image
          height={106}
          width={106}
          src="/assets/images/pages/about/how-we-work/2.png"
          alt={`image of 02`}
          className="hidden sm:block w-14 h-fit"
        />
        <div className="flex-1">
          <h1 className="text-2xl sm:text-[32px] font-medium font-teko mb-4">
            <span className="sm:hidden">2. </span>
            Design , Prototyping & Collaborate
          </h1>
          <p className="text-lg sm:text-[22px] font-light text-[#ffffffb3]">
            We create custom and best solutions just for you to meet your
            demand. We work closely with you every step of the way to ensure
            satisfaction. We improve our designs based on your valuable feedback
            and insights.
          </p>
        </div>
      </div>
      <div className="flex gap-5">
        <Image
          height={106}
          width={106}
          src="/assets/images/pages/about/how-we-work/3.png"
          alt={`image of 03`}
          className="hidden sm:block w-14 h-fit"
        />
        <div className="flex-1">
          <h1 className="text-2xl sm:text-[32px] font-medium font-teko mb-4">
            <span className="sm:hidden">3. </span>
            Development, Deliver & Post-launch Support
          </h1>
          <p className="text-lg sm:text-[22px] font-light text-[#ffffffb3]">
            We translate the approved design into code using HTML, CSS,
            JavaScript, and other relevant technologies. We develop the
            server-side logic, databases, and integrations necessary to support
            the application. We present the final, polished designs to you on
            time to fix perfectly. We regularly review the product’s performance
            and make iterative improvements.
          </p>
        </div>
      </div>
    </div>
  );
}
