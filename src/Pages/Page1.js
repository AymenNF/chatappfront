import '../App.css';
import NavbarCard from "../componenets2/NavbarCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "../componenets2/SideBar";
import React from 'react';
import Basic_info_Card2 from "../componenets2/Basic_info-Card2";
import Info_Card2 from "../componenets2/Info_Card2";
import Profile_Card2 from "../componenets2/Profile_Card2";
import Profile_Card1 from "../componenets/Profile_Card1";
import Basic_info_Card from "../componenets/Basic_info-Card";
import Info_Card from "../componenets/Info_Card";




function    Page1() {


    return (
        <div className=" App" >
            <header className="App-header">
                <NavbarCard/>
            </header>

            <div className="d-flex">
                <SideBar className="Sidebare" />
                <div className="w-100">
                    <Profile_Card2/>
                    <div className="d-flex flex-column flex-md-row bd-highlight main">
                        <Basic_info_Card2 className="Basic_info_Card m-1 order-1 order-md-0 w-100 w-md-25"/>
                        <Info_Card2 className="m-1 order-0 order-md-1 w-100 w-md-75"/>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Page1;
