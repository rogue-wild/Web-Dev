import React from "react";
import styled from "styled-components";
import Typography from "../typography/typography";
import { useTranslation } from "react-i18next";

const DashViewWrapper = styled.div`
  margin: 1rem 1rem 0rem 1rem;
  @media (max-width: 500px) {
    margin: 4rem 1rem 0rem 1rem;
  }
`;

const AboveText = styled.div`
  line-height: 0rem;
`;

const DashList = styled.ul`
  display: inline-flex;
  margin-left: -2rem;
`;

const DashListLi = styled.li`
  color: grey;
  list-style-position: inside;
  padding-left: 1rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: rgb(0, 0, 0);

  &:hover {
    color: rgb(0, 0, 0);
    text-decoration: underline;
  }
`;

function DashView() {
  const { t } = useTranslation();

  return (
    <DashViewWrapper>
      <AboveText>
        <Typography variant="h4">{t("profile")}</Typography>
        <Typography variant="subheading1">
          <Link href="#dash">{t("dashboard")}</Link>
          <DashList>
            <DashListLi>
              <Link href="#user">{t("user")}</Link>
            </DashListLi>
            <DashListLi>Jaydon Frankie</DashListLi>
          </DashList>
        </Typography>
      </AboveText>
    </DashViewWrapper>
  );
}

export default DashView;
