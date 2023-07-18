import React, { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

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
  box-shadow: 1px 4px 12px -2px ${colors.shadow.primary};
`;

const Card: React.FC<CardProps> = ({ children, className }) => {
  const classes = `${className || ""}`;

  return <StyledCard className={classes}>{children}</StyledCard>;
};

export default Card;
