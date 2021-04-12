import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const Favorites = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <img src="images/Astronaut.png" alt="" />
        <h2>Está meio vazio por aqui!</h2>
        <p>Procure por pokémons para adicioná-los aos seus favoritos.</p>
      </Container>
    </div>
  );
};

export default Favorites;
