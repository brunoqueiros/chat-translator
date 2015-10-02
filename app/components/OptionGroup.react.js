import React from 'react';

class OptionGroup extends React.Component {

  render() {
    return (
        <optgroup label={this.props.label}>
          {this.props.options.map((option) => {
            return (
              <option
                key={option.isocode}
                value={option.isocode}>{option.name}</option>
            );
          })}
        </optgroup>
    )
  }
}

export default OptionGroup;
