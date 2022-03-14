import React, { Fragment, useEffect } from "react";
import FsAd from "../FsAd";
import FreestarAdSlot from "@freestar/pubfig-adslot-react-component";

const Home = (props) => {
  FreestarAdSlot.queueAdCalls(true);
  useEffect(() => {
    FreestarAdSlot.queueAdCalls(false);
  }, []);
  return (
    <Fragment>
      <FsAd placementName="doodle_int_top" targeting={{ key: "value" }} />
      <FsAd placementName="doodle_int_bottom" />
    </Fragment>
  );
};

export default Home;
