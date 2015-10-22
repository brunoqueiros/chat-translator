import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

class HomeSectionRoom extends React.Component {

  state = {isNewRoom: 'true'};

  constructor() {
    super();
  }

  _onClick = (event) => {
    this.setState({isNewRoom: event.target.dataset.new});
  }

  render() {
    let newButtonClasses = classNames(
      'ui',
      'button',
      (this.state.isNewRoom === 'true') && 'positive'
    );

    let existingButtonClasses = classNames(
      'ui',
      'button',
      (this.state.isNewRoom === 'false') && 'positive'
    );

    return (
      <div>
        <div className="ui buttons fluid">
          <button className={newButtonClasses} data-new="true" onClick={this._onClick}>Create a new room</button>
          <span className="or"></span>
          <button className={existingButtonClasses} data-new="false" onClick={this._onClick}>Enter in an existing room</button>
        </div>

        <hr className="ui divider" />

        <form className="ui form">
          {this.state.isNewRoom === 'true' ?
            <div className="field">
              <label htmlFor="existing-room-id">Type an existing room ID</label>
              <input type="text" name="existing-room-id" id="existing-room-id" />
            </div>
            :
            <div className="field">
              <label htmlFor="new-room-id">Type a room ID</label>
              <input type="text" name="new-room-id" id="new-room-id" />
            </div>
          }

          <Link
            to="/chat"
            className="large ui button fluid blue"
            onClick={this.props._onClick}
          >Enter</Link>
        </form>
      </div>
    )
  }
}

export default HomeSectionRoom;
