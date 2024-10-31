import PropTypes from "prop-types";

const SmallSubHeading = ({ children }) => {
  return <p className="text-xl font-jost text-warning">{children}</p>;
};

SmallSubHeading.propTypes = {
  children: PropTypes.string,
};

export default SmallSubHeading;
