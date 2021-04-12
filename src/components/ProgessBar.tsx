import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 8px;
  background: #f3f3f3;

  margin: 1rem;

  display: flex;
  align-items: center;
`;

const Title = styled.p`
  margin-right: 1rem;
  max-width: 15px;
`;

const Porcent = styled.div`
  background: var(--yellow);
  height: 8px;
`;

interface ProgressBarProps {
  title: string;
  porcent: number;
}

const ProgressBar = ({ porcent, title }: ProgressBarProps) => {
  return (
    <>
      <Title>{title}</Title>
      <Container>
        <Porcent style={{ width: `${porcent}%` }} />
      </Container>
      <p style={{ marginRight: "1rem", maxWidth: "10px" }}>{porcent}</p>
    </>
  );
};

export default ProgressBar;
