import React from "react";
import Typography from "../Typography/typography";
import data from "../data/data.json";
import "../styles/social_metrics.css";

export default function SocialMetrics() {
  return (
    <div>
      {data &&
        data.social_metrics.map(
          ({
            followers,
            following,
          }: {
            followers: number;
            following: number;
          }) => (
            <div className="card">
              <div className="content">
                <Typography variant="h5">{followers}</Typography>
                <Typography variant="text2">Followers</Typography>
              </div>
              <div className="line"></div>
              <div className="content">
                <Typography variant="h5">{following}</Typography>
                <Typography variant="text2">Following</Typography>
              </div>
            </div>
          )
        )}
    </div>
  );
}
