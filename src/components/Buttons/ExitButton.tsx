import Link from "next/link";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 0.5rem;
  border: 1px solid var(--black);

  margin: 1rem 0;
  padding: 0 1rem;

  img {
    padding-left: 1rem;
  }
`;

interface ButtonProps {
  children: string;
}

const ExitButton = ({ children }: ButtonProps) => {
  return (
    <Link href="/">
      <Button>
        {children}
        <img src="icons/left.svg" alt="" />
      </Button>
    </Link>
  );
};

export default ExitButton;
