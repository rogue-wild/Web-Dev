import React from "react";
import { userData } from "../../services/dataService";
import { UserData } from "../../types/types";

interface PostProps {
  className?: string;
}

const PostHeader: React.FC<PostProps> = ({ className }) => {
  const classes = `PostHeader ${className || ""}`;

  return (
    <div>
      {userData.map(({ name, profile_pic }: UserData) => (
        <div className={classes}>
          <h3>{name}</h3>
          <img src={profile_pic} alt="Post" />
          <button>Menu</button>
        </div>
      ))}
    </div>
  );
};

export default PostHeader;
