import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "../App.css";
import { getSearch, input_change } from "../actions/actionCreators";
import { connect } from "react-redux";

function NavBar(props) {
  const handleChange = name => e => {
    props.dispatch(input_change(name, e.target.value));
  };

  const handelClick = e => {
    props.history.push("/chocolate");
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.history.push("/search");
  };
  return (
    <div class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav mr-auto">
        <li />
        <li class="nav-item active">
          <NavLink className="textCol" to="/" exact>
            Home
          </NavLink>
        </li>
        <li class="nav-item active">
          <NavLink className="textCol" to="/login" exact>
            Login
          </NavLink>
        </li>
        <li class="nav-item active">
          <NavLink className="textCol" to="/signup" exact>
            SignUp
          </NavLink>
        </li>
        <li class="nav-item active">
          <NavLink className="textCol" to="/brands" exact>
            Brands
          </NavLink>
        </li>
        <li class="nav-item active">
          <NavLink className="textCol" to="/chocolate" exact>
            Chocolate List
          </NavLink>
        </li>

        {/* <li class="nav-item active">
          <NavLink className="textCol" to="/search" exact>
            Search
          </NavLink>
        </li> */}
      </ul>
      {/* <NavLink to="/search" exact>
        <input
          type="text"
          placeholder="Search"
          onChange={e => {
            props.dispatch(getSearch(e.target.value));
          }}
        />
      </NavLink> */}
      <form>
        <input
          type="text"
          class="search"
          placeholder="search..."
          onClick={handelClick}
          onChange={handleChange("text")}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
      &nbsp;
      <NavLink to="/login" exact>
        <button>Logout</button>
      </NavLink>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    text: state.text
  };
}
export default withRouter(connect(mapStateToProps)(NavBar));
