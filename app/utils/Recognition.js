import MessagesActions from '../actions/MessagesActions';

function hasSupport() {
  return window.SpeechRecognition = window.SpeechRecognition       ||
                                    window.webkitSpeechRecognition ||
                                    window.mozSpeechRecognition    ||
                                    window.msSpeechRecognition     ||
                                    window.oSpeechRecognition;
}

class Recognition {
  init() {
    if (!hasSupport()) {
      throw new Error('Your browser does not support the Web Speech API');
    }

    this.recognizer = new window.SpeechRecognition();
    this.recognizer.continous = true;

    this.bindListeners();
  }

  bindListeners() {
    [
      'start',
      'stop',
      'result',
      'error',
      'end'
    ].map((event) => {
      this[event]();
    });
  }

  start() {
    this.recognizer.start();
  }

  stop() {
    this.recognizer.stop();
  }

  error() {
    this.recognizer.addEventListener('error', (e) => {
      throw e;
    });
  }

  end() {
    this.recognizer.addEventListener('end', (e) => {
      throw e;
    });
  }

  result() {
    this.recognizer.addEventListener('result', (e) => {
      const text = e.results[0][0].transcript.trim();

      MessagesActions.newMessage(text);
    });
  }
}

export default new Recognition();
