import { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../contexts/DataContext";
import { ModalContext } from "../contexts/ModalContext";
import Card from "./Cards";
import Details from "./Details";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;
`;

const Description = styled.p`
  margin-top: 2rem;
`;

const CardList = () => {
  const { filteredPokemons } = useContext(DataContext);
  const { isModalActive } = useContext(ModalContext);

  return !filteredPokemons.length ? (
    <Description>Nenhum pokémon foi encontrado :(</Description>
  ) : (
    <>
      <Container>
        {filteredPokemons.map((pokemon, index) => (
          <Card key={index} {...pokemon} />
        ))}
      </Container>
      {isModalActive && <Details />}
    </>
  );
};

export default CardList;
