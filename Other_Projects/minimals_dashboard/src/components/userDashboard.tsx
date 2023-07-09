import React from "react";
import Typography from "../Typography/typography";
import "../styles/userdashboard.css";
import { aboutData, userData } from "../services/dataService";
import { UserData, AboutData } from "../types/types";
import Card from "./card";

export default function UserDashboard() {
  return (
    <Card>
      <div className="headerItems">
        <div>
          <img className="profilePic"
            alt="Jaydon Frankie"
            src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_25.jpg"
          ></img>
        </div>
        <div className="headerInfo">
          {userData.map(({ name }: UserData) => (
            <Typography  variant="h5">
              {name}
            </Typography>
          ))}
          {aboutData.map(({ occupation }: AboutData) => (
            <Typography className="" variant="text2">
              {occupation}
            </Typography>
          ))}
        </div>
      </div>
      <div>
        <div className="tab">
          <button className="tablinks">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 -2 24 20"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4Zm3.25 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Zm1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM11 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2Z"
                clip-rule="evenodd"
              ></path>
            </svg>{" "}
            Profile
          </button>
        </div>
      </div>
    </Card>
  );
}
