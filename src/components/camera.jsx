import React, {useRef, createRef, useEffect} from "react";

class Camera extends React.Component {
    state = {
        video: true,
        player: React.createRef(),
    };

    startVideo = () => {
        const constraints = { video: this.state.video };
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

    //componentDidMount = () => {
    //    this.startVideo();
    //};

    render = () => {
        return (
            <div className="video-stream">
                <video
                    id="player"
                    ref={this.state.player}
                    controls
                    autoPlay
                ></video>
                <button onClick={this.startVideo}>Start Video</button>
                <button onClick={this.stopVideo}>Stop Video</button>
            </div>
        );
    };
}

export default Camera;