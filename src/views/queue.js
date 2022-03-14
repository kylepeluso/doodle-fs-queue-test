import React, { Fragment, useEffect } from "react";
import FsAd from "../FsAd";
import FreestarAdSlot from "@freestar/pubfig-adslot-react-component";

const QueuePage = (props) => {
  FreestarAdSlot.queueAdCalls(true);
  useEffect(() => {
    FreestarAdSlot.queueAdCalls(false);
  }, []);
  return (
    <Fragment>
      <FsAd placementName="doodle_int_top" targeting={{ kyle: "test" }} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        pulvinar euismod quam, ut tempor lacus congue vitae. Etiam tempor enim
        neque, ut laoreet lorem sollicitudin sit amet. Quisque at risus nunc.
        Aenean consectetur, diam quis tincidunt tempus, lacus erat ornare mi,
        eget auctor nulla turpis et justo. Aliquam vitae purus vitae purus
        faucibus euismod. Nulla placerat mauris non eros consequat laoreet.
        Curabitur faucibus vitae nisi quis rhoncus. Praesent nec arcu erat.
        Mauris iaculis enim sed felis commodo volutpat. Cras vulputate mollis
        dui vel porta. Quisque sodales odio sit amet luctus ullamcorper. Integer
        lobortis laoreet velit, in dapibus turpis pharetra in.
      </p>
      <FsAd placementName="doodle_int_bottom" />
      <p>
        Donec eros ipsum, finibus et luctus ut, ultrices vitae eros. Sed eu
        dapibus leo, non tempor justo. Nam enim ipsum, fermentum eu convallis
        id, semper id neque. Suspendisse potenti. Sed blandit nisi non erat
        placerat bibendum. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Proin id ultricies nisi.
        Quisque at ornare quam. Integer quis purus eget mi tristique dictum.
        Nullam congue dapibus velit et vulputate. Fusce risus nibh, luctus in
        neque eget, posuere varius libero. Sed id mollis ex, sit amet blandit
        ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Quisque ligula eros, ullamcorper vel ante eget, pellentesque bibendum
        lacus.
      </p>
    </Fragment>
  );
};

export default QueuePage;
