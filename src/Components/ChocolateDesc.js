import React, { Component } from "react";
import { getChocolatesDesc } from "../actions/actionCreators";
import { connect } from "react-redux";
import { stat } from "fs";

class ChocolateDesc extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.dispatch(getChocolatesDesc(this.props.match.params.id));
  }

  render() {
    return (
      <div>
        <center>
          {/* <h4>ChocolateDesc</h4> */}
          <br />
          {console.log("Response", this.props.chocolateDesc)}
          {console.log("Response_Name", this.props.chocolateDesc.name)}
          <h4>{this.props.chocolateDesc.name}</h4>

          <img src={this.props.chocolateDesc.image} />
          <p>{this.props.chocolateDesc.desc}</p>
          {/* {this.props.chocolateDesc.map(c => (
          <div>
            <h3>{c.name}</h3>
            <h3>{c.desc}</h3>
            <img src={c.image} />
          </div>
        ))} */}
        </center>
      </div>
    );
  }
}

function MapStateToProps(state) {
  console.log("State******", state);
  return {
    chocolateDesc: state.chocolateDesc,
    isLoading: state.isLoading
  };
}

export default connect(MapStateToProps)(ChocolateDesc);
