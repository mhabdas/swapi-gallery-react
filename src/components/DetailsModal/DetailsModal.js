import React from "react";
import Modal from "../../components/Modal/Modal";
import Avatar from "../Avatar/Avatar";
import FlexColumn from "../../components/FlexColumn/FlexColumn";
import Text from "../Text/Text";
import {avatars} from "../../utils/avatars";

const DetailsModal = ({ data, ...props }) => {
  return (
    <Modal {...props}>
      {data && (
        <FlexColumn>
          <Avatar imgSrc={avatars[data.name]} className="img-big" />
          <Text textToDisplay={data.name} className="text-bold" />
          <Text textToDisplay={`Birth year: ${data.birth_year}`} />
          <Text textToDisplay={`Height: ${data.height}`} />
          <Text textToDisplay={`Mass: ${data.mass}`} />
          <Text textToDisplay={`Hair color: ${data.hair_color}`} />
          <Text textToDisplay={`Skin color: ${data.skin_color}`} />
          <Text textToDisplay={`Eye color: ${data.eye_color}`} />
        </FlexColumn>
      )}
    </Modal>
  );
};

export default DetailsModal;
