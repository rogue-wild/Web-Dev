import React from "react";
import styled from "styled-components";

interface CommentProps {
  username?: string;
  profileImage?: string;
  comment?: string;
}

const CommentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr;
  margin-left: -1rem;
`;

const CommentWrapper = styled.div`
  background-color: rgb(245, 245, 246);
  border-radius: 10px;
  margin-bottom: 0.7rem;
  margin-right: 1rem;
  font-size: 0.9rem;
  padding: 0.5rem;
  @media (max-width: 747px) {
    margin-left: 1rem;
  }
`;

const CommentImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`;

const CommentText = styled.p`
  color: grey;
`;

const Comment: React.FC<CommentProps> = ({
  username,
  profileImage,
  comment,
}) => {
  return (
    <CommentContainer>
      <CommentImg src={profileImage} alt="Profile" />
      <CommentWrapper>
        <strong>{username}</strong>
        <CommentText>{comment}</CommentText>
      </CommentWrapper>
    </CommentContainer>
  );
};

export default Comment;
