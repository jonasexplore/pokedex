import { useContext } from "react";
import styled from "styled-components";
import CardList from "../components/Cards/CardList";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import { DataContext } from "../contexts/DataContext";

const ContentCenter = styled(Container)`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled(Container)`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Description = styled.h2`
  margin-top: 2rem;
  color: var(--black);
`;

const Favorites = () => {
  const { filteredByFavorited, countFavorited } = useContext(DataContext);
  return (
    <>
      <Navbar />
      {!filteredByFavorited.length ? (
        <ContentCenter>
          <img src="images/Astronaut.png" alt="" />
          <h2>Está meio vazio por aqui!</h2>
          <p>Procure por pokémons para adicioná-los aos seus favoritos.</p>
        </ContentCenter>
      ) : (
        <Content>
          <Description>{`Olá, você tem ${countFavorited
            .toString()
            .padStart(2, "0")} pokémon salvo!`}</Description>
          <CardList pokemonsList={filteredByFavorited} />
        </Content>
      )}
    </>
  );
};

export default Favorites;
