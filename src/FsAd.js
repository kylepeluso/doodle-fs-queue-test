import React from "react";

import FreestarAdSlot from "@freestar/pubfig-adslot-react-component";

const FsAd = (props) => {
  const publisher = "motortrend-com";
  const placementName = props.placementName;
  const channel = props.channel;
  const placementTargeting = props.placementTargeting
    ? props.placementTargeting
    : "";
  return (
    <div>
      <div className="i">{placementName}</div>
      <FreestarAdSlot
        publisher={publisher}
        placementName={placementName}
        targeting={placementTargeting}
        channel={channel}
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
