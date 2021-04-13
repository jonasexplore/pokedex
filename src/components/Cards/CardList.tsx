import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../contexts/ModalContext";
import { DataFetchResponse } from "../../interfaces/DataFetch";
import Card from "./Card";
import Details from "./CardDetails";

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

interface CardListProps {
  pokemonsList: DataFetchResponse[];
}

const CardList = ({ pokemonsList }: CardListProps) => {
  const { isModalActive } = useContext(ModalContext);

  if (!pokemonsList.length) {
    return <Description>Nenhum pokémon foi encontrado :(</Description>;
  }

  return (
    <>
      <Container>
        {pokemonsList.map((pokemon, index) => (
          <Card key={index} {...pokemon} />
        ))}
      </Container>
      {isModalActive && <Details />}
    </>
  );
};

export default CardList;
