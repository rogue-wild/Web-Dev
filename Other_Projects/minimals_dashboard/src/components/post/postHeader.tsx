import React from "react";
import { userData } from "../../services/dataService";
import { UserData } from "../../types/types";
import "../../styles/postHeader.css";
import Typography from '../../Typography/typography';

interface PostProps {
  date?: string;
}

const PostHeader: React.FC<PostProps> = ({ date }) => {
  return (
    <div className="postHeader">
      {userData.map(({ name, profile_pic }: UserData) => (
        <div className="headContent">
          <div>
            <img className="headerImg" src={profile_pic} alt="Post" />
          </div>
          <div className="userName">
            <Typography variant="h6">{name}</Typography>
            <Typography variant="text2">{date}</Typography>
          </div>
        </div>
      ))}
      
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 22"
        >
          <g id="iconifyReact62">
            <g id="iconifyReact63">
              <g id="iconifyReact64" fill="currentColor">
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="12" cy="5" r="2"></circle>
                <circle cx="12" cy="19" r="2"></circle>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default PostHeader;
