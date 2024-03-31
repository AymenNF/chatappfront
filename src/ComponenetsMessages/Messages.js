import React from 'react'
import MessagesDetails from './MessagesDetails'
import src from '../images/Jim_Spiegel.jpg'

// import Profile from {src}
import { useState , useEffect } from 'react'

function Messages() {

    const usersMessages = [
        {
            id :"1",
            image : src,
            name : "Matich" ,
            message : "Salamaa jjnojb boboubu vgvgbh jnojhnlk jjnjnj jnj jn jnjnjn byuybh h ljh:b hhl bjlhkb hkib ihb"
        },
        {
            id :"2",
            image : src,
            name : "Imad El idrissi" ,
            message : "This is imad's msg"
        },
        {
            id :"3",
            image : src,
            name : "Neffar ayman" ,
            message : "Helloo"
        },
        {
            id :"4",
            image : src,
            name : "Ouadie Ouaqar" ,
            message : "Salam"
        },
        
    ]

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const filteredMessages = usersMessages.filter((userMessage) =>
      userMessage.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  


  return (
    <>
     <header className="App-header">
          {/* <NavbarCard /> */}
        </header>
    
        <div className='ContainerMessages'>
        
        {/* <SideBar></SideBar> */}


        <div className="containerFriends">


            <div className="headerFriends">
                <h3>Chats</h3>
                <div className="convCont">
                   
                   <div className="friendDiv" >
                        <img src={src} alt="" />
                        <h6>Imad</h6>
                    </div>
                    <div className="friendDiv">
                        <img src={src} alt="" />
                        <h6>Imad</h6>
                    </div>
                    <div className="friendDiv">
                        <img src={src} alt="" />
                        <h6>Imad</h6>
                    </div>
                    <div className="friendDiv">
                        <img src={src} alt="" />
                        <h6>Imad</h6>
                    </div>
                    
                    <div className="friendDiv">
                        <img src={src} alt="" />
                        <h6>Imad</h6>
                    </div>
                    <div className="friendDiv">
                        <img src={src} alt="" />
                        <h6>Imad</h6>
                    </div>
                    <div className="friendDiv">
                        <img src={src} alt="" />
                        <h6>Imad</h6>
                    </div>
                </div>
                
            </div>
            
            <div className="searchBarConversations" >
                <form className="form">
                    <label htmlFor="search">
                    <input
                        required
                        autoComplete="off"
                        placeholder="search your chats"
                        id="search"
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <div className="icon">
                        <svg
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="swap-on"
                        >
                        <path
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        ></path>
                        </svg>
                        <svg
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="swap-off"
                        >
                        <path
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        ></path>
                        </svg>
                    </div>
                    <button type="reset" className="close-btn">
                        <svg viewBox="0 0 20 20" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                        <path
                            clipRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            fillRule="evenodd"
                        ></path>
                        </svg>
                    </button>
                    </label>

                    </form>
            </div>

            <div className="UsersMessagesCont">

                {filteredMessages.map(userMessage=>(
                    <div className="userMessage" key={userMessage.id}>
                        <div className="pictureUserMsg">
                            <img src={userMessage.image} alt="" />
                        </div>
                        <div className="dataUserMsg" style={{paddingTop:"1rem"}} >
                            <h4>{userMessage.name}</h4>
                            <p>{userMessage.message.length > 30 ? userMessage.message.substring(0, 35)+'...' : userMessage.message}</p>
                        </div>

                        
                        
                    </div>       
                ))}

            </div>


        </div>


        <div className="containerConversation">
            <MessagesDetails></MessagesDetails>
            
        </div>
      
    </div>
    
    </>
    

  )
}

export default Messages
