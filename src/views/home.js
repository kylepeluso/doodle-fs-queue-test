import React, { Fragment } from "react";
import FsAd from "../FsAd";

const channel = "4735792/reuters.com/markets/deals/article";

const Home = (props) => {
  return (
    <Fragment>
      <FsAd
        placementName="reuters_desktop_leaderboard_atf"
        placementTargeting={{ key: "value" }}
        channel={channel}
      />
      <FsAd
        placementName="reuters_desktop_native_1"
        placementTargeting={{}}
        channel={channel}
        slotId="testId"
      />
      <FsAd
        placementTargeting={{}}
        channel={channel}
        placementName="passthrough-unit"
        slotId="passthrough-unit"
        adUnitPath={channel}
        slotSize={[[300, 250]]}
      />
      <FsAd
        placementName="reuters_desktop_native_2"
        placementTargeting={{}}
        channel={channel}
      />
    </Fragment>
  );
};

export default Home;
