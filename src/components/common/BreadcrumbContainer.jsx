
import PropTypes from "prop-types";

const BreadcrumbContainer = ({ children }) => {
  return (
    <div className="text-center py-6 sm:py-10 px-4 sm:px-6 md:px-10">
      {children}
    </div>
  );
};

BreadcrumbContainer.propTypes = {
  children: PropTypes.string,
};

export default BreadcrumbContainer;
