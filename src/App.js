import React from 'react'

import AdFooter from './AdFooter'
import AdCheckout from './AdCheckout'
import DlpPos1 from './DlpPos1'
import DlpPos2 from './DlpPos2'
import DlpPos3 from './DlpPos3'
import DlpPos4 from './DlpPos4'
import DlpTop from './DlpTop'
import Llp from './Llp'
import PdpPos1 from './PdpPos1'
import PdpPos2 from './PdpPos2'
import PdpPos3 from './PdpPos3'
import TlpGridC1 from './TlpGridC1'
import TlpGridC2 from './TlpGridC2'
import TlpPos1 from './TlpPos1'
import TlpPos2 from './TlpPos2'
import TlpPos3 from './TlpPos3'
import TlpPos4 from './TlpPos4'

import './app.css'

const App = () => {
  const siteValue = "508032"
  const leagueValue = "nhl"

  return (
    <div className='app'>
      <AdFooter siteValue={siteValue} leagueValue={leagueValue} />
      <AdCheckout siteValue={siteValue} leagueValue={leagueValue} />
      <DlpPos1 siteValue={siteValue} leagueValue={leagueValue} />
      <DlpPos2 siteValue={siteValue} leagueValue={leagueValue} />
      <DlpPos3 siteValue={siteValue} leagueValue={leagueValue} />
      <DlpPos4 siteValue={siteValue} leagueValue={leagueValue} />
      <DlpTop siteValue={siteValue} leagueValue={leagueValue} />
      <Llp siteValue={siteValue} leagueValue={leagueValue} />
      <PdpPos1 siteValue={siteValue} leagueValue={leagueValue} />
      <PdpPos2 siteValue={siteValue} leagueValue={leagueValue} />
      <PdpPos3 siteValue={siteValue} leagueValue={leagueValue} />
      <TlpGridC1 siteValue={siteValue} leagueValue={leagueValue} />
      <TlpGridC2 siteValue={siteValue} leagueValue={leagueValue} />
      <TlpPos1 siteValue={siteValue} leagueValue={leagueValue} />
      <TlpPos2 siteValue={siteValue} leagueValue={leagueValue} />
      <TlpPos3 siteValue={siteValue} leagueValue={leagueValue} />
      <TlpPos4 siteValue={siteValue} leagueValue={leagueValue} />
    </div>
  )
}

export default App