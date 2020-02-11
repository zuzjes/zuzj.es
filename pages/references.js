import "bootstrap/dist/css/bootstrap.min.css";
import { LayoutWrapper } from "../components/LayoutWrapper";
import { Reccomendation } from "../components/Reccomendation";
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
    &:hover{
        color: #B3B3B3;
    }
`;

const Wrapper = styled.div`
    background: grey;
    padding-bottom: 1000px;
`;

const References = () => (
    <Wrapper>
        <LayoutWrapper>
            <Back onClick={() => Router.back()}>Back</Back>
            <Reccomendation
                name="Patrik Helta"
                link="https://www.linkedin.com/in/patrik-helta-9a06304b/"
                text="Zuzka k nám na projekt nastoupila na pozici junior kodéra jako externí
                výpomoc. Velmi rychle se dokázala naučit pracovat s naším vlastním
                frontend frameworkem a nedělalo jí sebemenší problém dodržovat námi
                nastavené best-practices pro psaní kódu.
                Především ale oceňuji to, že s týmem aktivně komunikovala a vždy se nad
                úkoly zamýšlela, proaktivně řešila zadanou práci a nezahazovala problémy
                pod koberec, což je u juniorních vývojářů opravdu výjimečná vlastnost. I
                přesto, že byla jediná holka v týmu, okamžitě se s ostatními vývojáři jala
                hodnotit kvalitu dílenského zpracování a estetičnost zaparkovaných vozidel
                před budovou. :) Díky za pomoc, Zuzko. "
            />

            <Reccomendation
                name="Ondrej Sika"
                link="https://ondrej-sika.cz"
                text="Zuzanka je dokonala"
            />
        </LayoutWrapper>
    </Wrapper>
);

export default References;
