import React from 'react';

interface LikeShareProps {
  likeNum: number;
}

const LikeShare: React.FC<LikeShareProps> = ({ likeNum }) => {
  return (
    <div className="LikeShare">
      <span>{likeNum} Likes</span>
      <button>Share</button>
    </div>
  );
};

export default LikeShare;
