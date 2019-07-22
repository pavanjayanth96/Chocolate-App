import React, { Component } from "react";
import { connect } from "react-redux";
import { getChocolats } from "../actions/actionCreators";
import { Link } from "react-router-dom";
import isEmpty from "lodash/isEmpty";

class Chocolate extends Component {
  constructor() {
    super();
    this.state = {
      searchString: "",
      filteredData: []
    };
  }
  componentDidMount() {
    this.props.dispatch(getChocolats());
  }
  handleChange = event => {
    const { chocolates } = this.props;
    // this.setState({ searchString: event.target.value });
    let str = event.target.value;
    let filteredData = [];
    chocolates.map(data => {
      if (data.name.toLowerCase().includes(str.toLowerCase()))
        filteredData.push(data);
    });
    this.setState({ filteredData });
  };

  getFilteredData = () => {};
  render() {
    const { filteredData } = this.state;
    //console.log("kal", filteredData);
    return (
      <div>
        {/* <input type="input" onChange={e => this.handleChange(e)} /> */}
        <center>
          <h1>Chocolate List</h1>

          {this.props.chocolates.map(d => (
            <ul>
              {/* <li key={d.id}>
                <Link to={`/chocolates/${d.id}`}> {d.name} </Link>
              </li> */}
              {d.name}
              <>
                <div>
                  <Link to={`/chocolates/${d.id}`}>
                    <img src={d.image} />
                  </Link>
                </div>
              </>
            </ul>
          ))}
        </center>
      </div>
    );
  }
}

function mapStateToProps(State) {
  return {
    chocolates: State.chocolates,
    isLoading: State.isLoading
  };
}

export default connect(mapStateToProps)(Chocolate);
