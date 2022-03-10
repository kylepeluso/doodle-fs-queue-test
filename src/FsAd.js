import React, { useEffect } from "react";

import FreestarAdSlot from "@freestar/pubfig-adslot-react-component";

const FsAd = (props) => {
  const publisher = "doodle-com";
  const placementName = props.placementName;
  const slotId = props.slotId ? props.slotId : undefined;
  const targeting = props.targeting ? props.targeting : undefined;
  useEffect(() => {
    console.log(placementName, "component mounted");
  });
  return (
    <div>
      <div className="i">{placementName}</div>
      <FreestarAdSlot
        publisher={publisher}
        placementName={placementName}
        targeting={targeting}
        slotId={slotId}
        onNewAdSlotsHook={(placementName) =>
          console.log("creating ad", placementName)
        }
        onDeleteAdSlotsHook={(placementName) =>
          console.log("destroying ad", placementName)
        }
        onAdRefreshHook={(placementName) =>
          console.log("refreshing ad", placementName)
        }
      />
    </div>
  );
};

export default FsAd;
