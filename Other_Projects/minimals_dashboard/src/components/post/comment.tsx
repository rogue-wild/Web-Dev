import React from 'react';

interface CommentProps {
  username?: string;
  profileImage?: string;
  comment?: string;
}

const Comment: React.FC<CommentProps> = ({ username, profileImage, comment }) => {
  return (
    <div className="Comment">
      <img src={profileImage} alt="Profile" />
      <div>
        <strong>{username}</strong>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
