import React from "react";
import styled from "styled-components";
import { FaSmile, FaFileImage } from "react-icons/fa";
import { userData } from "../../services/dataService";
import { UserData } from "../../types/types";
import { useTranslation } from "react-i18next";

const CreateCommentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr;
  position: relative;
  z-index: 1;
  margin: 2rem 0rem 0rem 0.5rem;
  @media (max-width: 600px) {
    margin: 1.5rem 0rem 0rem 0.5rem;
  }
`;

const CommentTextarea = styled.textarea`
  resize: none;
  height: 1rem;
  border: #e8e8e8 2px solid;
  border-radius: 10px;
  margin: -1.5rem 0rem 0.5rem 0rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-family: "Public Sans", sans-serif;
  overflow: hidden;
  margin-right: 1rem;

  &:focus {
    outline: none;
  }
  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

const CommentImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  margin: -2.2rem 0rem 0rem 0.2rem;
  @media (max-width: 700px) {
    width: 2rem;
    height: 2rem;
  }
  @media (max-width: 600px) {
    margin: -2.2rem 0rem 0rem -0.2rem;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 40%;
  right: 1rem;
  transform: translateY(-120%);
  display: flex;
`;

const IconWrapper = styled.div`
  margin-right: 0.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  svg {
    color: #adadad;
    font-size: 1rem;
    @media (max-width: 600px) {
      font-size: 0.9rem;
    }
  }

  &:hover {
    svg {
      color: #818181;
    }
  }
`;
export default function CreateComment() {
  const { t } = useTranslation();

  return (
    <CreateCommentContainer className="createComment">
      {userData.map(({ profile_pic }: UserData) => (
        <div key={profile_pic}>
          <CommentImg src={profile_pic} alt="Post" />
        </div>
      ))}
      <CommentTextarea placeholder={t("writeComment")} />
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
