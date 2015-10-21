import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import LanguagesStore from '../../stores/LanguagesStore';
import OptionGroup from './OptionGroup.react';

function getStateFromStore() {
  return  LanguagesStore.getState();
}

@connectToStores
class LanguageSelect extends React.Component {

  state = getStateFromStore();

  static getStores() {
    return [LanguagesStore];
  }

  static getPropsFromStores() {
    return getStateFromStore();
  }

  componentDidMount() {
    LanguagesStore.listen(this._onChange);
  }

  componentWillUnmount() {
    LanguagesStore.unlisten(this._onChange);
  }

  _onChange = () => {
    this.setState(getStateFromStore());
  }

  _onSelect = (event) => {
    localStorage.setItem('language', event.target.value);
  }

  render() {
    return (
      <div className="field">
        <label>Choose your language</label>
        <select id={this.props.id} onChange={this._onSelect}>
          <option value=""></option>

          {this.state.languages.map((language, idx) => {
            return (
              <OptionGroup
                key={idx}
                label={language.name}
                options={language.countries}/>
            )
          })}
        </select>
      </div>
    )
  }
}

export default LanguageSelect;
