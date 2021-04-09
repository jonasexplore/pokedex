import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  img {
    margin: 0 auto;
  }
`;

interface ImageProps {
  url: string;
}

const Image = ({ url }: ImageProps) => {
  return (
    <Container>
      <img src={url} alt="" />
    </Container>
  );
};

export default Image;
