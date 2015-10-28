import React from 'react';
import clone from 'clone';
import connectToStores from 'alt/utils/connectToStores';
import LanguagesStore from '../../stores/LanguagesStore';
import Select from '../shared/Select.react';

function getStateFromStore() {
  return  LanguagesStore.getState();
}

function processOptions(optgroupOptions) {
  const optgroupOptionsAux = clone(optgroupOptions);

  return optgroupOptionsAux.map((optgroupOption) => {
    optgroupOption['optgroup'] = optgroupOption['name'];
    optgroupOption['options'] = optgroupOption['countries'];

    delete optgroupOption['name'];
    delete optgroupOption['countries'];

    optgroupOption['options'].map((option) => {
      option['value'] = option['isoCode'];
      option['text'] = option['name'];

      delete option['isoCode'];
      delete option['name'];
      return option;
    });

    return optgroupOption;
  });
}

@connectToStores
class HomeSectionLanguage extends React.Component {

  state = getStateFromStore();

  componentDidMount() {
    LanguagesStore.listen(this._onChange);
  }

  componentWillUnmount() {
    LanguagesStore.unlisten(this._onChange);
  }

  static getStores() {
    return [LanguagesStore];
  }

  static getPropsFromStores() {
    return getStateFromStore();
  }

  _onChange = () => {
    this.setState(getStateFromStore());
  }

  render() {
    return (
      <div>
        <Select
          id="language-select"
          label="Choose your language"
          onChange={this.props.onChange}
          options={processOptions(this.state.languages)} />
      </div>
    )
  }
}

export default HomeSectionLanguage;
