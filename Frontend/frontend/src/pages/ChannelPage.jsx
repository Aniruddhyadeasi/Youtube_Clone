import React from 'react';
import ChannelHeader from '../components/dashboard/Header';
import ChannelTabs from '../components/channel/ChannelTabs';

const ChannelPage = ({ channelId }) => {
  return (
    <div className="p-4">
      <ChannelHeader channelId={channelId} />
      <ChannelTabs channelId={channelId} />
    </div>
  );
};

export default ChannelPage;
