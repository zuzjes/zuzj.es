import styled from "styled-components";
import { A } from "./A";

const Quote = styled.p`
    border-left: 1.8px solid #4E4E4E;
    padding-left: 2em;
    color: #f4f0e6;
`;
const H3 = styled.h3`
    color: floralwhite;
`;

export const Reccomendation = ({ name, link, text }) => (
    <>
        <A href={link}>
            <H3>{name}</H3>
        </A>
        <Quote>{text}</Quote>
    </>
);
