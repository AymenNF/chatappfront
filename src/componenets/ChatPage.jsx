import React, { useEffect, useState } from 'react'
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import "./ChatPage.css"
import src from "../stories/profile.jpg"
import "./css.css"


var stompClient =null;
const ChatRoom = () => {
    const [privateChats, setPrivateChats] = useState(new Map());     
    const [publicChats, setPublicChats] = useState([]); 
    const [tab,setTab] =useState("CHATROOM");
    
   
    const userDataString = localStorage.getItem('connectedUser');
    const userDataLS = JSON.parse(userDataString);             
     const userName = userDataLS.username;
   
    const [userData, setUserData] = useState({
        username: userName,
        receivername: '',
        connected: true,
        message: ''
      });
      
    useEffect(() => {
        
      console.log(userName);


      setUserData({...userData, username:userName})
      connect();
      console.log(userData);
    }, []);

    const onConnected = () => {
        setUserData({...userData,"connected": true});
        stompClient.subscribe('/chatroom/public', onMessageReceived);
        stompClient.subscribe('/user/'+userData.username+'/private', onPrivateMessage);
        userJoin();
    }
    
    const MAX_RETRY_COUNT = 3; // Define the maximum number of retry attempts
const RETRY_DELAY_MS = 10000; // Define the delay (in milliseconds) before each retry attempt

const connect = (retryCount = 0) => {
    let Sock = new SockJS('http://localhost:8080/ws');
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, (err) => {
        if (retryCount < MAX_RETRY_COUNT) {
            console.log(`Connection attempt failed. Retrying in ${RETRY_DELAY_MS} milliseconds...`);
            setTimeout(() => connect(retryCount + 1), RETRY_DELAY_MS);
        } else {
            console.error('Max retry count reached. Unable to establish connection.');
        }
    });
};

    // const connect = (retryCount = 0) => {
    //     let Sock = new SockJS('http://localhost:8080/ws');
    //     stompClient = over(Sock);
    //     stompClient.connect({}, onConnected, (err) => {
    //         if (retryCount < MAX_RETRY_COUNT) {
    //             console.log(`Connection attempt failed. Retrying in ${RETRY_DELAY_MS} milliseconds...`);
    //             setTimeout(() => connect(retryCount + 1), RETRY_DELAY_MS);
    //         } else {
    //             console.error('Max retry count reached. Unable to establish connection.');
    //         }
    //     });
    // };
    

    const userJoin=()=>{
          var chatMessage = {
            senderName: userData.username,
            status:"JOIN"
          };
          stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    }

    const onMessageReceived = (payload)=>{
        var payloadData = JSON.parse(payload.body);
        switch(payloadData.status){
            case "JOIN":
                if(!privateChats.get(payloadData.senderName)){
                    privateChats.set(payloadData.senderName,[]);
                    setPrivateChats(new Map(privateChats));
                }
                break;
            case "MESSAGE":
                publicChats.push(payloadData);
                setPublicChats([...publicChats]);
                break;
        }
    }
    
    const onPrivateMessage = (payload)=>{
        console.log(payload);
        var payloadData = JSON.parse(payload.body);
        if(privateChats.get(payloadData.senderName)){
            privateChats.get(payloadData.senderName).push(payloadData);
            setPrivateChats(new Map(privateChats));
        }else{
            let list =[];
            list.push(payloadData);
            privateChats.set(payloadData.senderName,list);
            setPrivateChats(new Map(privateChats));
        }
    }

    const onError = (err) => {
        console.log(err);
        
    }

    const handleMessage =(event)=>{
        const {value}=event.target;
        setUserData({...userData,"message": value});
    }
    const sendValue = () => {
        if (stompClient && userData.connected) {
          var chatMessage = {
            senderName: userData.username,
            message: userData.message,
            status: "MESSAGE"
          };
          console.log(chatMessage);
          stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
          setUserData({ ...userData, message: "" });
        }
      };

      const sendPrivateValue = () => {
        if (stompClient && userData.connected) {
          var chatMessage = {
            senderName: userData.username,
            receiverName: tab,
            message: userData.message,
            status: "MESSAGE"
          };
          if (userData.username !== tab) {
            privateChats.get(tab).push(chatMessage);
            setPrivateChats(new Map(privateChats));
          }
          stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
          setUserData({ ...userData, message: "" });
        }
      };

    const handleUsername=(event)=>{
        const {value}=event.target;
        setUserData({...userData,"username": value});
    }

    const registerUser=()=>{
        connect();
    }
    return (
    <div className="containerMsg">
        {userData.connected?
        <div className="chat-box">
            <div className="member-list">



            {/* Left Chats */}

                <div className='containerFriends'>
                    <h3>Chats</h3>
                    <div onClick={()=>{setTab("CHATROOM")}} className={`member ${tab==="CHATROOM" && "active  " }`}>Chatroom</div>
                   

                    <div className="UsersMessagesCont">
                    {[...privateChats.keys()].map((name,index)=>(
                        <div onClick={()=>{setTab(name)}} className="userMessage" key={index}>
                            <div className="pictureUserMsg">
                                <img src={src} alt="" />
                            </div>
                            <div className="dataUserMsg"  >
                                <h4>{name}</h4>
                            </div>
                            
                            
                        </div>
                    ))}
                    </div>
                  
                </div>
            </div>



            {/* Chatroom */}

            {tab==="CHATROOM" && <div className="chat-content">
                <div className="chat-messages">
                    <div className="headerChatRoom">
                        <h2>Chatroom</h2>
                    </div>
                    <hr />
                    {publicChats.map((chat,index)=>(
                        <div className={` message ${chat.senderName === userData.username && " messageItem "}`} key={index} style={{width:"55%", marginTop:"1rem", }}>
                            {chat.senderName !== userData.username &&
                             <div className="senderDiv" >
                                <img src={src} alt=""   style={{borderRadius:"50%", width:"40px",height:"40px"}}/>
                                <div className="">
                                    <div className="textContainerConvSender" style={{backgroundColor:"#F1F1F1"}}> 
                                        <p> {chat.message} </p>
                                    </div>
                                </div>
                             
                             </div>}
                           
    
                            {chat.senderName === userData.username && 
                                <div className="" > 
                                    <div className="ReceiverDiv">
                                    <div className="" style={{display:"flex",justifyContent:"space-between"}}>
                                        <div className="textContainerConvSender" style={{backgroundColor:"#FFC49A"}}   > 
                                                <p  > {chat.message} </p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={src} alt=""  style={{borderRadius:"50%", width:"40px",height:"40px"}}/>
                                    </div>
                                        
                                    </div>
                                </div>}
                        </div>
                    ))}

                    
                </div>
                <hr />
                <div className="MessageEnv" style={{marginTop:"1rem"}}>
                    <input type="text" className="MsgInput"  placeholder="enter the message" value={userData.message} onChange={handleMessage} /> 
                    <button type="button" className="send-button" onClick={sendValue}> <span>Envoyer</span> </button>
                </div>



            </div>
            }




            {/* Messages */}
            {tab!=="CHATROOM" && <div className="chat-content">
                <div className="chat-messages" >
                <div className="headerChatRoom">
                        <h2 style={{fontWeight:"bold"}} > {tab} </h2>
                </div>
                <hr />
                    {[...privateChats.get(tab)].map((chat,index)=>(
                        <div className={`message ${chat.senderName === userData.username && "self"}`} key={index} style={{width:"55%", marginTop:"1rem", }}>
                            {chat.senderName !== userData.username && 
                                <div className="senderDiv" >
                                <img src={src} alt=""   style={{borderRadius:"50%", width:"40px",height:"40px"}}/>
                                <div className="">
                                    <div className="textContainerConvSender" style={{backgroundColor:"#F1F1F1"}}> 
                                        <p> {chat.message} </p>
                                    </div>
                                </div>
                             
                             </div>
                            }

                            {chat.senderName === userData.username && 
                                <div className="divMsgprivate"  > 
                                <div className="ReceiverDiv" style={{marginLeft:"auto"}}>
                                <div className="" style={{display:"flex",justifyContent:"space-between"}}>
                                    <div className="textContainerConvSender" style={{backgroundColor:"#FFC49A"}}   > 
                                            <p  > {chat.message} </p>
                                    </div>
                                </div>
                                <div>
                                    <img src={src} alt=""  style={{borderRadius:"50%", width:"40px",height:"40px"}}/>
                                </div>
                                    
                                </div>
                            </div>
                            }
                        </div>
                    ))}

                    
                </div>
                <hr />

                <div className="MessageEnv" style={{marginTop:"1rem"}}>
                    <input type="text" className="MsgInput" placeholder="enter the message" value={userData.message} onChange={handleMessage} /> 
                    <button type="button" className="send-button" onClick={sendPrivateValue}> <span>Envoyer</span> </button>
                </div>

  


            </div>}
        </div>
        :
        <div className="register">
            <input
                id="user-name"
                placeholder="Enter your name"
                name="userName"
                value={userData.username}
                onChange={handleUsername}
                margin="normal"
              />
              <button type="button" onClick={registerUser}>
                    connect
              </button> 
        </div>}
    </div>
    )
}

export default ChatRoom