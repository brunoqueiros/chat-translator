class MessageUtil {
  createMessage(text, translatedText) {
    let id = '_' + Math.random().toString(36).substr(2, 9);

    return {
      id: id,
      text: text,
      translatedText: translatedText
    }
  }
}

export default new MessageUtil();
