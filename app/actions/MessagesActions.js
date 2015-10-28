import alt from '../alt';

class MessagesActions {
  newMessage(text, language) {
    const message = {
      text: text,
      language: language
    };

    this.dispatch(message);
  }
}

export default alt.createActions(MessagesActions);
