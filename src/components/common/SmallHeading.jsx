
import PropTypes from "prop-types";

const SmallHeading = ({ children }) => {
  return (
    <h1 className="text-white text-4xl sm:text-4xl md:text-[40px] font-semibold font-teko my-4">
      {children}
    </h1>
  );
};

SmallHeading.propTypes = {
  children: PropTypes.string,
};

export default SmallHeading;
