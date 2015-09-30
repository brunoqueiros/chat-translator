import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/chat" activeClassName="active">ChatRoom</Link></li>
        </ul>
      </div>
    )
  }
}

export default Home;
