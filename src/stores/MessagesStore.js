import alt from '../alt';
import MessagesActions from '../actions/MessagesActions';
import Translator from '../utils/Translator';
import MessageUtil from '../utils/MessageUtil';

const MOCK = [
  // {
  //   id: 1,
  //   text: 'My name is Bruno',
  //   timestamp: Date.now(),
  //   language: 'en-US'
  // }
];

class MessagesStore {
  constructor() {
    this.bindListeners({
      newMessage: MessagesActions.newMessage
    });

    this.state = {};
    this.state.messages = MOCK;
  }

  newMessage(message) {
    Translator.translate(message.text)
    .then((translatedText) => {
      message = MessageUtil.createMessage(message, translatedText);

      this.setState({
        messages: this.state.messages.concat(message)
      });
    });
  }

  static getMessage() {
    return this.state.messages[0];
  }
}

export default alt.createStore(MessagesStore, 'MessagesStore');
