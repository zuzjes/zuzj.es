import styled from "styled-components";

const Quote = styled.p`
    border-left: 1.5px solid grey;
    padding-left: 2em;
`;

export const Reccomendation = ({ name, link, text }) => (
    <>
        <a href={link}>
            <h3>{name}</h3>
        </a>
        <Quote>{text}</Quote>
    </>
);
