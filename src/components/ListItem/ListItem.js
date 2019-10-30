import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";

import Avatar from "../Avatar/Avatar";
import Text from "../Text/Text";

const ListItem = ({ img, name, handleClick }) => (
  <li className={styles["list-item"]} onClick={handleClick}>
    <Avatar imgSrc={img} />
    <Text textToDisplay={name} />
  </li>
);

export default ListItem;

ListItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};
