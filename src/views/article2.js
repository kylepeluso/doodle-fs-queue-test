import React, { Fragment } from "react";
import FsAd from "../FsAd";

const channel = "4735792/reuters.com/markets/deals/article";

const Article2 = (props) => {
  return (
    <Fragment>
      <h2>Article 2</h2>
      <FsAd
        placementName="reuters_desktop_leaderboard_atf"
        placementTargeting={{ kyle: "test" }}
        channel={channel}
        //slotId="diffpage1"
      />

      <FsAd
        placementName="reuters_desktop_native_1"
        placementTargeting={{}}
        channel={channel}
        //slotId="diffpage2"
      />
    </Fragment>
  );
};

export default Article2;
