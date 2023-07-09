import React from "react";
import Typography from "../Typography/typography";

import {socialMetricsData} from "../services/dataService";
import { SocialMetricsData } from "../types/types";
import Card from './card';
import "../styles/social_metrics.css";


export default function SocialMetrics() {
  return (
    <div>
      {socialMetricsData.map(
          ({
            followers,
            following,
          }: SocialMetricsData) => (
            <Card>
              <div className="alignDiv">
              <div className="content">
                <Typography variant="h5">{followers.toLocaleString("en-US")}</Typography>
                <Typography variant="text2">Followers</Typography>
              </div>
              <div className="line"></div>
              <div className="content">
                <Typography variant="h5">{following.toLocaleString("en-US")}</Typography>
                <Typography variant="text2">Following</Typography>
              </div>
              </div>
             
            </Card>
          )
        )}
    </div>
  );
}
