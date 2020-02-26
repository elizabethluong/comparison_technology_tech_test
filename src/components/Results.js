import React from "react";
import { Link } from "react-router-dom";

class Results extends React.Component {
  constructor() {
    // need to use constructor method to create an object from class i.e binding event handlers and initializing local state.
    super(); //allows you to use the this.props object
    this.state = {
      results: [] // set initial state of component
    };
  }

  componentDidMount() {
    var that = this;
    fetch(
      "https://demo.staging.energyhelpline-aws.com/api/results/a8823b4b-1abe-41de-a5b3-ab6700c08d98"
    )
      .then(response => response.json())
      .then(data => that.setState({ results: data.elecResults }));
    console.log(this.state.results);
  }

  //   <div>
  //   <div className="results">
  //     <h1>{info.name}</h1>
  //     <p></p>
  //   </div>
  // </div>
  // </div>

  render() {
    return (
      <div>
        <div className="container">
          {this.state.results.length > 0 ? (
            this.state.results.map(info => <div><h1>Name: {info.name}</h1><p>Expected annual spend: {info.expectedAnnualSpend}</p>
            
            
            </div>)
          ) : (
            <p>loading</p>
          )}
        </div>
      </div>
    );
  }
}

export default Results;
