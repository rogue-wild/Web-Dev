import React from "react";
import postData from "../data/post.json";
import Card from "./card";
import { Post } from "../types/types";
import PostHeader from "./post/postHeader";
import PostContent from "./post/postContent";
import LikeShare from "./post/likeShare";
import Comment from "./post/comment";
import CreateComment from "../components/create/createComment";

export default function PostView() {
  const postsData: Post[] = postData.post;

  return (
    <div>
      {postsData.map((post) => (
        <Card key={post.postId}>
          <PostHeader />
          <PostContent
            date={post.date}
            caption={post.caption}
            image={post.image}
          />
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
