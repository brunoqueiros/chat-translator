import React from 'react';
import classNames from 'classnames';

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
          <button className={existingButtonClasses} data-new="false" onClick={this._onClick}>Enter on a existing room</button>
        </div>

        <form className="ui form">
          {this.state.isNewRoom === 'true' ?
            <div>
              <h4 className="ui horizontal divider header">
                <i className="tag icon"></i>
                New room
              </h4>
              <div className="field">
                <label>Enter a room ID</label>
                <input type="text" name="room-name" />
              </div>
            </div>
            :
            <div>
              <h4 className="ui horizontal divider header">
                <i className="tag icon"></i>
                Existing room
              </h4>
              <div className="ui action input fluid">
                <input type="text" value="my-new-room-2412" />
                <button className="ui teal right labeled icon button">
                  <i className="copy icon"></i>
                  Copy room ID
                </button>
              </div>
            </div>
          }
        </form>
      </div>
    )
  }
}

export default HomeSectionRoom;
