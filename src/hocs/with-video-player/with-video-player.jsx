import React, {PureComponent} from "react";
import {getFormatedTime} from "../../utils/utils";

const withVideoPlayer = (Component) => (
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlay: false,
        duration: `0`,
        progress: 0
      };
      this.video = React.createRef();

      this.handlerPlayClick = this.handlerPlayClick.bind(this);
      this.handlerFullscreenClick = this.handlerFullscreenClick.bind(this);
      this.setDuration = this.setDuration.bind(this);
      this.onTimeUpdate = this.onTimeUpdate.bind(this);
    }

    handlerPlayClick() {
      this.setState((prevState) => ({isPlay: !prevState.isPlay})); //
      return this.state.isPlay ? this.video.current.pause() : this.video.current.play();
    }

    handlerFullscreenClick() {
      const video = this.video.current;

      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }

    setDuration() {
      this.setState({
        duration: getFormatedTime(this.video.current.duration)
      });
    }

    onTimeUpdate() {
      const progress = this.video.current.currentTime * 100 / this.video.current.duration;
      this.setState({progress});
    }

    render() {
      const {isPlay, duration, progress} = this.state;
      return <Component
        {...this.props}
        isPlay={isPlay}
        duration={duration}
        progress={progress}
        onTimeUpdate={this.onTimeUpdate}
        setDuration={this.setDuration}
        onPlayClick={this.handlerPlayClick}
        onFullscreenClick={this.handlerFullscreenClick}
        ref={this.video}
      />;
    }
  }
);

export default withVideoPlayer;
