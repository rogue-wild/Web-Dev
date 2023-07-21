import React, { useState } from "react";
import styled from "styled-components";

interface LikeShareProps {
  likeNum: number;
}

const LikeShareContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: -1.5rem 0rem 1rem -0.5rem;
`;

const LikeInput = styled.input`
  display: none;
`;

const LikeLabel = styled.label<{ isLiked: boolean }>`
  cursor: pointer;
  font-size: 1rem;
  color: ${({ isLiked }) => (isLiked ? "red" : "grey")};
  margin-left: 1.5rem;
  padding: 0.3rem;
  &:hover {
    transition: 0.3s;
    background-color: #ffefec;
    border-radius: 45%;
    padding: 0.3rem;
  }
`;

const LikeNum = styled.span`
  margin-left: 0.5rem;
`;

const ShareButton = styled.button`
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  color: grey;
`;

const IconButton = styled.button`
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  color: grey;
  font-size: 1rem;
  padding: 0.5rem;

  &:hover {
    background-color: #eeeeee;
    border-radius: 50%;
  }
`;

const LikeShare: React.FC<LikeShareProps> = ({ likeNum }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  return (
    <LikeShareContainer>
      <span>
        <LikeInput
          type="checkbox"
          checked={isLiked}
          onChange={handleLikeToggle}
        />
        <LikeLabel isLiked={isLiked} onClick={handleLikeToggle}>
          ❤
        </LikeLabel>
        <LikeNum>{likeNum}</LikeNum>
      </span>
      <ShareButton>
        <IconButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1rem"
            height="1rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M22 12c0 5.523-4.477 10-10 10c-1.6 0-3.112-.376-4.452-1.044a1.634 1.634 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.633 1.633 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10ZM8 13a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm3-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </IconButton>{" "}
        <IconButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1rem"
            height="1rem"
            viewBox="0 -2 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M13.803 5.333c0-1.84 1.5-3.333 3.348-3.333A3.341 3.341 0 0 1 20.5 5.333c0 1.841-1.5 3.334-3.349 3.334a3.346 3.346 0 0 1-2.384-.994l-4.635 3.156a3.336 3.336 0 0 1-.182 1.917l5.082 3.34a3.346 3.346 0 0 1 2.12-.753a3.341 3.341 0 0 1 3.348 3.334C20.5 20.507 19 22 17.151 22a3.341 3.341 0 0 1-3.348-3.333a3.3 3.3 0 0 1 .289-1.356L9.05 14a3.346 3.346 0 0 1-2.202.821A3.34 3.34 0 0 1 3.5 11.487a3.34 3.34 0 0 1 3.348-3.333c1.064 0 2.01.493 2.623 1.261l4.493-3.059a3.317 3.317 0 0 1-.161-1.023Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </IconButton>
      </ShareButton>
    </LikeShareContainer>
  );
};

export default LikeShare;
