import React from "react";
import "./search-field.css"

class SearchField extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    }
  }
  onInpChange(term) {
    this.setState({term});
    this.props.onSearchChange(term);
  }
  render() {
    return (
      <div className="search-field">
        <input  type="text" placeholder= "Search" value={this.state.term} onChange={(event) => this.onInpChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchField;
