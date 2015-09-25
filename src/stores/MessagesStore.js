import alt from '../alt';
import MessagesActions from '../actions/MessagesActions';
import Translator from '../utils/Translator';
import MessageUtil from '../utils/MessageUtil';

const MOCK = [
  { id: 1, text: 'My name is Bruno', translatedText: 'Meu nome é Bruno' },
  { id: 2, text: 'Hello world!', translatedText: 'Olá mundo!' }
];

class MessagesStore {
  constructor() {
    this.bindListeners({
      newMessage: MessagesActions.newMessage
    });

    this.state = {};
    this.state.messages = MOCK;
  }

  newMessage(text) {
    Translator.translate(text)
    .then((translatedText) => {
      let message = MessageUtil.createMessage(text, translatedText);

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
