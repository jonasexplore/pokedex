import { useContext, useState } from "react";
import styled from "styled-components";
import { DataContext } from "../../contexts/DataContext";
import { ModalContext } from "../../contexts/ModalContext";
import PrimaryButton from "../Buttons/PrimaryButton";
import RemoveFavoriteButton from "../Buttons/RemoveFavoriteButton";
import Category from "../Category";
import ProgressBar from "../ProgessBar";

const ContainerFixed = styled.div`
  background: ${(props) => props.theme.colors.card}99;
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

  & > span {
    cursor: pointer;
  }

  & > h3 {
    margin-bottom: 0.5rem;
  }
`;

const Container = styled.div`
  background: ${(props) => props.theme.colors.card};
  min-width: 400px;
  padding: 2rem 1rem;
  border-radius: 0.5rem;
  margin: 1rem auto;
  color: ${(props) => props.theme.colors.text};

  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.3);

  & > h2 {
    margin: 1rem 0;
  }

  & > ul {
    list-style-type: none;
  }

  & > ul > li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > p {
    font-weight: 600;
  }

  & > div > img {
    border-radius: 0.5rem;
    background: ${(props) => props.theme.colors.background}${(props) => props.theme.title == "dark" && "22"};
    margin-left: 0.5rem;
  }

  & > div > img:first-child {
    margin-left: 0;
  }

  & > button {
    width: 100%;
    margin-top: 1rem;
  }

  @media (max-width: 540px) {
    min-width: auto;
  }
`;

const Details = () => {
  const { setHideModal, selectedPokemon } = useContext(ModalContext);
  const { setFavoritedPokemon } = useContext(DataContext);
  const [isFavorite, setIsFavorite] = useState(selectedPokemon.isFavorite);

  const handlerClickClose = () => {
    setHideModal();
  };

  const handleClickAddFavorite = () => {
    setFavoritedPokemon(selectedPokemon.id);
    setIsFavorite(!isFavorite);
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
        {isFavorite ? (
          <RemoveFavoriteButton onClick={handleClickAddFavorite}>
            Remover dos favoritos
          </RemoveFavoriteButton>
        ) : (
          <PrimaryButton onClick={handleClickAddFavorite}>
            Adcionar aos favoritos
          </PrimaryButton>
        )}
      </Container>
    </ContainerFixed>
  );
};

export default Details;
