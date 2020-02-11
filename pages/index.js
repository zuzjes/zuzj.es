import Head from "next/head";
import Gauges from "../components/Gauges";
import GoogleAnalytics from "../components/GoogleAnalytics";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import { LayoutWrapper } from "../components/LayoutWrapper";
import { A } from "../components/A";
import { Button } from "../components/Button";

const MainHeader = styled.h1`
    font-size: 3em;
    color: floralwhite;
`;
const Wrapper = styled.div`
    background: #4e4e4e;
    padding-bottom: 1000px;
    color: #ccd9bf;
`;

const SocialNetworkLink = styled.a`
    color: #fffaf0;
    &:hover {
        font-weight: bold;
        text-decoration: none;
        color: #ccd9bf;
    }
    ::after {
        content: " - ";
    }
    :last-child:after {
        content: " ";
    }
`;
export default () => {
    return (
        <>
            <Head>
                <title>Zuzka Jeschke - zuzj.es</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Cutive+Mono&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Wrapper>
                <LayoutWrapper>
                    <MainHeader>Zuzka Jeschke</MainHeader>

                    <SocialNetworkLink href="https://t.me/zuzjes">
                        Telegram
                    </SocialNetworkLink>
                    <SocialNetworkLink href="https://www.linkedin.com/in/zuzjes/">
                        Linkedin
                    </SocialNetworkLink>
                    <SocialNetworkLink href="https://www.facebook.com/zuzka.jeschke">
                        Facebook
                    </SocialNetworkLink>
                    <SocialNetworkLink href="https://twitter.com/zuzjes">
                        Twitter
                    </SocialNetworkLink>
                    <SocialNetworkLink href="https://www.instagram.com/zuzjes/">
                        Instagram
                    </SocialNetworkLink>

                    <Button href="/references">Reference</Button>
                    <Button href="https://www.instagram.com/zuz_kytky/">
                        Moje rostlinná sbírka
                    </Button>
                    <Button href="https://zuzjes.com/static/resume-zuzana-jeschke.pdf">CV</Button>
                    <Button href="/facturation">Fakturační údaje</Button>
                </LayoutWrapper>
            </Wrapper>
            <Gauges gauges_site_id="5c4c99e1e2780409622de4ab" />
            <GoogleAnalytics google_analytics_site_id="UA-133283927-1" />
        </>
    );
};
