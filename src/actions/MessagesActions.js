import alt from '../alt';

class MessagesActions {
  newMessage(text) {
    this.dispatch(text);
  }
}

export default alt.createActions(MessagesActions);
