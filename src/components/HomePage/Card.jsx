import { MagicCard } from "@/components/ui/magic-card";
import Image from "next/image";
import PropTypes from "prop-types";

const Card = ({ service }) => {
  const { img, title } = service || {};
  return (
    <MagicCard>
      <div className="bg-gradient-to-b from-[#1D3E6B] to-transparent p-10 flex flex-col items-center gap-4 text-center transition-all duration-300 ease-in-out hover:scale-105 h-[350px] w-full">
        <div className="rounded-full bg-primary p-5 w-32 h-32  flex justify-center items-center">
          <Image
            height={106}
            width={106}
            src={img}
            alt={`image of ${title}`}
            className="w-full h-full object-contain p-2"
          />
        </div>
        <p className="text-2xl font-jost font-medium text-[#ffffffd5]">
          {title}
        </p>
      </div>
    </MagicCard>
  );
};

Card.propTypes = {
  service: PropTypes.object,
};

export default Card;
