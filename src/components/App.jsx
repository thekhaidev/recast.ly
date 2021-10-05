import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVid: exampleVideoData[0]
    };

    this.onVideoClick = this.onVideoClick.bind(this);

  }



  onVideoClick(video) {

    // console.log('test');
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
            <div><h5><em>Video List</em></h5><VideoList videos = {exampleVideoData} onVideoClick = {this.onVideoClick}/></div>
          </div>
        </div>
      </div>
    );
  }
}




// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
