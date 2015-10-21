import React from 'react';
import VideoSection from './VideoSection.react';
import MessageSection from './MessageSection.react';

class ChatRoom extends React.Component {
  render() {
    return (
      <div className="ui grid">
        <VideoSection />
        <MessageSection />
      </div>
    )
  }
}

export default ChatRoom;
