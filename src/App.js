import React from 'react'

import FreestarAdSlot from '@freestar/pubfig-adslot-react-component'
import FsAd from './FsAd'


import './app.css'

const App = () => {

  const publisher = 'demoads-com'

  FreestarAdSlot.setPageTargeting('test', 'testads')

  return (
    <div className='app'>
      <FsAd publisher={publisher} placementName='demoads_300x250' placementTargeting={{'key': 'value'}} />
      <FsAd publisher={publisher} placementName='demoads_728x90_320x50' placementTargeting={{}} />
      <FsAd publisher={publisher} placementName='demoads_160x600_1' placementTargeting={{}} />
      <FsAd publisher={publisher} placementName='demoads_160x600_2' placementTargeting={{}} />
    </div>
  )
}

export default App