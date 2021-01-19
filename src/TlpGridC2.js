import React from 'react'

import FreestarAdSlot from '@freestar/pubfig-adslot-react-component'

const TlpGridC2 = (props) => {
  const placementName = 'fanatics_tlp_grid_c2_675x365'
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

export default TlpGridC2
