import { useContext, useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../../animations/like.json";
import { DataContext } from "../../contexts/DataContext";

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

interface FavoriteButtonProps {
  favorited: Boolean;
  id: number;
}

const FavoriteButton = ({ favorited, id }: FavoriteButtonProps) => {
  const { setFavoritedPokemon } = useContext(DataContext);

  const handlerClick = () => {
    setFavoritedPokemon(id);
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
      {favorited ? (
        <Lottie
          options={defaultOptions}
          height={64}
          width={64}
          isStopped={false}
          isPaused={false}
          speed={1.5}
        />
      ) : (
        <img src={"icons/heart.svg"} alt="" />
      )}
    </Container>
  );
};

export default FavoriteButton;
