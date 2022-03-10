import React, { Fragment } from "react";
import FsAd from "../FsAd";

const Article1 = (props) => {
  return (
    <Fragment>
      <h2>Article 1</h2>
      <FsAd placementName="doodle_int_top" targeting={{ kyle: "test" }} />

      <FsAd placementName="doodle_int_bottom" />
    </Fragment>
  );
};

export default Article1;
