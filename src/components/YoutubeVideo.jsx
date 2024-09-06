import React from "react";
import YouTube from "react-youtube";
import "../styles.css";

class YouTubeVideo extends React.Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <div className="video-container">
        <YouTube videoId="diBxFVftmf4" opts={opts} onReady={this._onReady} />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YouTubeVideo;
