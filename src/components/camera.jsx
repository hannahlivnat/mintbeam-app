import React from "react";

let mutenotification = "Turn on Sound";


class Camera extends React.Component {
    state = {
        video: true,
        audio: false,
        player: React.createRef(),
    };


    startVideo = () => {
        const constraints = { audio: this.state.audio, video: this.state.video };
        const video = document.querySelector('#player');
        //console.log(video);
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then((stream) => {
                video.srcObject = stream;
                video.play();
            })
            .catch((err) => console.log(err));
    };

    stopVideo = () => {
      const video = document.querySelector("#player");
      video.srcObject.getVideoTracks().forEach(track => track.stop());
    }

    render = () => {
        return (
            <div className="video-stream">
                <video
                    id="player"
                    ref={this.state.player}
                    controls
                    autoPlay
                ></video>
                <div className="button-container">
                    <button onClick={this.startVideo}>Start Video</button>
                    <button onClick={this.stopVideo}>Stop Video</button>
                </div>
            </div>
        );
    };
}

export default Camera;