import React from "react";
import styled from "styled-components";
import Typography from "../../typography/typography";
import { aboutData } from "../../services/dataService";
import Card from "../../styles/card";
import { AboutData } from "../../types/types";
import { useTranslation } from "react-i18next";

const AboutContainer = styled.div`
  margin-left: 1rem;
  text-align: left;
  position: relative;
  word-wrap: break-word;
  margin: -1.5rem 1rem 0rem 1rem;
`;

export default function About() {
  const { t } = useTranslation();

  return (
    <div>
      {aboutData.map(
        ({
          email,
          location,
          about,
          occupation,
          company_name,
          studied_at,
        }: AboutData) => (
          <Card key={email}>
            <AboutContainer>
              <Typography variant="h5">{t("about")}</Typography>
              <Typography variant="text1">{about}</Typography>
              <Typography variant="text1">
                {t("location")} <strong>{location}</strong>
              </Typography>
              <Typography variant="text1">
                {t("email")} {email}
              </Typography>
              <Typography variant="text1">
                {t("occupation")} <strong>{occupation}</strong> {t("at")}{" "}
                <strong>{company_name}</strong>
              </Typography>
              <Typography variant="text1">
                {t("studiedAt")} <strong>{studied_at}</strong>
              </Typography>
            </AboutContainer>
          </Card>
        )
      )}
    </div>
  );
}
