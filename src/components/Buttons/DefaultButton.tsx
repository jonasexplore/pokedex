import styled from "styled-components";

const DefaultButton = styled.button`
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.card};
  background: transparent;

  cursor: pointer;
  color: ${(props) => props.theme.colors.text};

  margin: 0 0.5rem;
  padding: 0.5rem 1.5rem;
`;

export default DefaultButton;
