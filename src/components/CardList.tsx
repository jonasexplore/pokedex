import { useContext } from "react";
import styled from "styled-components";
import { dataContext } from "../contexts/DataContext";
import Card from "./Card/";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;
`;

const CardList = () => {
  const { pokemons } = useContext(dataContext);

  return (
    <Container>
      {pokemons.map((pokemon, index) => (
        <Card key={index} name={pokemon.name} url={pokemon.url} />
      ))}
    </Container>
  );
};

export default CardList;
