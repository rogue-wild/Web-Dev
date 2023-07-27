import React from "react";
import styled from "styled-components";
import { userData } from "../../services/dataService";
import { UserData } from "../../types/types";
import Typography from "../../typography/typography";

interface PostProps {
  date?: string;
}

const PostHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 1rem 0rem 0rem;
`;

const HeaderImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: inline-block;
  @media (max-width: 600px) {
    width: 2rem;
    height: 2rem;
    margin-top: -0.5rem;
  }
`;

const HeadContent = styled.div`
  display: flex;
  margin: 0rem 0rem 0rem 1rem;
`;

const UserName = styled.div`
  margin: -2.5rem 0rem 0rem 1.5rem;
  text-align: left;
`;

const PostHeaderButton = styled.button`
  background-color: #fff;
  height: 40px;
  width: 40px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: rgb(41, 41, 41);

  &:hover {
    transition: 0.5s;
    background-color: #f0f0f0;
    border: none;
    border-radius: 50%;
  }
`;

const PostDate = styled(Typography)`
  margin: -1.7rem 0rem 0rem 0rem;
  color: #a4a4a4;
`;

const PostHeader: React.FC<PostProps> = ({ date }) => {
  return (
    <PostHeaderContainer className="postHeader">
      {userData.map(({ name, profile_pic }: UserData) => (
        <HeadContent className="headContent">
          <div>
            <HeaderImg className="headerImg" src={profile_pic} alt="Post" />
          </div>
          <UserName className="userName">
            <Typography variant="h6">{name}</Typography>
            <PostDate variant="text2">{date}</PostDate>
          </UserName>
        </HeadContent>
      ))}

      <PostHeaderButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 22"
        >
          <g id="iconifyReact62">
            <g id="iconifyReact63">
              <g id="iconifyReact64" fill="currentColor">
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="12" cy="5" r="2"></circle>
                <circle cx="12" cy="19" r="2"></circle>
              </g>
            </g>
          </g>
        </svg>
      </PostHeaderButton>
    </PostHeaderContainer>
  );
};

export default PostHeader;
