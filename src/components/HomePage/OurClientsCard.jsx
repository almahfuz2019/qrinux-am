import Image from "next/image";

export default function OurClientsCard({ client }) {
  const { id, name, title, image, description } = client || {};
  return (
    <div className="bg-white p-5 font-jost text-primary text-start flex flex-col h-full">
      <p className="sm:text-lg md:text-xl py-4 leading-[28px] flex-1">
        {description.length > 250 ? `${description?.slice(0, 250)}...` : description}
      </p>
      <hr className="mt-5 mb-8" />
      <div className="flex gap-4  items-center">
        <div className="h-14">
          <Image
            height={56}
            width={56}
            src={image}
            alt=""
            className="h-full w-fit object-cover rounded-full"
          />
        </div>
        <div className=" ">
          <h1 className="text-xl font-medium">{name}</h1>
          <p className="text-lg font-light">{title}</p>
        </div>
      </div>
    </div>
  );
}
