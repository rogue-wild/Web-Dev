import React from "react";
import styled from "styled-components";
import Typography from "../typography/typography";
import { aboutData, userData } from "../../services/dataService";
import { UserData, AboutData } from "../../types/types";
import Card from "../../styles/card";

const HeaderItems = styled.div`
  display: flex;
  height: 100%;
  color: rgb(255, 255, 255);
  background: linear-gradient(rgba(0, 75, 80, 0.8), rgba(0, 75, 80, 0.8)),
    url(https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_4.jpg);
  padding: 3rem 0rem 0rem 0rem;
  margin: -0.5rem -0.5rem 0rem -0.5rem;
  border-radius: 16px 16px 0px 0px;
  @media (max-width: 1047px) {
    padding: 3rem 0rem 0rem 0rem;
  }
`;

const HeaderContainer = styled.div`
  @media (max-width: 1047px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;

const ProfilePic = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  object-fit: cover;
  margin: 5rem 0 0 1.5rem;
  border: #eeeeee 3px solid;
  position: absolute;
  z-index: 0;
  @media (max-width: 1047px) {
    width: 3rem;
    height: 3rem;
    margin: 4rem 0rem 0rem -1.5rem;
  }
`;

const HeaderInfo = styled.div`
  margin-left: 11rem;
  margin-top: 7rem;
  color: white;
  line-height: 0.2rem;
  @media (max-width: 1047px) {
    text-align: center;
    margin: 8rem auto 2rem auto;
  }
`;

const Tab = styled.div`
  overflow: hidden;
  margin-bottom: -0.5rem;
  border-top: #eeeeee 1px solid;
`;

const TabButton = styled.button`
  background-color: inherit;
  float: right;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 20px;
  transition: 0.3s;
  color: rgb(38, 38, 38);
  font-size: 1rem;
  border-bottom: #ffffff 3px solid;

  &:hover {
    background-color: #fdfdfd;
    border-bottom: #444444 3px solid;
  }
`;

const PostOccupation = styled(Typography)`
  margin: 0rem 0rem 1.5rem 0rem;
  color: #a4a4a4;
`;

export default function UserDashboard() {
  return (
    <Card>
      <HeaderItems>
        <HeaderContainer>
          <div>
            <ProfilePic
              alt="Jaydon Frankie"
              src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_25.jpg"
            ></ProfilePic>
          </div>
          <HeaderInfo>
            {userData.map(({ name }: UserData) => (
              <Typography variant="h4" key={name}>
                {name}
              </Typography>
            ))}
            {aboutData.map(({ occupation }: AboutData) => (
              <PostOccupation
                className=""
                variant="subheading2"
                key={occupation}
              >
                {occupation}
              </PostOccupation>
            ))}
          </HeaderInfo>
        </HeaderContainer>
      </HeaderItems>
      <div>
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
              Profile
            </span>
          </TabButton>
        </Tab>
      </div>
    </Card>
  );
}
