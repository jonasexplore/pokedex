import styled from "styled-components";
import CardList from "../components/CardList";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

const ContainerFlex = styled(Container)`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <ContainerFlex>
        <CardList />
      </ContainerFlex>
    </>
  );
};

export default Home;
