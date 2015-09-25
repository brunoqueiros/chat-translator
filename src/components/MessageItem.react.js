import React from 'react';
import MessagesActions from '../actions/MessagesActions';

class MessageItem extends React.Component {
  render() {
    return (
      <div className="comment">
        <a className="avatar">
          <img src="https://avatars0.githubusercontent.com/u/1280255?v=3&s=40" />
        </a>
        <div className="content">
          <a className="author">Matt</a>
          <div className="metadata">
            <span className="date">Today at 5:42PM</span>
          </div>
          <div className="actions">{this.props.text}</div>
          <div className="text">
            {this.props.translatedText}
          </div>
        </div>
      </div>
    );
  }
}

export default MessageItem;
