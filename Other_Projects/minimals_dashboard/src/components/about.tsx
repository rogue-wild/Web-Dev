import React from "react";
import Typography from "../Typography/typography";
import data from "../data/data.json";
import "../styles/about.css";

export default function About() {
  return (
    <div>
      {data &&
        data.about.map(
          ({
            email,
            location,
            about,
            occupation,
            company_name,
            studied_at,
          }: {
            email: string;
            location: string;
            about: string;
            occupation: string;
            company_name: string;
            studied_at: string;
          }) => (
            <div className="card">
              <div className="content">
                <Typography variant="h6">About</Typography>
                <Typography variant="text1">{about}</Typography>
                <Typography variant="text1">
                  📍 Live at <strong>{location}</strong>
                </Typography>
                <Typography variant="text1">📧 {email}</Typography>
                <Typography variant="text1">⚒️ {occupation}</Typography>
                <Typography variant="text1">💼 {company_name}</Typography>
                <Typography variant="text1">🎓 {studied_at}</Typography>
              </div>
            </div>
          )
        )}
    </div>
  );
}
