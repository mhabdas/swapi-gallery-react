import React from "react";
import ListItem from "../ListItem/ListItem";
import styles from "./MainGrid.module.scss";
import DetailsModal from "../DetailsModal/DetailsModal";

const MainGrid = ({ people }) => {
  return <ul className={styles["main-grid"]}>
    {people.map(({ name, avatar_url, created }) => (
      <ListItem
        handleClick={() => dispatch(toggleHeroModal(id))}
        key={created}
        img={avatar_url}
        name={name}
      />
    ))}
    <DetailsModal />
  </ul>;
};

export default MainGrid;
