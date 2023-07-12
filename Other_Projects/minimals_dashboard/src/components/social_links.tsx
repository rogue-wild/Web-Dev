import React from "react";
import styled from "styled-components";
import Typography from "../Typography/typography";
import { socialLinksData } from "../services/dataService";
import { SocialLinksData } from "../types/types";
import Card from "./card";

const LinkContent = styled.div`
  text-align: left;
  word-wrap: break-word;
  margin: -1.5rem 1rem 0rem 1rem;
`;

export default function SocialLinks() {
  return (
    <div>
      {socialLinksData.map(
        ({ facebook, instagram, linkedin, twitter }: SocialLinksData) => (
          <Card key={`${facebook}-${instagram}-${linkedin}-${twitter}`}>
            <LinkContent>
              <Typography variant="h5">Social</Typography>
              <Typography variant="text1">🔗 {facebook}</Typography>
              <Typography variant="text1">📸 {instagram}</Typography>
              <Typography variant="text1">👔 {linkedin}</Typography>
              <Typography variant="text1">🐤 {twitter}</Typography>
            </LinkContent>
          </Card>
        )
      )}
    </div>
  );
}
