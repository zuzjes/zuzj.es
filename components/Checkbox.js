import React from "react";
import styled from "styled-components";
import { InputGroup, Row } from "react-bootstrap";

const Item = styled.span`
  padding-left: 15px;
`;

const Checkbox = props => (
  <>
    <Row>
      <InputGroup.Checkbox />
      <Item>{props.item}</Item>
    </Row>
  </>
);

export default Checkbox;
