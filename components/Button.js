import styled from "styled-components";
const ButtonWrapper = styled.div`
  border: 1px solid pink;
  border-radius: 3px;
  padding: 0.2em 0.5em;
  margin: 0.3em 0;
  display: table;

  &:hover {
    font-weight: bold;
    background-color: pink;
  }
`;
const Inner = styled.a`
  color: pink;
  &:hover {
    color: white;
    text-decoration: none;
  }
`;

export const Button = ({ href, children }) => (
  <>
    <ButtonWrapper>
      <Inner href={href}>{children}</Inner>
    </ButtonWrapper>
  </>
);
