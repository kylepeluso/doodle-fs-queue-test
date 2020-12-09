import React from 'react'

import FreestarAdSlot from '@freestar/pubfig-adslot-react-component'

import './demo.css'

const AdOne = () => {
  const placementName = 'GardeningKnowHow_300x600_300x250_320x50_Right_1_'
  const publisher = 'gardeningknowhow'
  const targeting = { test: 'testads' }

  return (
    <div>
      <FreestarAdSlot
        publisher={publisher}
        placementName={placementName}
        targeting={targeting}
        classList={['m-30', 'p-15', 'b-thin-red']}
      />
    </div>
  )
}

const AdTwo = () => {
  const placementName = 'GardeningKnowHow_300x600_300x250_320x50_Right_2_'
  const publisher = 'gardeningknowhow'
  const targeting = { test: 'testads' }

  return (
    <div>
      <FreestarAdSlot
        publisher={publisher}
        placementName={placementName}
        targeting={targeting}
        classList={['m-30', 'p-15', 'b-thin-red']}
      />
    </div>
  )
}

export default { AdOne, AdTwo, }