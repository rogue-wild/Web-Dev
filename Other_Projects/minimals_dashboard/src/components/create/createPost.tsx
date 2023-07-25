import React from "react";
import styled from "styled-components";
import Typography from "../../Typography/typography";
import Card from "../card";
import { colors } from "../../styles/colors";
import { useTranslation } from "react-i18next";

const TextPost = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  textarea {
    overflow: hidden;
    resize: none;
    height: 6rem;
    border: #e8e8e8 2px solid;
    border-radius: 10px;
    margin: 1rem 1rem 1rem 1rem;
    padding: 0.8rem 0rem 0rem 0.5rem;
    font-family: "Public Sans", sans-serif;
    overflow: hidden;

    &:focus {
      outline: none;
    }
    @media (max-width: 600px) {
      margin: 0.5rem 0rem 1rem 0rem;
      font-size: 0.8rem;
    }
  }
`;

const PostButton = styled.button`
  border-radius: 30px;
  margin: 1rem;
  padding: 0rem 0.5rem;
  font-weight: bold;
  border: none;
  background-color: rgb(245, 245, 246);
  &:hover {
    transition: 0.3s;
    background-color: rgb(223, 223, 223);
    color: rgb(53, 53, 54);
  }
  @media (max-width: 500px) {
    margin: 0.1rem;
  }
`;

const ImageVideoButton = styled(PostButton)`
  background-color: rgb(245, 245, 246);
`;

const StreamingButton = styled(PostButton)`
  background-color: rgb(245, 245, 246);
`;

const PostBtn = styled.button`
  border-radius: 10px;
  margin: 0.7rem 1rem 0rem 1rem;
  float: right;
  font-weight: bold;
  padding: 0.7rem;
  background-color: rgb(53, 53, 54);
  color: ${colors.text.primary};
  font-size: 1rem;
  border: none;
  &:hover {
    transition: 0.3s;
    background-color: rgb(73, 73, 74);
  }
  @media (max-width: 500px) {
    margin: 0.1rem;
    font-size: 0.6rem;
  }
`;

export default function CreatePost() {
  const { t } = useTranslation();

  return (
    <Card>
      <TextPost>
        <textarea placeholder={t("writeComment")}></textarea>
      </TextPost>
      <div>
        <ImageVideoButton>
          <Typography variant="text2">{t("imageVideo")}</Typography>
        </ImageVideoButton>
        <StreamingButton>
          <Typography variant="text2">{t("streaming")}</Typography>
        </StreamingButton>
        <PostBtn>{t("post")}</PostBtn>
      </div>
    </Card>
  );
}
