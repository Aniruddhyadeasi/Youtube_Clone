import React from 'react';

const CommentsSection = ({ comments }) => (
  <div className="mt-6">
    <h3 className="text-lg font-semibold">Comments</h3>
    {comments.map((comment) => (
      <div key={comment._id} className="mt-4">
        <p className="text-sm font-semibold">{comment.user.fullName}</p>
        <p className="text-sm text-gray-600">{comment.text}</p>
      </div>
    ))}
  </div>
);

export default CommentsSection;
