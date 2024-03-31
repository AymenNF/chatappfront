import React, { useState } from "react";
import { useNavigate } from "react-router";
import './StreamPage.css'
import SideBar from "./SideBar";
import NavbarCard from "./NavbarCard";

const StreamPage = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${roomCode}`);
  }

  return (
    <>
    <NavbarCard></NavbarCard>
    <div className="ContRoom">
      <SideBar></SideBar>
        <div className="stream-page">
          <form className="formStream" onSubmit={handleFormSubmit}>
            <div>
              {/* <label>Enter Room Code</label> */}
              <input
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                type="text"
                required
                placeholder="Enter Room Code"
              />
            </div>
            <button type="submit">Enter Room</button>
          </form>
        </div>
    </div>
        
    </>

  );
};

export default StreamPage;
