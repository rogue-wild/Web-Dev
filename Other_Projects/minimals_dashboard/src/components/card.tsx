import React, { ReactNode } from "react";
import styled from "styled-components";
import { GREY, colors } from "../styles/colors";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const StyledCard = styled.div`
  border-style: solid;
  border-color: ${colors.border.primary};
  border-width: 2px;
  border-radius: 16px;
  padding: 0.5rem;
  margin: 1rem;
  box-shadow: 1px 4px 10px -2px ${GREY[200]};
`;

const Card: React.FC<CardProps> = ({ children, className }) => {
  const classes = `${className || ""}`;

  return <StyledCard className={classes}>{children}</StyledCard>;
};

export default Card;
