import React from 'react';

const ShareButton = ({ videoId }) => {
  const handleShare = () => {
    navigator.clipboard.writeText(`${window.location.origin}/videos/${videoId}`);
    alert('Link copied to clipboard!');
  };

  return (
    <button
      onClick={handleShare}
      className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
    >
      Share
    </button>
  );
};

export default ShareButton;
