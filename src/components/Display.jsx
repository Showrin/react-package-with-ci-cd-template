import React from "react";
import PropTypes from "prop-types";

const Display = ({ count }) => <div>{count}</div>;

Display.defaultProps = {
  count: 0,
};

Display.propTypes = {
  count: PropTypes.number,
};

export default Display;
