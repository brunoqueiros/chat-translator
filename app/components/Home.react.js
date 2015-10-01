import React from 'react';
import { Link } from 'react-router';
import LanguageSelect from './LanguageSelect.react';

class Home extends React.Component {

  componentDidMount() {
    localStorage.removeItem('language');
  }

  _onClick = (event) => {
    const language = localStorage.getItem('language');

    if (language === '' || language === null) {
      event.preventDefault();
    }
  }

  render() {
    return (
      <div className="ui form grid centered">
        <div className="column five wide ui">
          <LanguageSelect />

          <Link
            to="/chat"
            className="large ui button fluid blue"
            onClick={this._onClick}
          >Enter</Link>
        </div>
      </div>
    )
  }
}

export default Home;
