import React from 'react'

import FreestarAdSlot from '@freestar/pubfig-adslot-react-component'

const PdpPos1 = (props) => {
  const placementName = 'fanatics_pdp_pos1'
  const publisher = 'fanatics-com'
  const targeting = { test: 'testads', siteId : props.siteValue, league: props.leagueValue }

  return (
    <div>
      <FreestarAdSlot
        publisher={publisher}
        placementName={placementName}
        targeting={targeting}
        keyValueConfigMappingURL='https://a.pub.network/fanatics-com/placement-mapping.json'
        onNewAdSlotsHook={(placementName) => console.log('creating ad', placementName)}
        onDeleteAdSlotsHook={(placementName) => console.log('destroying ad', placementName)}
        onAdRefreshHook={(placementName) => console.log('refreshing ad', placementName)}
      />
    </div>
  )
}

export default PdpPos1
