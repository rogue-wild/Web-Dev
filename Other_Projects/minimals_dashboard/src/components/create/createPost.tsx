import React from "react";
import styled from "styled-components";
import Typography from "../../Typography/typography";
import Card from "../card";

const TextPost = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  textarea {
    overflow: hidden;
    resize: none;
    height: 6rem;
    border: #e8e8e8 2px solid;
    border-radius: 10px;
    margin: 0.2rem 0rem 1rem 0rem;
    padding: 0.8rem 0rem 0rem 0.5rem;
    font-family: "Public Sans", sans-serif;
    overflow: hidden;

    &:focus {
      outline: none;
    }
  }
`;

const PostButton = styled.button`
  border-radius: 30px;
  margin: 0.5rem;
  padding: 0rem 0.5rem;
  font-weight: bold;
  border: none;
  background-color: rgb(245, 245, 246);
  &:hover {
    transition: 0.3s;
    background-color: rgb(223, 223, 223);
    color: rgb(53, 53, 54);
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
  margin: 0.5rem;
  float: right;
  font-weight: bold;
  padding: 0.7rem;
  background-color: rgb(53, 53, 54);
  color: #ffffff;
  font-size: 1rem;
  border: none;
  &:hover {
    transition: 0.3s;
    background-color: rgb(73, 73, 74);
  }
`;

export default function CreatePost() {
  return (
    <Card>
      <TextPost>
        <textarea placeholder="Share what you are thinking here..."></textarea>
      </TextPost>
      <div>
        <ImageVideoButton>
          <Typography variant="text2">🖼️ Image/Video</Typography>
        </ImageVideoButton>
        <StreamingButton>
          <Typography variant="text2">📹 Streaming</Typography>
        </StreamingButton>
        <PostBtn>Post</PostBtn>
      </div>
    </Card>
  );
}
