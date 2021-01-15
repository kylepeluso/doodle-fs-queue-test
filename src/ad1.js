import React from 'react'

import FreestarAdSlot from '@freestar/pubfig-adslot-react-component'

import './demo.css'

const Ad1 = () => {
  const placementName = 'headphonereview_300x250_320x50_1'
  const publisher = 'headphonereview'
  const targeting = { test: 'testads', site : 'fanatics', section:'NFL' }

  return (
    <div>
      <FreestarAdSlot
        publisher={publisher}
        placementName={placementName}
        targeting={targeting}
        classList={['m-30', 'p-15', 'b-thin-red']}
        placementMappingLocation='https://api.jsonbin.io/b/6000f76fe31fbc3bdef3d725/1'
      />
    </div>
  )
}

export default Ad1
