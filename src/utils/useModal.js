import { useState } from "react";

export const useModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => setModalVisible(!isModalVisible);
  return [isModalVisible, toggleModal];
};
