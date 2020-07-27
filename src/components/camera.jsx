import React from "react";

class Camera extends React.Component {
    state = {
        video: true,
        audio: true,
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

    takeSnapShot = () => {
      const canvas = document.querySelector('.canvas')
      const context = canvas.getContext('2d');
      const photoDisplay = document.querySelector('.photo-taken')
      const video = document.querySelector('#player');  
      context.drawImage(video, 0, 0, canvas.width, canvas.height)
      photoDisplay.style.visibility = "visible";
    }

    deleteImg = () => {
      const canvas = document.querySelector(".canvas");
      const context = canvas.getContext("2d");
      const photoDisplay = document.querySelector(".photo-taken");

      context.clearRect(0,0,canvas.width, canvas.height);
      photoDisplay.style.visibility = "hidden";

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
                    <button onClick={this.takeSnapShot}>Snap a Pic</button>
                </div>
                <div className="photo-taken">
                    <div className="photo-options">
                        <button onClick={this.deleteImg}>DELETE</button>
                        <button>SAVE</button>
                    </div>

                    <canvas className="canvas" />
                </div>
            </div>
        );
    };
}

export default Camera;