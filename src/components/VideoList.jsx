// import exampleVideoData from './data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from '../data/exampleVideoData.js';




var VideoList = (exampleVideoData) => (
  <div className="video-list">
    {/* <div><h5><em>exampleVideoData</em> view goes here</h5></div>
    <div><h5><em>exampleVideoData</em> view goes here</h5></div>
    <div><h5><em>exampleVideoData</em> view goes here</h5></div>
    <div><h5><em>exampleVideoData</em> view goes here</h5></div>
    <div><h5><em>exampleVideoData</em> view goes here</h5></div> */}

    <VideoListEntry />
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
console.log(exampleVideoData);
console.log(exampleVideoData[0].snippet.description);
export default VideoList;
