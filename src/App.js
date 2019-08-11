import React from "react";
import APIVideoSearch from "../node_modules/youtube-api-search";
import SearchField from "./components/search-field";
import VideoPlayer from "./components/video-player";


const KEY = "AIzaSyDCQNGiEwhpkkkAtq_H9RbSCHtnLjw-QmY"

class App extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selected: null,
      term: "Jordan Slam Dunks"
    };
    this.videoSearch(this.state.term);
  }

  videoSearch(term) {
    APIVideoSearch({key: KEY, term: term, type: "video"}, data => {
      this.setState({
        videos: data,
        selected: data[0]
      });
    });
  }

  videoPlayed = () => {
    const videoId = this.state.selected.id.videoId;
  }
  render() {

    return (
      <div>
        <SearchField onSearchChange = {(term) => this.videoSearch(term)} />
        <VideoPlayer video={this.state.selected} />
      </div>
    )
  }


}

export default App;