import React from "react";
import VideosListItem from "../videos-list-item/index";
import "./search-videos-list.css"

const SearchVideosList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideosListItem 
        onSelect={props.onSelect}
        video={video}
        key={video.etag} />
    );
  });

  return (
    <ul className="list-group" >
      {videoItems}
    </ul>
  );
}

export default SearchVideosList;
