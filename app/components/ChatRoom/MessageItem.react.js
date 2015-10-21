import React from 'react';
import MessagesActions from '../../actions/MessagesActions';
import Synthesis from '../../utils/Synthesis';

class MessageItem extends React.Component {
  componentDidMount() {
    // TODO: Remove language mock
    Synthesis.speech(this.props.text, 'en-US');
  }

  render() {
    return (
      <li className="comment">
        <a className="avatar">
          <img src="https://avatars0.githubusercontent.com/u/1280255?v=3&s=40" />
        </a>
        <div className="content">
          <a className="author">Matt</a>
          <div className="metadata">
            <span className="date">{this.props.timestamp}</span>
          </div>
          <div className="actions">{this.props.text}</div>
          <div className="text">
            {this.props.translatedText}
          </div>
        </div>
      </li>
    );
  }
}

export default MessageItem;
