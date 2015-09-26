import request from 'superagent';

const WS = 'http://api.mymemory.translated.net/get';

class Translator {
  translate(text) {
    return new Promise((resolve, reject) => {
      let url = WS + '?q=' + text + '&langpair=en-US|pt-BR';

      request
        .get(url)
        .end((err, res) => {
          if (err) throw new Error(err);

          resolve(res.body.responseData.translatedText);
          reject('Ops');
        });
      });
  }
}

export default new Translator();
