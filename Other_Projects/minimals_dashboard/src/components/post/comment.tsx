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
  margin: 0rem 1rem 0rem -1.5rem;
  @media (max-width: 600px) {
  margin: 0rem 1rem 0rem -2rem;
  }
`;

const CommentWrapper = styled.div`
  background-color: rgb(245, 245, 246);
  border-radius: 10px;
  margin-bottom: 0.7rem;
  font-size: 0.9rem;
  padding: 1rem 1rem 0rem 1rem;
  @media (max-width: 747px) {
    font-size: 0.7rem;
  }
`;

const CommentImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  padding: 0.5rem;
  @media (max-width: 700px) {
    width: 2rem;
  height: 2rem;
  }
`;

const CommentText = styled.p`
  color: #59656f;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const CommentDate = styled.span`
  color: #adadad;
  float: right;
  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
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
        <strong>{username}</strong> <CommentDate>10 Jul 2023</CommentDate>
        <CommentText>{comment}</CommentText>
      </CommentWrapper>
    </CommentContainer>
  );
};

export default Comment;
