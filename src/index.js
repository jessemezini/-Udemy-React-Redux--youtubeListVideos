import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ytsearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyAn-sE_qU7oj6VSZQAZNg41aVe9-XL6Cbc';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    ytsearch({
      key: API_KEY,
      term: 'reactjs',
    }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });

    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  onVideoSelect(selectedVideo) {
    this.setState({ selectedVideo });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
