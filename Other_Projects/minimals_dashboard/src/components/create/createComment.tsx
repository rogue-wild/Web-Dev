import React from "react";
import styled from "styled-components";
import { FaSmile, FaFileImage } from "react-icons/fa";
import { userData } from "../../services/dataService";
import { UserData } from "../../types/types";

const CreateCommentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr;
  position: relative;
  margin-left: -1rem;
`;

const CommentTextarea = styled.textarea`
  resize: none;
  height: 1rem;
  border: #e8e8e8 2px solid;
  border-radius: 10px;
  margin: 0rem 0rem 0.7rem 1rem;
  padding: 0.5rem;
  font-family: "Public Sans", sans-serif;
  overflow: hidden;
  position: relative;
  margin-right: 1rem;

  &:focus {
    outline: none;
  }
`;

const CommentImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: -0.2rem 0.5rem 0rem 2.5rem;
  @media (max-width: 700px) {
    margin: -0.2rem 0.2rem 0rem 2.5rem;
  }
  @media (min-width: 1400px) {
    margin: -0.2rem 1.5rem 0rem 2.5rem;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 40%;
  right: 1rem;
  transform: translateY(-50%);
  display: flex;
`;

const IconWrapper = styled.div`
  margin-right: 0.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  svg {
    color: #959595;
    font-size: 1rem;
  }

  &:hover {
    svg {
      color: #222222;
    }
  }
`;

export default function CreateComment() {
  return (
    <CreateCommentContainer className="createComment">
      {userData.map(({ profile_pic }: UserData) => (
        <div key={profile_pic}>
          <CommentImg src={profile_pic} alt="Post" />
        </div>
      ))}
      <CommentTextarea placeholder="Write a comment here..." />
      <IconContainer>
        <IconWrapper>
          <FaFileImage />
        </IconWrapper>
        <IconWrapper>
          <FaSmile />
        </IconWrapper>
      </IconContainer>
    </CreateCommentContainer>
  );
}
