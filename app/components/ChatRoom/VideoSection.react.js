import React from 'react';
import WebRTCUtil from '../../utils/WebRTCUtil';

class VideoSection extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    WebRTCUtil.start();
  }

  render() {
    return (
      <div className="column eleven wide">
        <h1>VideoSection</h1>
        <video autoPlay id="local_stream"/>
      </div>
    )
  }
}

export default VideoSection;
