import React from 'react'

import FreestarAdSlot from '@freestar/pubfig-adslot-react-component'

const FsAd = (props) => {
  const publisher = 'fanatics-com'
  const placementName = props.placementName
  const placementTargeting = props.placementTargeting;

  return (
    <div>
      <div className="i">{placementName}</div>
      <FreestarAdSlot
        publisher={publisher}
        placementName={placementName}
        targeting={placementTargeting}
        keyValueConfigMappingURL='https://a.pub.network/fanatics-com/placement-mapping.json'
        onNewAdSlotsHook={(placementName) => console.log('creating ad', placementName)}
        onDeleteAdSlotsHook={(placementName) => console.log('destroying ad', placementName)}
        onAdRefreshHook={(placementName) => console.log('refreshing ad', placementName)}
      />
    </div>
  )
}

export default FsAd
