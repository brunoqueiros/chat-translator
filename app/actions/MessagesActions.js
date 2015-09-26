import alt from '../alt';

class MessagesActions {
  newMessage(text, language) {
    let message = {
      text: text,
      language: language
    };

    this.dispatch(message);
  }
}

export default alt.createActions(MessagesActions);
