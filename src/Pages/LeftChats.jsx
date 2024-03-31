import React from 'react';
import src from "../images/Jim_Spiegel.jpg";

const LeftChats = ({ privateChats, tab, setTab }) => {
    return (
        <div className='Chat2'>
            <h3>Chats</h3>
            <hr />
            <div onClick={() => { setTab("CHATROOM") }} className={`member ${tab === "CHATROOM" && "active  " }`}>Chatroom</div>
            <div className="UsersMessagesCont">
                {[...privateChats.keys()].map((name, index) => (
                    <div onClick={() => { setTab(name) }} className="userMessage" key={index}>
                        <div className="pictureUserMsg">
                            <img src={src} alt="" id='pictureUserMsgPic' />
                        </div>
                        <div className="dataUserMsg">
                            <h4>{name}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LeftChats;
