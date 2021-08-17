import React from "react";
import ReactDOM from "react-dom";

const Masthead = (props) => {
  return (
    <header className="masthead" style={props.backgroundImage}>
      <div className="container position-relative px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="site-heading">
              <h1>{props.h1}</h1>
              <span className="subheading">{props.span}</span>
              <h2 className="subheading">{props.h2}</h2>
              <span className="meta">{props.spanMeta}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Masthead;
