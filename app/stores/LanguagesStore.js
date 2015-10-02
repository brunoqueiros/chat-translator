import alt from '../alt';

const languages = [
  {
    'name': 'English',
    'countries': [
      {
        'isocode': 'en-AU',
        'name': 'Australia'
      },
      {
        'isocode': 'en-CA',
        'name': 'Canada'
      },
      {
        'isocode': 'en-IN',
        'name': 'India'
      },
      {
        'isocode': 'en-NZ',
        'name': 'New Zealand'
      },
      {
        'isocode': 'en-ZA',
        'name': 'South Africa'
      },
      {
        'isocode': 'en-GB',
        'name': 'United Kinngdom'
      },
      {
        'isocode': 'en-US',
        'name': 'United States'
      }
    ]
  },
  {
    'name': 'Português',
    'countries': [
      {
        'isocode': 'pt-BR',
        'name': 'Brasil'
      },
      {
        'isocode': 'pt-PT',
        'name': 'Portugal'
      }
    ]
  }
];

class LanguagesStore {
  constructor() {
    this.bindListeners({});

    this.state = {};
    this.state.languages = languages;
  }

  handleUpdate(languages) {
    this.state.languages = languages;
  }
}

export default alt.createStore(LanguagesStore, 'LanguagesStore');
