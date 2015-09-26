import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import MessagesStore from '../stores/MessagesStore';
import MessageItem from './MessageItem.react';
import MessageComposer from './MessageComposer.react';

function getStateFromStore() {
  return  MessagesStore.getState();
}

@connectToStores
class MessagesSection extends React.Component {

  state = getStateFromStore();

  static getStores() {
    return [MessagesStore];
  }

  static getPropsFromStores() {
    return getStateFromStore();
  }

  componentDidMount() {
    MessagesStore.listen(this._onChange);
  }

  componentWillUnmount() {
    MessagesStore.unlisten(this._onChange);
  }

  _onChange = () => {
    this.setState(getStateFromStore());
  }

  render() {
    return (
      <div className="column five wide ui comments">
        <h2 className="ui dividing header">Messages</h2>

        <ul className="message-list">
          {this.state.messages.map((message) => {
            return (
              <MessageItem
                key={message.id}
                text={message.text}
                translatedText={message.translatedText}
                timestamp={message.timestamp}
              />
            );
          })}
        </ul>

        <MessageComposer />
      </div>
    )
  }
};

export default MessagesSection;
