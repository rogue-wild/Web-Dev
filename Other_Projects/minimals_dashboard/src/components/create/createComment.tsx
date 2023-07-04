import React from "react";
// import Typography from '../../Typography/typography';
import { userData } from "../../services/dataService";
import { UserData } from "../../types/types";

export default function CreateComment() {
    return (
      <div>
        {userData.map(({ profile_pic }: UserData) => (
          <div>
            <img src={profile_pic} alt="Post" />
            <textarea></textarea>
          </div>
        ))}
      </div>
    );
}
