import React from "react";
import styled from "styled-components";
import { InputGroup, Row } from "react-bootstrap";

const Item = styled.ul`
  padding-left: 15px;
`;

const Checkbox = props => {
  const listItems = numbers.map(number => <li>{props.item}</li>);
  render(
    <Row>
      <InputGroup.Checkbox />
      <Item></Item>
    </Row>
  );
};

export default Checkbox;
