import React from "react";
import Modal from "../../components/Modal/Modal";
import Avatar from "../Avatar/Avatar";
import FlexColumn from "../../components/FlexColumn/FlexColumn";
import Text from "../Text/Text";

const DetailsModal = ({ data, ...props }) => {
  return (
    <Modal {...props}>
      {data && (
        <FlexColumn>
          <Avatar imgSrc={''} className="img-big" />
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
