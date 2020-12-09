import React from 'react'

import FreestarAdSlot from '@freestar/pubfig-adslot-react-component'

import './demo.css'

const Ad2 = () => {
  const placementName = 'myCustomAdPlacement'
  const publisher = 'gardeningknowhow'
  const targeting = { kyle: 'KPP' }
  const slotSize = [[300,250], [728,90]]
  const adUnitPath = '/15184186/123helpme_incontent_1'


  return (
    <div>
      <FreestarAdSlot
        publisher={publisher}
        placementName={placementName}
        targeting={targeting}
        classList={['m-30', 'p-15', 'b-thin-red']}
        adUnitPath={adUnitPath}
        slotSize={slotSize}
        onNewAdSlotsHook={
          () => {
            console.log('KP - creating ad ', placementName)
            console.log('KP - slot size ', slotSize)
            console.log('KP - adUnitPath ' , adUnitPath)
          }
        }
      />
    </div>
  )
}

export default Ad2