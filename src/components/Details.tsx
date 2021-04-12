import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../contexts/ModalContext";
import PrimaryButton from "./Buttons/PrimaryButton";
import Category from "./Category";
import ProgressBar from "./ProgessBar";

const ContainerFixed = styled.div`
  background: rgba(255, 255, 255, 0.85);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    cursor: pointer;
  }
`;

const Container = styled.div`
  background: var(--white);
  min-width: 400px;
  padding: 2rem 1rem;
  border-radius: 0.5rem;
  margin: 1rem auto;
  color: var(--black);

  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);

  ul {
    list-style-type: none;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-weight: 600;
  }
`;

const Details = () => {
  const { setHideModal, selectedPokemon } = useContext(ModalContext);

  const handlerClickClose = () => {
    setHideModal();
  };

  return (
    <ContainerFixed>
      <Container>
        <Header>
          <h3>Detalhes</h3>
          <span onClick={handlerClickClose}>X</span>
        </Header>
        <hr />
        <h2>{selectedPokemon.name}</h2>
        <div>
          <img src={selectedPokemon.sprites.front_default} alt="" />
          <img src={selectedPokemon.sprites.back_default} alt="" />
        </div>
        <p>{`${selectedPokemon.height}m ${selectedPokemon.weight}kg`}</p>
        <Category data={selectedPokemon} />
        <p>Estatísticas</p>
        <ul>
          <li>
            <ProgressBar
              title="HP"
              porcent={selectedPokemon.stats[0].base_stat}
            />
          </li>
          <li>
            <ProgressBar
              title="ATK"
              porcent={selectedPokemon.stats[1].base_stat}
            />
          </li>
          <li>
            <ProgressBar
              title="DEF"
              porcent={selectedPokemon.stats[2].base_stat}
            />
          </li>
          <li>
            <ProgressBar
              title="S.ATK"
              porcent={selectedPokemon.stats[3].base_stat}
            />
          </li>
          <li>
            <ProgressBar
              title="S.DEF"
              porcent={selectedPokemon.stats[4].base_stat}
            />
          </li>
          <li>
            <ProgressBar
              title="SPD"
              porcent={selectedPokemon.stats[5].base_stat}
            />
          </li>
        </ul>
        <PrimaryButton>Adcionar aos favoritos</PrimaryButton>
      </Container>
    </ContainerFixed>
  );
};

export default Details;
