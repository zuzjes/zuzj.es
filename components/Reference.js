import React from "react";
import styled from "styled-components";

const Name = styled.a`
  color: #088958;
`;

const Text = styled.p`
  margin: 2em 0 0.5em 0;
`;

const A = styled.a`
  color: #088958;
  :hover {
    color: #044d30;
  }
`;

const Reference = props => (
  <>
    <Text>{props.text}</Text>
    <Name>
      {" "}
      - <A href={props.link}>{props.name}</A>
    </Name>
  </>
);

export default Reference;
