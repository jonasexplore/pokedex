import styled from "styled-components";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import Input from "../components/Input";
import Link from "next/link";

const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-start;
  height: 100vh;

  background: url(images/light-1.png) no-repeat;
  background-size: contain;
  background-position: right top;

  @media (max-width: 1190px) {
    background: ${(props) => props.theme.colors.background};
    justify-content: center;
  }
`;

const SectionLogin = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin-left: 3rem;

  max-width: 25%;

  & > img {
    max-width: 206px;
    margin: 1rem 0;
  }

  & > h1 {
    margin-bottom: 2rem;

    @media (max-width: 540px) {
      margin-bottom: 0;
    }
  }

  @media (max-width: 1190px) {
    margin: 2rem;
    max-width: 100%;
  }
`;

const H1 = styled.h1`
  font-family: "Poppins";
  font-size: 3rem;
  color: ${(props) => props.theme.colors.secundary};
`;

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;

  flex: 1;
  margin: 2rem 0;
`;

const IndexPage = () => (
  <Container>
    <SectionLogin>
      <img src="icons/logo.svg" alt="" />
      <H1>Comece a coletar pokémons!</H1>
      <div>
        <Form>
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Senha" />
          <Link href="/home">
            <PrimaryButton>Entrar</PrimaryButton>
          </Link>
        </Form>
      </div>
      <div>{/* <button>Tema escuro</button> */}</div>
    </SectionLogin>
  </Container>
);
export default IndexPage;
