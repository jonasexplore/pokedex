import { useContext } from "react";
import styled from "styled-components";
import CardList from "../components/Cards/CardList";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import SearchField from "../components/SearchField";
import { DataContext } from "../contexts/DataContext";

const ContainerFlex = styled(Container)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;
`;

const Search = () => {
  const { filteredPokemons } = useContext(DataContext);
  return (
    <>
      <Navbar />
      <ContainerFlex>
        <SearchField />
        <CardList pokemonsList={filteredPokemons} />
      </ContainerFlex>
    </>
  );
};

export default Search;
