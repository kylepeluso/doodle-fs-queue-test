import React, { Fragment } from "react";
import FsAd from "../FsAd";
import FreestarAdSlot from "@freestar/pubfig-adslot-react-component";

const releaseAds = () => {
  FreestarAdSlot.queueAdCalls(false);
};

const Article1 = (props) => {
  FreestarAdSlot.queueAdCalls(true);
  return (
    <Fragment>
      <button onClick={releaseAds}>Trigger Ad Calls</button>

      <h2>Article 1</h2>
      <FsAd placementName="doodle_int_top" targeting={{ kyle: "test" }} />

      <FsAd placementName="doodle_int_bottom" />
    </Fragment>
  );
};

export default Article1;
