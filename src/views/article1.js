import React, { Fragment } from "react";
import FsAd from "../FsAd";

const channel = "motortrend.primedia.com/buyersguide";

const Article1 = (props) => {
  return (
    <Fragment>
      <h2>Article 1</h2>
      <FsAd
        placementName="MT_BG_300x250_top"
        placementTargeting={{ kyle: "test" }}
        channel={channel}
      />

      <FsAd
        placementName="MT_BG_300x600_300x250_bottom_desktop"
        placementTargeting={{}}
        channel={channel}
      />
    </Fragment>
  );
};

export default Article1;
