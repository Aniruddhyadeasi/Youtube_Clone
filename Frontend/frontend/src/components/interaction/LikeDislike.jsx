import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

const LikeDislike = ({ videoId, commentId }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => setLikes((prev) => prev + 1);
  const handleDislike = () => setDislikes((prev) => prev + 1);

  return (
    <div className="flex items-center space-x-4">
      <button onClick={handleLike} className="flex items-center space-x-1">
        <ThumbsUp className="h-5 w-5 text-indigo-600" />
        <span>{likes}</span>
      </button>
      <button onClick={handleDislike} className="flex items-center space-x-1">
        <ThumbsDown className="h-5 w-5 text-red-600" />
        <span>{dislikes}</span>
      </button>
    </div>
  );
};

export default LikeDislike;
