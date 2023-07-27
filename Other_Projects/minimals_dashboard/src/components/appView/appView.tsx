import React from "react";
import styled from "styled-components";
import Typography from "../../typography/typography";
import Card from "../../styles/card";

const AppCard = styled(Card)`
    display: flex;
    flex-direction: column;
    width: 80%;
    background-color: #e4fff2;
    margin: 8rem;
   @media (max-width: 600px) {
    margin: 5rem 0rem 2rem 4rem;
    width: 70%;
  }
`;

const LinkContent = styled.div`
  text-align: left;
  word-wrap: break-word;
  margin: 2rem;
  color: #00ba54;
`;

export default function SocialLinks() {
  return (
        <AppCard>
            <LinkContent>
              <Typography variant="h2">App</Typography>
              <Typography variant="text1">This is the AppView Page.</Typography>
            </LinkContent>
          </AppCard>
  );
}
