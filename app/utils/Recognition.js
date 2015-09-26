import MessagesActions from '../actions/MessagesActions';

function hasSupport() {
  return window.SpeechRecognition = window.SpeechRecognition       ||
                                    window.webkitSpeechRecognition ||
                                    window.mozSpeechRecognition    ||
                                    window.msSpeechRecognition     ||
                                    window.oSpeechRecognition;
}

class Recognition {
  constructor() {
    if (!hasSupport())
      throw new Error('Your browser does not support the Web Speech API');

    this.init();
    this.bindListeners();
  }

  init() {
    this.recognizer = new window.SpeechRecognition();
    this.recognizer.continous = true;
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
      console.error(e);
    });
  }

  end() {
    this.recognizer.addEventListener('end', (e) => {
      console.log('end');
      // this.start();
    });
  }

  result() {
    this.recognizer.addEventListener('result', (e) => {
      let text = e.results[0][0].transcript.trim();

      MessagesActions.newMessage(text);
    });
  }
}

export default new Recognition();
