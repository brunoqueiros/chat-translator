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
  constructor() {
    super();

    // this.state = getStateFromStore();
    // this.message = MessagesStore.getMessage();

    this._onChange = this._onChange.bind(this);
    MessagesStore.listen(this._onChange);
    console.log(this);
  }

  static getStores() {
    console.log('getStores');
    return [MessagesStore];
  }

  static getInitialState() {
    console.log('getInitialState');
    return getStateFromStore();
  }

  static getPropsFromStores() {
    console.log('getPropsFromStores');
    return getStateFromStore();
  }

  componentDidMount() {
    console.log('componentDidMount');
    MessagesStore.listen(this._onChange);
  }

  _onChange() {
    this.setState(getStateFromStore());
  }

  render() {
    return (
      <div className="column five wide ui comments">
        <h2 className="ui dividing header">Messages</h2>

        {this.props.messages.map((message) => {
          return (
            <MessageItem
              key={message.id}
              text={message.text}
              translatedText={message.translatedText}
            />
          );
        })}

        <MessageComposer />
      </div>
    )
  }
};

// MessagesSection = connectToStores(MessagesSection);

export default MessagesSection;
