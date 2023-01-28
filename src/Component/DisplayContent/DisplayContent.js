import React from 'react'
import LeftSide from './LeftSide/LeftSide'
import RightSide from './RightSide/RightSide'


function DisplayContent(props) {
  return (
    <div style={{display:'flex'}}>
      <div>
        <LeftSide/>
      </div>
      <div>
        <RightSide/>
      </div>
    </div>
  )
}

export default DisplayContent

