import React from 'react';
import './Basic_info-Card2.css'
function Basic_info_Card2() {
    return (
        <div className="Basic-info p-3">
            <h5>Basic Info</h5>
            <div className=" mt-4 d-flex justify-content-between info_part ">
                <div className="info">
                    <h6>Male</h6>
                    <span>Gender</span>
                </div>
            </div>
            <div className="mt-3 d-flex justify-content-between info_part">
                <div className="info">
                    <h6>December 9</h6>
                    <p>Birth date</p>
                </div>
            </div>
            <div className="mt-3 d-flex justify-content-between info_part">
                <div className="info">
                    <h6>2002</h6>
                    <p>Birth year</p>
                </div>
            </div>
            <div className="mt-3 d-flex justify-content-between info_part">
                <div className="info">
                    <h6>From Ouazzane</h6>
                    <span>Hometown</span>
                </div>
            </div>
            <div className="mt-3  d-flex justify-content-between info_part">
                <div className="info">
                    <h6>Married</h6>
                    <p>marital status</p>
                </div>
            </div>
            <div className="mt-3  d-flex justify-content-between info_part">
                <div className="info">
                    <h6>Av. Allal Al Fassi</h6>
                    <p>address</p>
                </div>
            </div>
        </div>


    );
}
export default Basic_info_Card2;
