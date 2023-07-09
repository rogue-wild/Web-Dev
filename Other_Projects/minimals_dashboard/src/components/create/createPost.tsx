import React from "react";
import Typography from "../../Typography/typography";
import Card from "../card";
import "../../styles/createPost.css";

export default function CreatePost() {
  return (
    <Card>
      <div className="textPost">
        <textarea placeholder="Share what you are thinking here..."></textarea>
      </div> 
      <div className="postBtn"> <button className="postBtn1">
        <Typography  variant="text2">🖼️ Image/Video</Typography>
      </button>
      <button className="postBtn2">
        <Typography  variant="text2">📹 Streaming</Typography>
      </button>
      <button className="postBtn3">Post</button></div>
    </Card>
  );
}
