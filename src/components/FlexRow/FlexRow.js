import React from "react";
import PropTypes from "prop-types";

import styles from "./FlexRow.module.scss";

const FlexRow = ({ children, justifyStyle }) => (
  <div className={styles["flex-row"]} style={{ justifyContent: justifyStyle }}>
    {children}
  </div>
);

export default FlexRow;

FlexRow.propTypes = {
  children: PropTypes.node.isRequired,
  justifyStyle: PropTypes.string
};

FlexRow.defaultProps = {
  justifyStyle: "flex-start"
};
