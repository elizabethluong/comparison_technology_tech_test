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
    fetch(
      "https://demo.staging.energyhelpline-aws.com/api/results/a8823b4b-1abe-41de-a5b3-ab6700c08d98"
    )
      .then(response => response.json())
      .then(data => this.setState({ results: data }));
    console.log(this.state.results);
  }

  render() {
    const results = this.state.results;
    let array = results.map(data => (
      // <div className="resultName">
          <h1> {data.name}</h1>
        ));
      // </div>
    // ));

    return (
      <div>
        <h1>{array}</h1>
      </div>
    );
  }
}

export default Results;
