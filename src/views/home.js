import React, { Fragment } from "react";
import FsAd from "../FsAd";

const Home = (props) => {
  return (
    <Fragment>
      <FsAd placementName="doodle_int_top" targeting={{ key: "value" }} />
      <FsAd placementName="doodle_int_bottom" />
    </Fragment>
  );
};

export default Home;
