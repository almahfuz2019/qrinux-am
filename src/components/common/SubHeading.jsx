import PropTypes from "prop-types";

const SubHeading = ({ children }) => {
  return <p className="text-xl mb-1 lg:mb-3 font-jost text-warning">{children}</p>;
};

SubHeading.propTypes = {
  children: PropTypes.string,
};

export default SubHeading;
