import React from "react";
import postData from "../../data/post.json";
import Card from "../../styles/card";
import { Post } from "../../types/types";
import PostHeader from "./postHeader";
import PostContent from "./postContent";
import LikeShare from "./likeShare";
import Comment from "./comment";
import CreateComment from "../create/createComment";

export default function PostView() {
  const postsData: Post[] = postData.post;

  return (
    <div>
      {postsData.map((post) => (
        <Card key={post.postId}>
          <PostHeader date={post.date} />
          <PostContent caption={post.caption} image={post.image} />
          <LikeShare likeNum={post.likes} />
          <ul>
            {post.comments.map((comment) => (
              <div>
                <Comment
                  profileImage={comment.profile_pic}
                  username={comment.user}
                  comment={comment.comment}
                />
              </div>
            ))}
          </ul>
          <CreateComment />
        </Card>
      ))}
    </div>
  );
}
