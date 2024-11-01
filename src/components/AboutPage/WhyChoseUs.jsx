export default function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      text: "We solve problems creatively, turning challenges into success.",
    },
    {
      number: "02",
      text: "We use insights & strategies to find unique paths for startups.",
    },
    {
      number: "03",
      text: "We bring your vision to life, ensuring your brand stands out.",
    },
  ];

  return (
    <div className="font-jost flex flex-col gap-4 sm:gap-6 py-6 sm:py-7 lg:py-0">
      {reasons.map((reason, index) => (
        <div
          key={index}
          className="flex items-center sm:items-start gap-5 sm:gap-10"
        >
          <h2 className="text-6xl sm:text-[140px] font-semibold font-teko">
            {reason.number}
          </h2>
          <p className="text-lg sm:text-[22px] flex-1 lg:mt-7 font-light">
            {reason.text}
          </p>
        </div>
      ))}
    </div>
  );
}
