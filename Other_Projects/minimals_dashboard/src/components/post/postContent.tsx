import React from "react";
import styled from "styled-components";

interface PostContentProps {
  caption: string;
  image: string;
}

const PostContentContainer = styled.div`
  padding: 1rem;
  color: rgb(85, 85, 85);
  @media (max-width: 500px) {
  margin: 0rem -1rem 0rem -1rem;
  }
`;

const ContentImg = styled.img`
  border-radius: 16px;
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin: 1rem 0;
`;

const Caption = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 500px) {
  margin: 0rem 0.5rem 0rem 0.5rem;
  font-size: 0.8rem;
  text-align: justify;
  }
`;

const PostContent: React.FC<PostContentProps> = ({ caption, image }) => {
  return (
    <PostContentContainer className="PostContent">
      <Caption>{caption}</Caption>
      <ContentImg src={image} alt="Post" />
    </PostContentContainer>
  );
};

export default PostContent;
