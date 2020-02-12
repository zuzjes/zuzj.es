import "bootstrap/dist/css/bootstrap.min.css";
import { LayoutWrapper } from "../components/LayoutWrapper";
import Router from "next/router";
import styled from "styled-components";

const Back = styled.div`
    color: floralwhite;
    cursor: pointer;
    border-radius: 5px;
    padding: 0.5em 2em 0.5em 0em;
    text-align: center;
    width: max-content;
    margin-bottom: 2em;
    &:before {
        content: "❮ ";
        padding-right: 4px;
    }
    &:hover {
        color: #b3b3b3;
    }
`;

const Wrapper = styled.div`
    background: grey;
    padding-bottom: 1000px;
`;

const H4 = styled.h4`
    color: floralwhite;
`;
const P = styled.p`
    color: floralwhite;
`;

const Facturation = () => (
    <Wrapper>
        <LayoutWrapper>
            <Back onClick={() => Router.back()}>Back</Back>
            <H4>Fakturační údaje</H4>
            <P>ICO: 07933215</P>
            <P>cislo uctu: 2501498897</P>
            <P>IBAN: CZ3520100000002501498897</P>
            <P>BIC/SWIFT: FIOBCZPPXXX</P>

        </LayoutWrapper>
    </Wrapper>
);

export default Facturation;
