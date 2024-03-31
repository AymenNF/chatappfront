import React from 'react'

import profile1 from "../images/profile1.png"
import profile2 from "../images/profile2.png"
import profile3 from "../images/profile3.png"
import profile4 from "../images/profile4.png"

function Test() {
  return (
    <div>
        <div class="card">
            <div className="picImagesProfile">
                <div className="imgProfileIndiv">
                    <img src={profile1} alt="" />
                </div>
                <div className="imgProfileIndiv">
                    <img src={profile2} alt="" />
                </div>
                <div className="imgProfileIndiv">
                    <img src={profile3} alt="" />
                </div>
                <div className="imgProfileIndiv">
                    <img src={profile4} alt="" />
                </div>
                <div className="imgProfileIndiv">
                    <img src={profile4} alt="" />
                </div>
                <div className="imgProfileIndiv">
                    <img src={profile4} alt="" />
                </div>
            </div>
            <div>
                <button className='btnClosePicProfile'>close</button>
            </div>
         </div>
    </div>
  )
}

export default Test