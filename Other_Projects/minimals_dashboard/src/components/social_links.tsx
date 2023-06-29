import React from "react";
import Typography from "../Typography/typography";
import data from "../data/data.json";
import "../styles/social_links.css";

export default function SocialLinks() {
  return (
    <div>
      {data &&
        data.social_links.map(
          ({
            facebook,
            instagram,
            linkedin,
            twitter,
          }: {
            facebook: string;
            instagram: string;
            linkedin: string;
            twitter: string;
          }) => (
            <div className="card">
              <div className="content">
                <Typography variant="h6">Social</Typography>
                <Typography variant="text1">🔗 {facebook}</Typography>
                <Typography variant="text1">📸 {instagram}</Typography>
                <Typography variant="text1">👔 {linkedin}</Typography>
                <Typography variant="text1">🐤 {twitter}</Typography>
              </div>
            </div>
          )
        )}
    </div>
  );
}
