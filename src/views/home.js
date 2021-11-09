import React, { Fragment } from "react";
import FsAd from "../FsAd";

const channel = "motortrend.primedia.com/homepage";

const Home = (props) => {
  return (
    <Fragment>
      <FsAd
        placementName="MT_HP_300x250_top"
        placementTargeting={{ key: "value" }}
        channel={channel}
      />
      <FsAd
        placementName="MT_HP_300x250_middle"
        placementTargeting={{}}
        channel={channel}
        slotId="testId"
      />
      <FsAd
        placementName=""
        placementTargeting={{}}
        channel={channel}
        slotId="passthrough-unit"
        adUnitPath="3833/motortrend.primedia.com/buyersguide"
        slotSize={[[300, 250]]}
      />
      <FsAd
        placementName="MT_HP_300x250_bottom"
        placementTargeting={{}}
        channel={channel}
      />
    </Fragment>
  );
};

export default Home;
