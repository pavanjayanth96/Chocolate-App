import React, { Component } from "react";
import { connect } from "react-redux";
import { getBrands, getBrandDetail } from "../actions/actionCreators";
import { Link } from "react-router-dom";
import "./Brands.css";

import BrandDetail from "./BrandDetail";

class Brands extends Component {
  componentDidMount() {
    this.props.dispatch(getBrands());
  }

  // handlerBrandDetail = (id)=>
  //     this.props.dispatch(getBrandDetail);
  // }

  render() {
    return (
      <div>
        <center>
          <h1>Brands List</h1>
          <div>
            <div>
              {this.props.brands.map(d => (
                <div>
                  {/* <li key={d.id}>
                  <Link to={`/brand/${d.id}`}> {d.name} </Link>
                </li> */}
                  {d.name} <br />
                  {/* <div className="img"> */}
                  <Link to={`/brand/${d.id}`}>
                    <img src={d.logo} />
                  </Link>
                  {/* </div> */}
                </div>
              ))}
            </div>
          </div>
        </center>
      </div>
    );
  }
}
function mapStateToProps(State) {
  return {
    brands: State.brands,
    isLoading: State.isLoading
  };
}

export default connect(mapStateToProps)(Brands);
