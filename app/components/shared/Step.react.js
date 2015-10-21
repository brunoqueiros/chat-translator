import React from 'react';

class Step extends React.Component {
  constructor() {
    super();
  }

  render() {
    <div>{this.props.children}</div>
  }
}

export default Step;
