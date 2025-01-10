import React from 'react';

const ChannelTabs = ({ channelId }) => {
  return (
    <div className="channel-tabs">
      <ul>
        <li>
          <a href={`/channels/${channelId}/videos`}>Videos</a>
        </li>
        <li>
          <a href={`/channels/${channelId}/about`}>About</a>
        </li>
        <li>
          <a href={`/channels/${channelId}/community`}>Community</a>
        </li>
      </ul>
    </div>
  );
};

export default ChannelTabs;