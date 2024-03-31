import '../App.css';
import NavbarCard from "../componenets2/NavbarCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "../componenets2/SideBar";
import React from 'react';
import Messages from '../ComponenetsMessages/Messages';
import MessagesDetails from '../ComponenetsMessages/MessagesDetails';
import ChatPage from './ChatPage'

function Page2() {
    return(
        <div className=" App" >
        <header className="App-header">
            {/* <h1></h1> */}
            <NavbarCard/>
        </header>

        <div className="d-flex">
            <SideBar className="Sidebare" />
            <div className="ContainerMsgsDiv">
                <ChatPage />
                </div>
            </div>
        </div>
    
            
            );
    
}

export default Page2;
