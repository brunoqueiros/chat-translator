class Synthesis {
  constructor() {
    // Check if is running at the browser
    if (typeof window === 'object') {
      this.message = new SpeechSynthesisUtterance();
      this.voices = window.speechSynthesis.getVoices();

      this.message.voice = this.voices[0];
      this.message.voiceURI = 'native';
      this.message.volume = 1;
      this.message.rate = 1;
    }
  }

  speech(text, language) {
    this.message.text = text;
    this.message.lang = language; //'fr-FR';

    speechSynthesis.speak(this.message);
  }
}

export default new Synthesis();
