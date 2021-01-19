import React from 'react'

import AdFooter from './AdFooter'
import AdCheckout from './AdCheckout'
import DlpPos1 from './DlpPos1'

import './app.css'

const App = () => {
  const siteValue = "510005"
  const leagueValue = "nhl"

  return (
    <div className='app'>
      <AdFooter siteValue={siteValue} leagueValue={leagueValue} />
      <AdCheckout siteValue={siteValue} leagueValue={leagueValue} />
      <DlpPos1 siteValue={siteValue} leagueValue={leagueValue} />
    </div>
  )
}

export default App