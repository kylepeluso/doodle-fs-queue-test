import React, {Fragment} from 'react'
import FsAd from "../FsAd";
import FreestarAdSlot from "@freestar/pubfig-adslot-react-component";

const publisher = 'reuters-com'

FreestarAdSlot.setPageTargeting('test', 'testads')
FreestarAdSlot.queueAdCalls(true)


const slotSize = [[300,250], [728,90]]
const sizeMapping = [
    {viewport: [0,0], slot: [300,250]},
    {viewport: [768, 0], slot: [728,90]}
]
let handleClick = () => {
    FreestarAdSlot.queueAdCalls(false)
}
const Reuters = (props) => {
    return (
        <Fragment>

                <button onClick={handleClick}>Trigger Queued Ads</button>
                <FsAd publisher={publisher} placementName='reuters_desktop_right_rail_1' placementTargeting={{'kyle': 'rules'}} channel='/4735792/reuters.com/home'  />
                <FsAd publisher={publisher} placementName='reuters_desktop_right_rail_2' placementTargeting={{}} channel='/4735792/reuters.com/breakingviews' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar euismod quam, ut tempor lacus congue vitae. Etiam tempor enim neque, ut laoreet lorem sollicitudin sit amet. Quisque at risus nunc. Aenean consectetur, diam quis tincidunt tempus, lacus erat ornare mi, eget auctor nulla turpis et justo. Aliquam vitae purus vitae purus faucibus euismod. Nulla placerat mauris non eros consequat laoreet. Curabitur faucibus vitae nisi quis rhoncus. Praesent nec arcu erat. Mauris iaculis enim sed felis commodo volutpat. Cras vulputate mollis dui vel porta. Quisque sodales odio sit amet luctus ullamcorper. Integer lobortis laoreet velit, in dapibus turpis pharetra in.</p>
                <p>Donec eros ipsum, finibus et luctus ut, ultrices vitae eros. Sed eu dapibus leo, non tempor justo. Nam enim ipsum, fermentum eu convallis id, semper id neque. Suspendisse potenti. Sed blandit nisi non erat placerat bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id ultricies nisi. Quisque at ornare quam. Integer quis purus eget mi tristique dictum. Nullam congue dapibus velit et vulputate. Fusce risus nibh, luctus in neque eget, posuere varius libero. Sed id mollis ex, sit amet blandit ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ligula eros, ullamcorper vel ante eget, pellentesque bibendum lacus.</p>
                <p>Nullam faucibus sapien eu dapibus consequat. Sed consectetur eu purus quis viverra. Ut dignissim odio varius, sagittis ligula quis, sagittis ipsum. Donec vehicula suscipit pellentesque. Donec congue blandit felis. Ut tristique nulla ut lectus tristique, a lobortis sapien condimentum. Ut quis lorem nec mauris feugiat tristique ac nec purus. Sed in massa laoreet, iaculis purus eget, sodales velit. Fusce at odio malesuada, gravida augue ac, lobortis tellus. Aenean et augue pharetra, rutrum velit eu, luctus enim. Ut vitae convallis neque, nec dapibus arcu.</p>
                <p>Nulla facilisi. Quisque luctus, urna nec interdum elementum, ex arcu placerat dolor, sit amet vulputate enim leo ut orci. Cras nec tristique dolor. Quisque purus diam, maximus id risus a, gravida congue eros. Nullam ornare hendrerit commodo. Integer tristique in purus eget posuere. Donec sit amet iaculis neque, vel fringilla quam. Donec sed congue lectus. Donec varius ex id mauris scelerisque, et tincidunt ligula imperdiet. Morbi sed ex a urna accumsan pharetra. Curabitur dapibus mollis risus ut consequat. Vestibulum molestie maximus dolor, mollis iaculis risus congue nec.</p>
                <p>Praesent placerat ex aliquet laoreet volutpat. Donec convallis eu odio sit amet imperdiet. Nunc scelerisque magna urna, at varius elit euismod sed. Donec ultrices lectus vehicula mauris pulvinar placerat. Integer vitae bibendum quam. Integer maximus arcu at erat pellentesque placerat eu consequat est. Duis faucibus sagittis tortor sit amet hendrerit. Vestibulum non sapien sit amet ante fringilla placerat id rutrum lacus. Sed ac eleifend ante. Sed eu dictum ante. Morbi vehicula est lacinia mattis tristique.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar euismod quam, ut tempor lacus congue vitae. Etiam tempor enim neque, ut laoreet lorem sollicitudin sit amet. Quisque at risus nunc. Aenean consectetur, diam quis tincidunt tempus, lacus erat ornare mi, eget auctor nulla turpis et justo. Aliquam vitae purus vitae purus faucibus euismod. Nulla placerat mauris non eros consequat laoreet. Curabitur faucibus vitae nisi quis rhoncus. Praesent nec arcu erat. Mauris iaculis enim sed felis commodo volutpat. Cras vulputate mollis dui vel porta. Quisque sodales odio sit amet luctus ullamcorper. Integer lobortis laoreet velit, in dapibus turpis pharetra in.</p>
                <p>Donec eros ipsum, finibus et luctus ut, ultrices vitae eros. Sed eu dapibus leo, non tempor justo. Nam enim ipsum, fermentum eu convallis id, semper id neque. Suspendisse potenti. Sed blandit nisi non erat placerat bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id ultricies nisi. Quisque at ornare quam. Integer quis purus eget mi tristique dictum. Nullam congue dapibus velit et vulputate. Fusce risus nibh, luctus in neque eget, posuere varius libero. Sed id mollis ex, sit amet blandit ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ligula eros, ullamcorper vel ante eget, pellentesque bibendum lacus.</p>
                <p>Nullam faucibus sapien eu dapibus consequat. Sed consectetur eu purus quis viverra. Ut dignissim odio varius, sagittis ligula quis, sagittis ipsum. Donec vehicula suscipit pellentesque. Donec congue blandit felis. Ut tristique nulla ut lectus tristique, a lobortis sapien condimentum. Ut quis lorem nec mauris feugiat tristique ac nec purus. Sed in massa laoreet, iaculis purus eget, sodales velit. Fusce at odio malesuada, gravida augue ac, lobortis tellus. Aenean et augue pharetra, rutrum velit eu, luctus enim. Ut vitae convallis neque, nec dapibus arcu.</p>
                <p>Nulla facilisi. Quisque luctus, urna nec interdum elementum, ex arcu placerat dolor, sit amet vulputate enim leo ut orci. Cras nec tristique dolor. Quisque purus diam, maximus id risus a, gravida congue eros. Nullam ornare hendrerit commodo. Integer tristique in purus eget posuere. Donec sit amet iaculis neque, vel fringilla quam. Donec sed congue lectus. Donec varius ex id mauris scelerisque, et tincidunt ligula imperdiet. Morbi sed ex a urna accumsan pharetra. Curabitur dapibus mollis risus ut consequat. Vestibulum molestie maximus dolor, mollis iaculis risus congue nec.</p>
                <p>Praesent placerat ex aliquet laoreet volutpat. Donec convallis eu odio sit amet imperdiet. Nunc scelerisque magna urna, at varius elit euismod sed. Donec ultrices lectus vehicula mauris pulvinar placerat. Integer vitae bibendum quam. Integer maximus arcu at erat pellentesque placerat eu consequat est. Duis faucibus sagittis tortor sit amet hendrerit. Vestibulum non sapien sit amet ante fringilla placerat id rutrum lacus. Sed ac eleifend ante. Sed eu dictum ante. Morbi vehicula est lacinia mattis tristique.</p>
                <FsAd publisher={publisher} placementName='reuters_desktop_right_rail_3' placementTargeting={{}} channel='/4735792/reuters.com' passthrough='' />
                <FsAd slotSize={slotSize} sizeMapping={sizeMapping} publisher={publisher} placementName='reuters_desktop_right_rail_4' placementTargeting={{}} channel='reuters.com' passthrough='/4735792/reuters.com/breakingviews/home2' />

        </Fragment>
    )
}

export default Reuters
