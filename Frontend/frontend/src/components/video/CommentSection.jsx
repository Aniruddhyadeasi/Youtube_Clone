import React, { useState, useEffect } from 'react';
import LikeDislike from '../interaction/LikeDislike';

const CommentsSection = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(`/api/v1/comments/${videoId}`);
      const data = await response.json();
      setComments(data.data);
    };

    fetchComments();
  }, [videoId]);

  const handleAddComment = async () => {
    const response = await fetch(`/api/v1/comments/${videoId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: newComment }),
    });

    if (response.ok) {
      const newCommentData = await response.json();
      setComments((prev) => [newCommentData.data, ...prev]);
      setNewComment('');
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <h2 className="text-lg font-semibold">Comments</h2>
      <div className="mt-4">
        <textarea
          rows="3"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full border rounded p-2"
        ></textarea>
        <button
          onClick={handleAddComment}
          className="bg-indigo-600 text-white px-4 py-2 mt-2 rounded"
        >
          Add Comment
        </button>
      </div>
      <div className="mt-4">
        {comments.map((comment) => (
          <div key={comment._id} className="mt-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">{comment.author.username}</span>
              <LikeDislike commentId={comment._id} />
            </div>
            <p className="text-gray-600">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;

