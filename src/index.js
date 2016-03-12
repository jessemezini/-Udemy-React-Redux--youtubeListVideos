import _ from 'lodash';
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

    this.videoSearch('redux');

    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  onVideoSelect(selectedVideo) {
    this.setState({ selectedVideo });
  }

  videoSearch(term) {
    ytsearch({
      key: API_KEY,
      term,
    }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
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
