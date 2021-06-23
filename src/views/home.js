import React, {Fragment} from 'react'
import FsAd from "../FsAd";
import FreestarAdSlot from "@freestar/pubfig-adslot-react-component";

const publisher = 'freestar-com'

FreestarAdSlot.setPageTargeting('test', 'testads')

const Home = (props) => {
    return (
        <Fragment>
            <FsAd publisher={publisher} placementName='freestar_display_ad_1' placementTargeting={{'key': 'value'}} />
            <FsAd publisher={publisher} placementName='freestar_display_ad_2' placementTargeting={{}} />
            <FsAd publisher={publisher} placementName='freestar_leaderboard_cls' placementTargeting={{}} />
            <FsAd publisher={publisher} placementName='freestar_superflex' placementTargeting={{}} />
        </Fragment>
    )
}

export default Home
