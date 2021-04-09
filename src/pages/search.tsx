import styled from "styled-components";
import CardList from "../components/CardList";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import SearchField from "../components/SearchField";
import { DataProvider } from "../contexts/DataContext";

const ContainerFlex = styled(Container)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;
`;

const Search = () => {
  return (
    <DataProvider>
      <Navbar />
      <ContainerFlex>
        <SearchField />
        <CardList />
      </ContainerFlex>
    </DataProvider>
  );
};

export default Search;
