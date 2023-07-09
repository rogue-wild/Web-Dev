import React from "react";
import Typography from "../Typography/typography";
import {socialLinksData} from "../services/dataService";
import { SocialLinksData } from "../types/types";
import "../styles/social_links.css";
import Card from './card';

export default function SocialLinks() {
  return (
    <div>
      {socialLinksData.map(
          ({
            facebook,
            instagram,
            linkedin,
            twitter,
          }: SocialLinksData) => (
            <Card>
              <div className="linkContent">
                <Typography variant="h6">Social</Typography>
                <Typography variant="text1">🔗 {facebook}</Typography>
                <Typography variant="text1">📸 {instagram}</Typography>
                <Typography variant="text1">👔 {linkedin}</Typography>
                <Typography variant="text1">🐤 {twitter}</Typography>
              </div>
            </Card>
          )
        )}
    </div>
  );
}
