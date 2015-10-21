import React from 'react';
import { Link } from 'react-router';
import Steps from '../shared/Steps.react';
import Step from '../shared/Step.react';
import HomeSectionLanguage from './HomeSectionLanguage.react';
import HomeSectionRoom from './HomeSectionRoom.react';

class Home extends React.Component {

  state = {tabActive: 0};

  componentDidMount() {
    localStorage.removeItem('language');
  }

  _onChange = (event) => {
    if (event.target.value !== '') {
      localStorage.setItem('language', event.target.value);
      this.setState({tabActive: 1});
    }
  }

  render() {
    return (
      <div className="ui form grid centered">
        <div className="column ten wide ui">
          <Steps tabActive={this.state.tabActive}>
            <Step
              title='Language'
              description='Choose your language'
              icon='translate'>
              <HomeSectionLanguage
                onChange={this._onChange}/>
            </Step>
            <Step
              title='Room'
              description='Crete a new room or enter on an existing'
              icon='comments'>
              <HomeSectionRoom />
            </Step>
          </Steps>
        </div>
      </div>
    )
  }
}

export default Home;
