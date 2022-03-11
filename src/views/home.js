import React, { Fragment } from "react";
import FsAd from "../FsAd";
import FreestarAdSlot from "@freestar/pubfig-adslot-react-component";

const releaseAds = () => {
  FreestarAdSlot.queueAdCalls(false);
};

const Home = (props) => {
  FreestarAdSlot.queueAdCalls(true);
  return (
    <Fragment>
      <button onClick={releaseAds}>Trigger Ad Calls</button>

      <FsAd placementName="doodle_int_top" targeting={{ key: "value" }} />
      <FsAd placementName="doodle_int_bottom" />
    </Fragment>
  );
};

export default Home;
