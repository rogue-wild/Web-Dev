import React from "react";
import Typography from '../../Typography/typography';
import Card from "../card";

export default function CreatePost() {
  return (
    <Card>
        <textarea></textarea>
        <button><Typography variant="text2">🖼️ Image/Video</Typography></button>
        <button><Typography variant="text2">📹 Streaming</Typography></button>
        <button><Typography variant="text2">Post</Typography></button>
    </Card>
  );
}
