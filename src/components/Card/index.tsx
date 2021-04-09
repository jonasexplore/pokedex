import { useEffect, useState } from "react";
import styled from "styled-components";
import { DataFetchResponse } from "../../interfaces/DataFetch";
import PrimaryButton from "../Buttons/PrimaryButton";
import FavoriteButton from "./styles/FavoriteButton";
import Image from "./styles/Image";

const Container = styled.div`
  background: var(--white);
  border-radius: 0.5rem;
  margin-right: 2rem;
  margin-top: 2rem;

  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);

  position: relative;

  padding: 1rem;

  & > h3 {
    font-weight: 600;
    color: var(--black);

    margin-bottom: 0.5rem;
  }

  & > div {
    display: flex;
    margin: 1rem 0;
  }

  & > div > p {
    color: var(--black);
    background: var(--yellow);
    border-radius: 0.75rem;
    font-size: 0.7rem;
    padding: 0.25rem 1rem;
    margin-right: 0.5rem;
  }
`;

interface CardProps {
  name: string;
  url: string;
}

const Card = (props: CardProps) => {
  const [data, setData] = useState({} as DataFetchResponse);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res: DataFetchResponse = await fetch(props.url).then((data) =>
        data.json()
      );

      setData(res);
      setIsLoading(false);
    };

    getData();
  }, []);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <FavoriteButton />
      <Image url={data.sprites.front_default} />
      <h3>{data.name}</h3>
      <p>ID: {data.id}</p>

      <div>
        {data.types.map((item, index) => (
          <p key={index}> {item.type.name}</p>
        ))}
      </div>
      <PrimaryButton>Ver detalhes</PrimaryButton>
    </Container>
  );
};

export default Card;
