import React from "react";
import APIVideoSearch from "../node_modules/youtube-api-search";
import SearchField from "./components/search-field";
import VideoPlayer from "./components/video-player";
import SearchVideosList from "./components/search-videos-list/index"


const KEY = "AIzaSyCYPJzhrComrCHnKlNtN4iSqYgLfMDR3gQ"

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
    APIVideoSearch({ key: KEY, term: term, type: "video" }, data => {
      this.setState({
        videos: data,
        selected: data[0]
      });
    });
  }


  yo = () => {
    console.log("yo")
  }
  render() {

    return (
      <div>
        <SearchField onSearchChange={(term) => this.videoSearch(term)} />
        <div className="row">
          <SearchVideosList onSelect={selected => this.setState({ selected })}
            videos={this.state.videos} />
          <VideoPlayer video={this.state.selected} />
        </div>
      </div>
    )
  }


}

export default App;