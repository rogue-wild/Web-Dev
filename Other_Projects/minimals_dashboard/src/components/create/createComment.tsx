import React from "react";
// import Typography from '../../Typography/typography';
import { userData } from "../../services/dataService";
import { UserData } from "../../types/types";
import "../../styles/createComment.css";

export default function CreateComment() {
    return (
      <div className="createComment">
        {userData.map(({ profile_pic }: UserData) => (
          <div>
            <img src={profile_pic} alt="Post" />
            
          </div>
        ))}
        <textarea></textarea>
      </div>
    );
}
