import React, { Component } from "react";
import { getBrandDetail } from "../actions/actionCreators";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class BrandDetail extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.dispatch(getBrandDetail(this.props.match.params.id));
  }

  render() {
    return (
      <>
        <center>
          <h1>BrandDetail-Component</h1>
          {console.log("//", this.props)}
          {this.props.brandDetail.map(c => (
            <div>
              {/* {console.log(c.name)}                      <Link to={`/brand/${d.id}`}> {d.name} </Link> */}
              <h3>{c.name}</h3>
              <img src={c.image} />
            </div>
          ))}

          {/* {this.props.brandDetail.map(d => (
          <ul>
            <li key={d.id}>{d.name}</li>
            {d.name}
            <>
              <img src={d.image} />
            </>
          </ul>
        ))} */}
        </center>
      </>
    );
  }
}
function mapStateToProps(state) {
  console.log("///", state);
  return {
    brandDetail: state.brandDetail,
    isLoading: state.isLoading
  };
}

export default connect(mapStateToProps)(BrandDetail);
