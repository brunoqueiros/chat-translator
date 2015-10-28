/*global socket*/
import { RTCPeerConnection, getUserMedia, attachMediaStream } from 'webrtc-adapter-test';

let peerConnection;

const CONSTRAINTS = {
  audio: true,
  video: true
};

const MEDIA_CONSTRAINTS = {
  mandatory: {
    OfferToReceiveAudio:true,
    OfferToReceiveVideo:true
  }
};

function onGotStream(stream) {
  peerConnection.addStream(stream);
  attachMediaStream(document.getElementById('local_stream'), stream);
}

function onError(error) {
  console.log(error);
}

function onIceCandidate(event) {
  console.log('ice candidate created');

  if (event.candidate) {
    // TODO: send to signal server
    socket.emit('message', {
      'type': 'ice',
      'token': token,
      'body': {
        'label': event.candidate.sdpMLineIndex,
        'id': event.candidate.sdpMid,
        'candidate': event.candidate.candidate
      }
    });
  }
}

function onAddStream(event) {
  console.log('STREAM ADDED', event);
  attachMediaStream(document.getElementById('remote_stream'), event.stream);
}

class WebRTCUtil {
  start() {
    peerConnection = new RTCPeerConnection(
      {
        iceServers: [
          {'url': 'stun:stun.l.google.com:19302'}
        ]
      },
      {
        optional: [
          {'DtlsSrtpKeyAgreement': true}
        ]
      }
    );

    peerConnection.onicecandidate = onIceCandidate;
    peerConnection.onaddstream = onAddStream;

    socket.on('connect', function () {
      console.log('logged in');

      socket.emit('message', {
        'type': 'connect',
        'token': token
      });
    });

    // getUserMedia(CONSTRAINTS, onGotStream, onError);
  }

  call(token) {
    peerConnection.createOffer(function (sessionDescription) {
      console.log('setting local description');
      peerConnection.setLocalDescription(sessionDescription);
      // TODO: send to signal server
      socket.emit('message', {
        'type': 'offer',
        'token': token,
        'body': sessionDescription
      });
    }, null, MEDIA_CONSTRAINTS);
  }
}

export default new WebRTCUtil;
