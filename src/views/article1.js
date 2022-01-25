import React, { Fragment } from "react";
import FsAd from "../FsAd";

const channel = "4735792/reuters.com/markets/deals/article";

const Article1 = (props) => {
  return (
    <Fragment>
      <h2>Article 1</h2>
      <FsAd
        placementName="reuters_desktop_right_rail_1"
        placementTargeting={{ kyle: "test" }}
        channel={channel}
      />

      <FsAd
        placementName="reuters_desktop_right_rail_2"
        placementTargeting={{}}
        channel={channel}
      />
    </Fragment>
  );
};

export default Article1;
