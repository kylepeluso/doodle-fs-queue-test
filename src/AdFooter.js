import React from 'react'

import FreestarAdSlot from '@freestar/pubfig-adslot-react-component'

const AdFooter = () => {
  const placementName = 'fanatics_all_footer'
  const publisher = 'fanatics-com'
  const targeting = { test: 'testads', siteId : '510005', league: 'nfl' }

  return (
    <div>
      <FreestarAdSlot
        publisher={publisher}
        placementName={placementName}
        targeting={targeting}
        keyValueConfigMappingURL='https://a.pub.network/fanatics-com/placement-mapping-2.json'
        onNewAdSlotsHook={(placementName) => console.log('creating ad', placementName)}
        onDeleteAdSlotsHook={(placementName) => console.log('destroying ad', placementName)}
        onAdRefreshHook={(placementName) => console.log('refreshing ad', placementName)}
      />
    </div>
  )
}

export default AdFooter
