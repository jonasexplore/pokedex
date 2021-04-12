import { useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../../animations/like.json";

const Container = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 80%;

  svg {
    position: absolute;
    right: 25%;
    top: -27%;
  }
`;

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const handlerClick = () => {
    setIsFavorite(!isFavorite);
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container onClick={handlerClick}>
      {isFavorite ? (
        <Lottie
          options={defaultOptions}
          height={64}
          width={64}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
          speed={1.5}
        />
      ) : (
        <img src={"icons/heart.svg"} alt="" />
      )}
    </Container>
  );
};

export default FavoriteButton;
