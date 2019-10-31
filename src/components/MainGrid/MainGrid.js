import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";
import styles from "./MainGrid.module.scss";
import DetailsModal from "../DetailsModal/DetailsModal";
import { useModal } from "../../utils/useModal";

const MainGrid = ({ people }) => {
  const [isModalVisible, toggleModal] = useModal();
  const [personToDisplay, setPersonToDisplay] = useState(null);
  const handleClick = id => {
    const person = people.find(el => (el.created === id));
    setPersonToDisplay(person);
    toggleModal();
  };

  console.log(personToDisplay);

  return (
    <ul className={styles["main-grid"]}>
      {people.map(({ name, created }) => {
        return (
          <ListItem
            handleClick={() => handleClick(created)}
            key={created}
            // img={avatar_url}
            name={name}
          />
        );
      })}
      )
      {isModalVisible && <DetailsModal
        visible={isModalVisible}
        onClose={toggleModal}
        data={personToDisplay}
      />}
    </ul>
  );
};

export default MainGrid;
