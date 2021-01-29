import React from 'react'

import FreestarAdSlot from '@freestar/pubfig-adslot-react-component'
import FsAd from './FsAd'


import './app.css'

const App = () => {
  const siteValue = "510005"
  const leagueValue = "nhl"
  
  FreestarAdSlot.setPageTargeting('siteId', siteValue)
  FreestarAdSlot.setPageTargeting('league', leagueValue)
  FreestarAdSlot.setPageTargeting('test', 'testads')

  return (
    <div className='app'>
      <h3>Site: {siteValue} - League: {leagueValue}</h3>
      <FsAd placementName='fanatics_all_footer' placementTargeting={{'kyle': 'rules'}} />
      <FsAd placementName='fanatics_llp_1600x150' placementTargeting={{}} />
      <FsAd placementName='fanatics_tlp_side_nav_pos1' placementTargeting={{}} />
      <FsAd placementName='fanatics_tlp_side_nav_pos2' placementTargeting={{}} />
      <FsAd placementName='fanatics_tlp_side_nav_pos3' placementTargeting={{}} />
      <FsAd placementName='fanatics_tlp_side_nav_pos4' placementTargeting={{}} />
      <FsAd placementName='fanatics_tlp_grid_c1_675x365' placementTargeting={{}} />
      <FsAd placementName='fanatics_tlp_grid_c2_675x365' placementTargeting={{}} />
      <FsAd placementName='fanatics_dlp_top' placementTargeting={{}} />
      <FsAd placementName='fanatics_dlp_side_nav_pos1' placementTargeting={{}} />
      <FsAd placementName='fanatics_dlp_side_nav_pos2' placementTargeting={{}} />
      <FsAd placementName='fanatics_dlp_side_nav_pos3' placementTargeting={{}} />
      <FsAd placementName='fanatics_dlp_side_nav_pos4' placementTargeting={{}} />
      <FsAd placementName='fanatics_pdp_pos1' placementTargeting={{}} />
      <FsAd placementName='fanatics_pdp_pos2' placementTargeting={{}} />
      <FsAd placementName='fanatics_pdp_pos3' placementTargeting={{}} />
      <FsAd placementName='fanatics_cp_728X90' placementTargeting={{}} />
    </div>
  )
}

export default App