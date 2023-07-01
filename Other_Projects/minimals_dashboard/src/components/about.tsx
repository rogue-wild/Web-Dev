import React from "react";
import Typography from "../Typography/typography";
import {aboutData} from "../services/dataService";
import "../styles/about.css";
import { AboutData } from "../types/types";
import Card from './card';


export default function About() {
  return (
    <div>
      {aboutData.map(
          ({
            email,
            location,
            about,
            occupation,
            company_name,
            studied_at,
          }:AboutData) => (
            <Card>
              <div>
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
            </Card>
          )
        )}
    </div>
  );
}
