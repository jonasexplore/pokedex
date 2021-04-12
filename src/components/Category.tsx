import styled from "styled-components";
import { TypePokemon } from "../interfaces/DataFetch";

interface CategoryProps {
  data: {
    types: TypePokemon[];
  };
}

const Container = styled.div`
  display: flex;
  margin: 1rem 0;

  & > p {
    color: var(--black);
    background: var(--yellow);
    border-radius: 0.75rem;
    font-size: 0.7rem;
    padding: 0.25rem 1rem;
    margin-right: 0.5rem;
  }
`;

const Category = ({ data }: CategoryProps) => {
  return (
    <Container>
      {data.types.map((item, index) => (
        <p key={index}> {item.type.name}</p>
      ))}
    </Container>
  );
};

export default Category;
