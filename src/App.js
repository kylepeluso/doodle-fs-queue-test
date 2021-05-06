import React from 'react'

import FreestarAdSlot from '@freestar/pubfig-adslot-react-component'
import FsAd from './FsAd'


import './app.css'

const App = () => {

  const publisher = 'freestar-com'

  FreestarAdSlot.setPageTargeting('test', 'testads')

  return (
    <div className='app'>
      <FsAd publisher={publisher} placementName='freestar_display_ad_1' placementTargeting={{'key': 'value'}} />
      <FsAd publisher={publisher} placementName='freestar_display_ad_2' placementTargeting={{}} />
      <FsAd publisher={publisher} placementName='freestar_leaderboard_cls' placementTargeting={{}} />
      <FsAd publisher={publisher} placementName='freestar_superflex' placementTargeting={{}} />
    </div>
  )
}

export default App
