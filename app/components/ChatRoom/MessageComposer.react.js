import React from 'react';
import MessagesActions from '../../actions/MessagesActions';

const ENTER_KEY_CODE = 13;

function getStateFromStore() {
  return {text: ''}
}

class MessageItem extends React.Component {

  state = getStateFromStore();

  _onKeyDown = (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();

      let text = this.state.text.trim();
      if (text) {
        MessagesActions.newMessage(text, 'en-US');
      }
      this.setState({text: ''});
    }
  }

  _onChange = (event, value) => {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div className="ui reply form">
        <textarea
          value={this.state.text}
          onChange={this._onChange}
          onKeyDown={this._onKeyDown}
        ></textarea>
      </div>
    );
  }
}

export default MessageItem;
