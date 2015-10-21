import React from 'react';
import { Link } from 'react-router';
import LanguageSelect from '../shared/LanguageSelect.react';

class HomeSectionLanguage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <LanguageSelect id="language-select" />
        <Link
          to="/chat"
          className="large ui button fluid blue"
          onClick={this.props._onClick}
        >Enter</Link>
      </div>
    )
  }
}

export default HomeSectionLanguage;
