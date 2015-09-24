import React from 'react';
import MessagesActions from '../actions/MessagesActions';

class MessageItem extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.translatedText}</p>
        <hr />
      </div>
    );
  }
}

export default MessageItem;
