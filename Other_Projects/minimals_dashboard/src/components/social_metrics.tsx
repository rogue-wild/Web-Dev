import React from "react";
import styled from "styled-components";
import Typography from "../Typography/typography";
import { socialMetricsData } from "../services/dataService";
import { SocialMetricsData } from "../types/types";
import Card from "./card";

const AlignDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 0rem 0rem 0rem 0rem;
  @media (max-width: 1047px) {
    gap: 6rem;
  }
  @media (max-width: 447px) {
    gap: 4rem;
  }
`;

const Line = styled.div`
  border-width: 0px 1px 0px 0px;
  border-color: rgba(146, 146, 146, 0.2);
  border-style: dashed;
  height: 4rem;
`;

const Content = styled.div`
  margin-top: -1rem;
  text-align: center;
`;

const FollowerCount = styled(Typography)`
  margin-bottom: -0.5rem;
`;

export default function SocialMetrics() {
  return (
    <div>
      {socialMetricsData.map(({ followers, following }: SocialMetricsData) => (
        <Card key={`${followers}-${following}`}>
          <AlignDiv>
            <Content>
              <FollowerCount variant="h5">
                {followers.toLocaleString("en-US")}
              </FollowerCount>
              <Typography variant="text2">Followers</Typography>
            </Content>
            <Line></Line>
            <Content>
              <FollowerCount variant="h5">
                {following.toLocaleString("en-US")}
              </FollowerCount>
              <Typography variant="text2">Following</Typography>
            </Content>
          </AlignDiv>
        </Card>
      ))}
    </div>
  );
}
