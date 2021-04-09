import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 80%;
`;

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handlerClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Container onClick={handlerClick}>
      <img
        src={isFavorite ? "icons/heart-red.svg" : "icons/heart.svg"}
        alt=""
      />
    </Container>
  );
};

export default FavoriteButton;
