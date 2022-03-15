import React, { Fragment, useEffect } from "react";
import FsAd from "../FsAd";
import FreestarAdSlot from "@freestar/pubfig-adslot-react-component";

const Article2 = (props) => {
  FreestarAdSlot.queueAdCalls(true);
  useEffect(() => {
    FreestarAdSlot.releaseQueuedAds();
  }, []);
  return (
    <Fragment>
      <h2>Article 2</h2>
      <FsAd placementName="doodle_int_top" targeting={{ kyle: "test" }} />

      <FsAd placementName="doodle_int_bottom" />
    </Fragment>
  );
};

export default Article2;
