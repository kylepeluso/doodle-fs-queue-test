import React from "react";

import FreestarAdSlot from "@freestar/pubfig-adslot-react-component";

const FsAd = (props) => {
  const publisher = "motortrend-com";
  const placementName = props.placementName;
  const channel = props.channel;
  const slotId = props.slotId ? props.slotId : undefined;
  const adUnitPath = props.adUnitPath ? props.adUnitPath : undefined;
  const slotSize = props.slotSize ? props.slotSize : undefined;
  const placementTargeting = props.placementTargeting
    ? props.placementTargeting
    : undefined;
  return (
    <div>
      <div className="i">{placementName}</div>
      <FreestarAdSlot
        publisher={publisher}
        placementName={placementName}
        targeting={placementTargeting}
        channel={channel}
        slotId={slotId}
        adUnitPath={adUnitPath}
        slotSize={slotSize}
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
