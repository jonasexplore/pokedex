import styled from "styled-components";

const Input = styled.input`
  background: transparent;
  border: 1px solid var(--gray-line);
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.colors.text};

  margin-bottom: 1rem;
`;

export default Input;
