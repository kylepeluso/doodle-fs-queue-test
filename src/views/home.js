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
      />
      <FsAd
        placementName="MT_HP_300x600_300x250_middle"
        placementTargeting={{}}
        channel={channel}
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
