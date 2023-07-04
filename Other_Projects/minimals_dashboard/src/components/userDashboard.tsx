import React from "react";
import Typography from "../Typography/typography";
import "../styles/social_metrics.css";
import { aboutData, userData } from "../services/dataService";
import { UserData, AboutData } from "../types/types";
import Card from "./card";

export default function UserDashboard() {
  return (
    <Card>
        <img alt="Jaydon Frankie" src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_25.jpg"></img>
      {userData.map(({ name }: UserData) => (
        <Typography variant="h5">{name}</Typography>
      ))}
      {aboutData.map(({ occupation }: AboutData) => (
        <Typography variant="text2">{occupation}</Typography>
      ))}
    </Card>
  );
}
