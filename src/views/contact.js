import React, { Fragment } from "react";
import FsAd from "../FsAd";

const channel = "motortrend.primedia.com/homepage";

const Contact = (props) => {
  return (
    <Fragment>
      <h2>Contact</h2>
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
        placementName="passthrough unit"
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
      <FsAd
        //intentionally double fetching by using this unit twice
        placementName="MT_HP_300x250_top"
        placementTargeting={{ key: "value" }}
        channel={channel}
      />
    </Fragment>
  );
};

export default Contact;
