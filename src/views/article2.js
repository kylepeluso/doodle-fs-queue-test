import React, { Fragment } from "react";
import FsAd from "../FsAd";
import FreestarAdSlot from "@freestar/pubfig-adslot-react-component";

FreestarAdSlot.queueAdCalls(true);
const releaseAds = () => {
  FreestarAdSlot.queueAdCalls(false);
};

const Article2 = (props) => {
  return (
    <Fragment>
      <button onClick={releaseAds}>Trigger Ad Calls</button>

      <h2>Article 2</h2>
      <FsAd placementName="doodle_int_top" targeting={{ kyle: "test" }} />

      <FsAd placementName="doodle_int_bottom" />
    </Fragment>
  );
};

export default Article2;
