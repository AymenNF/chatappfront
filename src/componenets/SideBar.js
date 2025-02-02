// LeftMenu.js
import React from 'react';
import { Menu, MenuItem } from 'react-pro-sidebar';
import {AiFillMessage} from "react-icons/ai";
import {FaUserFriends} from "react-icons/fa";
import { CiStreamOn } from "react-icons/ci";
import { RiLiveFill } from "react-icons/ri";



import './SideBar.css';
import {CgProfile} from "react-icons/cg";
import {Link} from "react-router-dom";

function SideBar() {
    return (
        <Menu className="menu">
            <MenuItem className="menuItem" component={<Link to="/" />} icon={<AiFillMessage style={{ color: '#CF0000' }} />}> Messages </MenuItem>
            <MenuItem className="menuItem" component={<Link to="/Profile" />} icon={<CgProfile style={{ color: '#62D760' }} />}> Profile</MenuItem>
            <MenuItem className="menuItem" component={<Link to="/room" />} icon={<RiLiveFill  style={{ color: 'red',  }} />}> Stream </MenuItem>
        </Menu>
    );
}
export default SideBar;
