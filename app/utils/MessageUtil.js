class MessageUtil {
  createMessage(message, translatedText) {
    const id = '_' + Math.random().toString(36).substr(2, 9);

    return {
      id: id,
      text: message.text,
      translatedText: translatedText,
      timestamp: Date.now(),
      language: message.language
    }
  }
}

export default new MessageUtil();
