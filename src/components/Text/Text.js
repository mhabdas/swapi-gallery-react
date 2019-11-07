import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./Text.module.scss";

const Text = ({ className, textToDisplay }) => {
  const textClass = classNames(styles.text, styles[className]);
  return <p className={textClass}>{textToDisplay}</p>;
};

export default Text;

Text.propTypes = {
  className: PropTypes.string,
  textToDisplay: PropTypes.string.isRequired
};

Text.defaultProps = {
  className: ""
};
