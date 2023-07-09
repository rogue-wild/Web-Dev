import React from "react";
import "../../styles/postContent.css"

interface PostContentProps {
  caption: string;
  image: string;
}

const PostContent: React.FC<PostContentProps> = ({ caption, image }) => {
  return (
    <div className="PostContent">
      <p>{caption}</p>
      <img className="contentImg" src={image} alt="Post" />
    </div>
  );
};

export default PostContent;
