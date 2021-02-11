import Head from "next/head";
import React, { useState } from "react";
import Gauges from "../components/Gauges";
import GoogleAnalytics from "../components/GoogleAnalytics";
import styled, { createGlobalStyle } from "styled-components";
import Router from "next/router";
import Checkbox from "../components/Checkbox";
import checkbox_yml from "../assets/data/checklist.yml";
const GlobalStyle = createGlobalStyle`
  body {
    font-size: 1.5em;
  }
`;
const Container = styled.div`
  padding: 2.5em 2em;
  font-family: "IBM Plex Sans", sans-serif;
  max-width: 800px;
  @media (max-width: 600px) {
    padding: 0 1em;
  }
`;
const Header = styled.h1`
  font-size: 2.8em;
  margin-block-end: 0.2em;
  margin-block-start: 0em;
`;

const Back = styled.a`
  color: #088958;
  cursor: pointer;
  text-decoration: none;
  :hover {
    color: #044d30;
  }
`;

const ChecklistsPage = props => {
  const [open, setOpen] = useState(false);
  const onClick = () => setOpen(!open);
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Zuzka Jeschke - zuzj.es</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Header>Checklisty</Header>
        <Back href="/">&#8249; Back</Back>
        {checkbox_yml.map((item, i) => (
          <div key={i}>
            <a onClick={onClick} >
              <h2>{item.name}</h2>
            </a>
            {open ? (
              <div>
                <Checkbox item={item.checklist}  />
              </div>
            ) : (
              <p>zavreno</p>
            )}
          </div>
        ))}
      </Container>
      <Gauges gauges_site_id="5c4c99e1e2780409622de4ab" />
      <GoogleAnalytics google_analytics_site_id="UA-133283927-1" />
    </>
  );
};
export default ChecklistsPage;
