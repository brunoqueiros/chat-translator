import React from 'react';
import OptionGroup from './OptionGroup.react';

class LanguageSelect extends React.Component {

  render() {
    return (
      <div className="field">
        <label>{this.props.label}</label>
        <select id={this.props.id} onChange={this.props.onChange}>
          <option value=""></option>

          {this.props.options.map((option, idx) => {
            return (
              <OptionGroup
                key={idx}
                label={option.optgroup}
                options={option.options}/>
            )
          })}
        </select>
      </div>
    )
  }
}

export default LanguageSelect;
