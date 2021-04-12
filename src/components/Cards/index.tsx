import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ModalContext } from "../../contexts/ModalContext";
import { DataFetchResponse } from "../../interfaces/DataFetch";
import FavoriteButton from "../Buttons/FavoriteButton";
import PrimaryButton from "../Buttons/PrimaryButton";
import Category from "../Category";
import CardLoader from "../Loaders/CardLoader";

const Container = styled.div`
  background: var(--white);
  border-radius: 0.5rem;
  margin-right: 2rem;
  margin-top: 2rem;

  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);

  position: relative;

  padding: 1rem;

  & > div {
    margin: 1rem 0;
  }

  & > h3 {
    font-weight: 600;
    color: var(--black);

    margin-bottom: 0.5rem;
  }
`;

const Image = styled.div`
  width: 100%;
  img {
    margin: 0 auto;
  }
`;

const Card = (props: DataFetchResponse) => {
  // const [isLoading, setIsLoading] = useState(true);

  const { setShowModal } = useContext(ModalContext);

  // if (isLoading) {
  //   return <CardLoader />;
  // }

  const handlerClickCard = () => {
    setShowModal(props);
  };

  return (
    <>
      <Container>
        <FavoriteButton />
        <Image>
          <img src={props.sprites.front_default} />
        </Image>
        <h3>{props.name}</h3>
        <p>ID: {props.id}</p>

        <Category data={props} />
        <PrimaryButton onClick={handlerClickCard}>Ver detalhes</PrimaryButton>
      </Container>
    </>
  );
};

export default Card;
