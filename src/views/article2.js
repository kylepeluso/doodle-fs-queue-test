import React, { Fragment } from "react";
import FsAd from "../FsAd";

const channel = "motortrend.primedia.com/buyersguide";

const Article2 = (props) => {
  return (
    <Fragment>
      <h2>Article 2</h2>
      <FsAd
        placementName="MT_BG_300x250_top"
        placementTargeting={{ kyle: "test" }}
        channel={channel}
        //slotId="diffpage1"
      />

      <FsAd
        placementName="MT_BG_300x600_300x250_bottom_desktop"
        placementTargeting={{}}
        channel={channel}
        //slotId="diffpage2"
      />
    </Fragment>
  );
};

export default Article2;
