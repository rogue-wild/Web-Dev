import React from "react";
import Typography from "../Typography/typography";
import "../styles/social_metrics.css";
import {socialMetricsData} from "../services/dataService";
import { SocialMetricsData } from "../types/types";
import Card from './card';


export default function SocialMetrics() {
  return (
    <div>
      {socialMetricsData.map(
          ({
            followers,
            following,
          }: SocialMetricsData) => (
            <Card>
              <div className="content">
                <Typography variant="h5">{followers}</Typography>
                <Typography variant="text2">Followers</Typography>
              </div>
              <div className="line"></div>
              <div className="content">
                <Typography variant="h5">{following}</Typography>
                <Typography variant="text2">Following</Typography>
              </div>
            </Card>
          )
        )}
    </div>
  );
}
