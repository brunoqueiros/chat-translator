import React from 'react';

class LanguageSelect extends React.Component {

  _onChange = (event) => {
    localStorage.setItem('language', event.target.value);
  }

  render() {
    return (
      <div className="field">
        <label>Select a language</label>
        <select onChange={this._onChange}>
          <option value=""></option>

          <optgroup label="English">
            <option value="en-AU">Australia</option>
            <option value="en-CA">Canada</option>
            <option value="en-IN">India</option>
            <option value="en-NZ">New Zealand</option>
            <option value="en-ZA">South Africa</option>
            <option value="en-GB">United Kingdom</option>
            <option value="en-US">United State</option>
          </optgroup>

          <optgroup label="Português">
            <option value="pt-BR">Brasil</option>
            <option value="pt-PT">Portugal</option>
          </optgroup>
        </select>
      </div>
    )
  }
}

export default LanguageSelect;
