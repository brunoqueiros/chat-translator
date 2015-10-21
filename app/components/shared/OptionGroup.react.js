import React from 'react';

class OptionGroup extends React.Component {

  render() {
    return (
        <optgroup label={this.props.label}>
          {this.props.options.map((option, idx) => {
            return (
              <option
                key={idx}
                value={option.value}>{option.text}</option>
            );
          })}
        </optgroup>
    )
  }
}

export default OptionGroup;
