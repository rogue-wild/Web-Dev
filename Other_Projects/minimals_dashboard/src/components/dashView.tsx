import React from "react";
import styled from "styled-components";
import Typography from "../Typography/typography";

const DashViewWrapper = styled.div`
  margin: 1rem 1rem 0rem 1rem;
`;

const AboveText = styled.div`
  line-height: 0rem;
`;

const DashList = styled.ul`
  display: inline-flex;
  margin-left: -2rem;
`;

const DashListLi = styled.li`
  color: grey;
  list-style-position: inside;
  padding-left: 1rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: rgb(0, 0, 0);

  &:hover {
    color: rgb(0, 0, 0);
    text-decoration: underline;
  }
`;

function DashView() {
  return (
    <DashViewWrapper>
      <AboveText>
        <Typography variant="h4">Profile</Typography>
        <Typography variant="subheading1">
          <Link href="#dash">Dashboard</Link>
          <DashList>
            <DashListLi>
              <Link href="#user">User</Link>
            </DashListLi>
            <DashListLi>Jaydon Frankie</DashListLi>
          </DashList>
        </Typography>
      </AboveText>
    </DashViewWrapper>
  );
}

export default DashView;
