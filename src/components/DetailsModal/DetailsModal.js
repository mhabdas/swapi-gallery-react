import React from "react";
import Modal from "../../components/Modal/Modal";
import { toggleHeroModal } from "../../utils/actions";
import Avatar from "../Avatar/Avatar";
import FlexColumn from "../../components/FlexColumn/FlexColumn";
import Text from "../Text/Text";

const DetailsModal = ({}) => {
  return (
    <Modal
      visible={!!heroToDisplay}
      onClose={() => dispatch(toggleHeroModal(state.heroWithOpenModal))}
    >
      {heroToDisplay && (
        <FlexColumn>
          <Avatar imgSrc={heroToDisplay.avatar_url} className="img-big" />
          <Text
            textToDisplay={heroToDisplay.description}
            className="text-centered"
          />
        </FlexColumn>
      )}
    </Modal>
  );
};

export default DetailsModal;
