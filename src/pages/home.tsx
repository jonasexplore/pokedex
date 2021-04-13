import { useContext } from "react";
import styled from "styled-components";
import CardList from "../components/Cards/CardList";
import CategoryList from "../components/CategoryList";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import { DataContext } from "../contexts/DataContext";

const ContainerFlex = styled(Container)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

const Home = () => {
  const { filteredByCategory } = useContext(DataContext);
  return (
    <>
      <Navbar />
      <ContainerFlex>
        <CategoryList />
        <CardList pokemonsList={filteredByCategory} />
      </ContainerFlex>
    </>
  );
};

export default Home;
