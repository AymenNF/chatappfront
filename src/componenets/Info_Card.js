import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdEdit } from "react-icons/md";
import './Info_Card.css';
function Info_Card() {
  const [phone, setPhone] = useState('0631425114');
  const [email, setEmail] = useState('OUAQIE@GMAIL.COM');
  const [workAndEducation, setWorkAndEducation] = useState('Student ');
  const [website, setWebsite] = useState('site.com');
  const [aboutYou, setAboutYou] = useState('ouadie ouadie ouaqar ouadie oaudeoajd adozjk azdjnk azdjk');
  const [favourite, setFavourite] = useState('iefha aezkd abd akzd azedb');

  const [isEditing, setIsEditing] = useState({
    phone: false,
    email: false,
    workAndEducation: false,
    website: false,
    aboutYou: false,
    favourite: false
  });

  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Charger les données utilisateur depuis le backend lors du montage du composant
    const fetchUserData = async () => {
      try {
        const userDataString = localStorage.getItem('connectedUser');
        const userData = JSON.parse(userDataString);             
         const userId = userData.id;
        const response = await axios.get(`http://localhost:8080/e-social/users/id/${userId}`);
        setUserData(response.data); 
        setPhone(response.data.phone);
        setEmail(response.data.email);
        setWorkAndEducation(response.data.work);
        setWebsite(response.data.website);
        setAboutYou(response.data.aboutYou);
        setFavourite(response.data.favourite);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleEditClick = (field) => {
    setIsEditing((prevIsEditing) => ({ ...prevIsEditing, [field]: true }));
  };

  const handleSaveClick = (field) => {
    setIsEditing((prevIsEditing) => ({ ...prevIsEditing, [field]: false }));
  };

  const handleUpdate = async (attribute, value) => {
    try {
      const userDataString = localStorage.getItem('connectedUser');
      const userData = JSON.parse(userDataString);             
       const userId = userData.id;
      const response = await axios.put(`http://localhost:8080/e-social/users/${userId}`, {
        [attribute]: value,
      });

      // Mettez à jour l'état local en fonction de la réponse du serveur
      switch (attribute) {
        case 'phoneNumber':
          setPhone(value);
          break;
        case 'email':
          setEmail(value);
          break;
        case 'workAndEducation':
          setWorkAndEducation(value);
          break;
        case 'website':
          setWebsite(value);
          break;
        case 'aboutYou':
          setAboutYou(value);
          break;
        case 'favourite':
          setFavourite(value);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(`Error updating ${attribute}:`, error);
    }
  };
    return (
        <div className=" global-info">
            <div className=" mt-3 d-flex justify-content-between info-part ">
            <h6 className="font-weight-bold" >Phone</h6>
            {isEditing.phone ? (
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          ) : (
                    <p>{phone}</p>)}
                            {isEditing.phone ? (
                                 <a className="save-icon" onClick={() => { handleUpdate('phone', phone); handleSaveClick('phone'); }}>Save</a>
                                 ) : (
                                   <a className="edit-icon" onClick={() => handleEditClick('phone')}>
                                     <MdEdit className="edit-icon" />
                                   </a>
                                 )}
            </div>
            <hr style={{ width: '94%', color:'#717171',marginLeft:'2%', marginTop:'1%' }} />
            <div className=" mt-3 d-flex justify-content-between info-part ">
            <h6 className="font-weight-bold" >Email</h6>
            {isEditing.email ? (
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          ) : (
                    <p>{email}</p>)}
                            {isEditing.email ? (
                                 <a className="save-icon" onClick={() => { handleUpdate('email', email); handleSaveClick('email'); }}>Save</a>
                                 ) : (
                                   <a className="edit-icon" onClick={() => handleEditClick('email')}>
                                     <MdEdit className="edit-icon" />
                                   </a>
                                 )}
            </div>

          
            <hr style={{ width: '94%', color:'#717171',marginLeft:'2%', marginTop:'1%' }} />
            
            <div className=" mt-3 d-flex justify-content-between info-part ">
            <h6 className="font-weight-bold" >About You</h6>
            {isEditing.aboutYou ? (
            <input type="text" value={aboutYou} onChange={(e) => setAboutYou(e.target.value)} />
          ) : (
                    <p>{aboutYou}</p>)}
                            {isEditing.aboutYou ? (
                                 <a className="save-icon" onClick={() => { handleUpdate('aboutYou', aboutYou); handleSaveClick('aboutYou'); }}>Save</a>
                                 ) : (
                                   <a className="edit-icon" onClick={() => handleEditClick('aboutYou')}>
                                     <MdEdit className="edit-icon" />
                                   </a>
                                 )}
            </div>
          
            
            <hr style={{ width: '94%', color:'#717171',marginLeft:'2%', marginTop:'1%' }} />
            
            <div className=" mt-3 d-flex justify-content-between info-part ">
            <h6 className="font-weight-bold" >Favourite</h6>
            {isEditing.favourite ? (
            <input type="text" value={favourite} onChange={(e) => setFavourite(e.target.value)} />
          ) : (
                    <p>{favourite}</p>)}
                            {isEditing.favourite ? (
                                 <a className="save-icon" onClick={() => { handleUpdate('favourite', favourite); handleSaveClick('favourite'); }}>Save</a>
                                 ) : (
                                   <a className="edit-icon" onClick={() => handleEditClick('favourite')}>
                                     <MdEdit className="edit-icon" />
                                   </a>
                                 )}
            </div>
        </div>


    );
}
export default Info_Card;
