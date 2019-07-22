import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <center>
        <br />
        <h3>
          Chocolate collection is a crowd sourced portal which gives you
          <br />
          details about world renowned brands and Chocolate
        </h3>
        <p>
          Please &nbsp;
          <Link to={`/login`}>login</Link>
          &nbsp; to contribute .Happy chocolating!!!
        </p>
      </center>
    </>
  );
}
export default Home;
