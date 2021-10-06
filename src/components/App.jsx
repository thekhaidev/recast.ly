import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import something from '../data/exampleVideoData.js';
// import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVid: something[0],
      videos: something
    };

    this.onVideoClick = this.onVideoClick.bind(this);

  }

  componentDidMount() {
    this.getYouTubeVideos('cute kittens');
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        currentVid: videos[0]
      });
    });
  }



  onVideoClick(video) {

    this.setState({
      currentVid: video
    });
  }


  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>Search</em></h5><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>Video Player</em></h5><VideoPlayer video = {this.state.currentVid}/></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>Video List</em></h5><VideoList videos = {this.state.videos} onVideoClick = {this.onVideoClick}/></div>
          </div>
        </div>
      </div>
    );
  }
}




// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
