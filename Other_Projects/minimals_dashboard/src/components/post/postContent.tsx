import React from "react";

interface PostContentProps {
  date: string;
  caption: string;
  image: string;
}

const PostContent: React.FC<PostContentProps> = ({ date, caption, image }) => {
  return (
    <div className="PostContent">
      <p>{date}</p>
      <p>{caption}</p>
      <img src={image} alt="Post" />
    </div>
  );
};

export default PostContent;
