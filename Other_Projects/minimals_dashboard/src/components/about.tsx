import React from "react";
import styled from 'styled-components';
import Typography from "../Typography/typography";
import { aboutData } from "../services/dataService";
import Card from './card';
import { AboutData } from "../types/types";

const AboutContainer = styled.div`
  margin-left: 1rem;
  text-align: left;
  position: relative;
  word-wrap: break-word;
  margin: -1.5rem 1rem 0rem 1rem;
`;

export default function About() {
  return (
    <div>
      {aboutData.map(({ email, location, about, occupation, company_name, studied_at }: AboutData) => (
        <Card key={email}>
          <AboutContainer>
            <Typography variant="h5">About</Typography>
            <Typography variant="text1">{about}</Typography>
            <Typography variant="text1">
              📍 Live at <strong>{location}</strong>
            </Typography>
            <Typography variant="text1">📧 {email}</Typography>
            <Typography variant="text1">💼 {occupation} at <strong>{company_name}</strong></Typography>
            <Typography variant="text1">🎓 Studied at <strong>{studied_at}</strong></Typography>
          </AboutContainer>
        </Card>
      ))}
    </div>
  );
}
