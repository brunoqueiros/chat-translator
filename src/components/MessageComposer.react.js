import React from 'react';
import MessagesActions from '../actions/MessagesActions';

const ENTER_KEY_CODE = 13;

function getInitialState() {
  return {text: ''}
}

class MessageItem extends React.Component {
  constructor() {
    super();

    this.state = getInitialState();
  }

  onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();

      let text = this.state.text.trim();
      if (text) {
        MessagesActions.newMessage(text);
      }
      this.setState({text: ''});
    }
  }

  _onChange(event, value) {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <textarea
        value={this.state.text}
        onChange={this._onChange.bind(this)}
        onKeyDown={this.onKeyDown.bind(this)}
      ></textarea>
    );
  }
}

export default MessageItem;
