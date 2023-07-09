import React from 'react';
import '../../styles/likeShare.css';

interface LikeShareProps {
  likeNum: number;
}

const LikeShare: React.FC<LikeShareProps> = ({ likeNum }) => {
  return (
    <div className="LikeShare">
      <span><input id="heart" type="checkbox" />
<label htmlFor="heart">❤</label></span>
      <span className='likeNum'>{likeNum}</span>
      <button>Share</button>
    </div>
  );
};

export default LikeShare;
