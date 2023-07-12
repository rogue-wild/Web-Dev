import React from "react";
import styled from "styled-components";

interface PostContentProps {
  caption: string;
  image: string;
}

const PostContentContainer = styled.div`
  padding: 1rem;
  color: rgb(85, 85, 85);
`;

const ContentImg = styled.img`
  border-radius: 16px;
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin: 1rem 0;
`;

const PostContent: React.FC<PostContentProps> = ({ caption, image }) => {
  return (
    <PostContentContainer className="PostContent">
      <p>{caption}</p>
      <ContentImg src={image} alt="Post" />
    </PostContentContainer>
  );
};

export default PostContent;
