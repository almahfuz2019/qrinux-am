import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

const Card = ({ team }) => {
  const { slug, name, designation, img } = team || {};
  return (
    <Link href={`/about/profile/${slug}`} passHref>
      <div className="cursor-pointer">
        <Image
          width={253}
          height={353}
          src={img}
          alt={slug}
          className="w-full"
        />
        <h1 className="text-2xl font-semibold text-white font-inter mt-4 mb-1">
          {name}
        </h1>
        <h2 className="font-inter text-lg text-[#F7FAFF]">
          {designation}
        </h2>
      </div>
    </Link>
  );
};

Card.propTypes = {
  team: PropTypes.object,
};

export default Card;
