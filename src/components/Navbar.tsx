import styled from "styled-components";
import Link from "next/link";
import ExitButton from "./Buttons/ExitButton";
import { useRouter } from "next/router";

const Container = styled.div`
  background: var(--yellow);
  max-width: 100%;
`;

const Nav = styled.nav`
  height: 50px;
  margin: auto;
  max-width: 1190px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
    margin: 1rem 0;
  }

  ul {
    list-style-type: none;
    display: flex;

    li a {
      padding: 0 1rem;
      padding-bottom: 11px;
      transition: font-weight, border-bottom 0.2s;
      border-bottom: 3px solid var(--yellow);
    }
    li a:hover {
      border-bottom: 3px solid var(--black);
    }
  }
`;

const Item = styled.li`
  cursor: pointer;
  margin-left: 1rem;
  &.${`active`} {
    a {
      color: var(--black);
      font-weight: 600;
      border-bottom: 3px solid var(--black);
    }
  }
  &.${`favorite`} {
    position: relative;
  }
  @media (max-width: 520px) {
    margin-left: 2rem;
  }
`;

const CurrentFavorite = styled.span`
  width: 23px;
  text-align: center;
  border-radius: 50%;
  background: var(--black);
  color: var(--white);
  position: absolute;
  left: 90%;
`;

const Navbar = () => {
  const router = useRouter();
  return (
    <Container>
      <Nav>
        <img src="icons/logo-small.svg" alt="" />
        <ul>
          <Item
            className={`${router.asPath == "/favorites" && "active"} favorite`}
          >
            <Link href="/favorites">Favoritos</Link>
            <CurrentFavorite>1</CurrentFavorite>
          </Item>
          <Item className={`${router.asPath == "/search" && "active"}`}>
            <Link href="/search">Procurar</Link>
          </Item>
          <Item className={`${router.asPath == "/home" && "active"}`}>
            <Link href="/home">Ver todos</Link>
          </Item>
        </ul>
        <ExitButton>Sair</ExitButton>
      </Nav>
    </Container>
  );
};

export default Navbar;
