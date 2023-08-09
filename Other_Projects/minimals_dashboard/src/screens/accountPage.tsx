import React from "react";
import styled from "styled-components";
import Typography from "../components/typography/typography";
import { useTranslation } from "react-i18next";
import Card from "../styles/card";

const DashViewWrapper = styled.div`
  margin: 3rem 1rem 0rem 7rem;
  @media (max-width: 1100px) {
    margin: 4rem 1rem 0rem 2rem;
  }
  @media (max-width: 500px) {
    margin: 3.5rem 1rem 0rem 1rem;
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

const AppCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  @media (max-width: 600px) {
    margin: 5rem 0rem 2rem 4rem;
  }
`;

const Tab = styled.div`
  overflow: hidden;
  margin-bottom: 2rem;
`;

const TabButton = styled.button`
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 20px;
  transition: 0.3s;
  color: rgb(117, 117, 117);
  font-size: 1rem;
  border-bottom: #ffffff 5px solid;

  &:hover {
    color: #444444;
    background-color: #fdfdfd;
    border-bottom: #444444 3px solid;
  }
`;

const ProfilePic = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  margin: 2rem 0rem 1rem 0rem;
  border: #f4f4f4 5px double;
  @media (max-width: 1047px) {
    width: 3rem;
    height: 3rem;
  }
`;

function AccountPage() {
  const { t } = useTranslation();

  return (
    <DashViewWrapper>
      <AboveText>
        <Typography variant="h4">{t("account")}</Typography>
        <Typography variant="subheading1">
          <Link href="#dash">{t("dashboard")}</Link>
          <DashList>
            <DashListLi>
              <Link href="#user">{t("user")}</Link>
            </DashListLi>
            <DashListLi>{t("account")}</DashListLi>
          </DashList>
        </Typography>
      </AboveText>
      <Tab>
        <TabButton>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 -2 25 19"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4Zm3.25 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Zm1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM11 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2Z"
                clipRule="evenodd"
              ></path>
            </svg>{" "}
            General
          </span>
        </TabButton>
      </Tab>
      <AppCard>
        <Card>
          <ProfilePic
            alt="Jaydon Frankie"
            src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_25.jpg"
          ></ProfilePic>
          <Typography variant="text2">
            Allowed *.jpeg, *.jpg, *.png, *.gif
          </Typography>
          <Typography variant="text2">max size of 3.1 MB</Typography>
          <Typography variant="text1">Public Profile</Typography>
        </Card>
        <Card>
          <div>
            <input type="text" placeholder="Email address" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
        </Card>
      </AppCard>
    </DashViewWrapper>
  );
}

export default AccountPage;
