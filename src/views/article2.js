import React, { Fragment } from "react";
import FsAd from "../FsAd";

const Article2 = (props) => {
  return (
    <Fragment>
      <h2>Article 2</h2>
      <FsAd placementName="doodle_int_top" targeting={{ kyle: "test" }} />

      <FsAd placementName="doodle_int_bottom" />
    </Fragment>
  );
};

export default Article2;
