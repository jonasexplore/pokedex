import { useContext, useState } from "react";
import styled from "styled-components";
import { dataContext } from "../contexts/DataContext";

const Container = styled.div`
  position: relative;
  width: 60%;

  & > img {
    cursor: pointer;
    position: absolute;
    left: 95%;
    top: 30%;
  }
`;

const Input = styled.input`
  /* border: 0.5px solid var(--gray-line); */
  border: 1px solid #dee0e3;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`;

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { filterPokemons } = useContext(dataContext);

  const handlerClick = (event) => {
    filterPokemons(searchValue);
  };

  const handlerChange = (event) => {
    filterPokemons(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <Container>
      <Input
        placeholder="Procure por pokémons"
        value={searchValue}
        onChange={handlerChange}
      />
      <img src="icons/search.svg" onClick={(event) => handlerClick(event)} />
    </Container>
  );
};

export default SearchField;
