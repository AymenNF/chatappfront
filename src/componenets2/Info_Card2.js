import React from 'react';
import './Info_Card2.css'
function Info_Card2() {
    return (
        <div className=" global-info">
            <div className=" mt-3 d-flex justify-content-between info-part ">
                    <h6 className="font-weight-bold" >Phone Number</h6>
                    <span className="second-info">+212 637541024</span>
            </div>
            <hr style={{ width: '94%', color:'#717171',marginLeft:'2%', marginTop:'1%' }} />
            <div className="mt-3 d-flex justify-content-between info-part" >
                    <h6>Email</h6>
                    <span className="second-info">Ouaqauarouadie@gmail.com</span>
            </div>
            <hr style={{ width: '94%', color:'#717171',marginLeft:'2%', marginTop:'1%' }} />

            <div className="mt-3 d-flex justify-content-between info-part ">
                    <h6>Work and Education</h6>
                    <span className="second-info">Student at INPT</span>
            </div>
            <hr style={{ width: '94%', color:'#717171',marginLeft:'2%', marginTop:'1%' }} />

            <div className="mt-3 d-flex justify-content-between info-part">
                    <h6>WebSite</h6>
                    <span className="second-info">site.com</span>
            </div>
            <hr style={{ width: '94%', color:'#717171',marginLeft:'2%', marginTop:'1%' }} />

            <div className="mt-3 d-flex justify-content-between info-part ">
                    <h6>About you</h6>
                    <span className="w-50 m-lg-2 second-info">Write some details about yourself Write some details about yourself Write some details about yourself Write some details about yourself</span>
            </div>

            <div className="mt-3 d-flex justify-content-between info-part">
                    <h6>Favourite</h6>
                    <span className="w-50 m-lg-2 second-info">Write some details about yourself Write some details about yourself Write some details about yourself</span>
            </div>
        </div>


    );
}
export default Info_Card2;
