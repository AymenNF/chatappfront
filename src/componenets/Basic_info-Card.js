import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {MdEdit} from "react-icons/md";
import './Basic_info-Card.css'
function Basic_info_Card() {
    const [isEditing, setIsEditing] = useState({
        gender: false,
        birthDate: false,
        birthYear: false,
        hometown: false,
        maritalStatus: false,
        address: false

      });     
      const [gender, setGender] = useState('male');
      const [birthDate, setBirthDate] = useState('02-05');
      const [birthYear, setBirthYear] = useState('2002');
      const [hometown, setHometown] = useState('Rabat');
      const [maritalStatus, setMaritalStatus] = useState('');
      const [address, setAddress] = useState('inpt,rabat');
      const [userData, setUserData] = useState({});
    
      useEffect(() => {
      
        const fetchUserData = async () => {
          try {
              const userDataString = localStorage.getItem('connectedUser');
              const userData = JSON.parse(userDataString);
              
              // const responseId = await axios.post(`http://localhost:8080/e-social/searchid/${userData.email}`);
             
               const userId = userData.id;
               console.log(userId)

              // Send the userId to the backend
              const response = await axios.get(`http://localhost:8080/e-social/users/id/${userId}`);
              
              setUserData(response.data); 
              setGender(response.data.gender);
              setBirthDate(response.data.birthDate);
              setBirthYear(response.data.birthYear);
              setHometown(response.data.hometown);
              setMaritalStatus(response.data.maritalStatus);
              setAddress(response.data.address);
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
            case 'gender':
              setGender(value);
              break;
            case 'birthDate':
              setBirthDate(value);
              break;
            case 'birthYear':
              setBirthYear(value);
              break;
            case 'hometown':
              setHometown(value);
              break;
            case 'maritalStatus':
              setMaritalStatus(value);
              break;
              case 'address':
                setAddress(value);
                break;
            default:
              break;
          }
        } catch (error) {
          console.error(`Error updating ${attribute}:`, error);
        }
      };
    
    return (
        <div className="Basic-info p-3">
            <h5>Basic Info</h5>
            <div className="mt-4 d-flex justify-content-between info_part">
        <div className="info">
        <h6>Gender</h6>
          {isEditing.gender ? (
            <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
          ) : (
            <span>{gender}</span>
          )}
        </div>
        {isEditing.gender ? (
          <a className="save-icon" onClick={() => { handleUpdate('gender', gender); handleSaveClick('gender'); }}>Save</a>
        ) : (
          <a className="edit-icon" onClick={() => handleEditClick('gender')}>
            <MdEdit className="edit-icon" />
          </a>
        )}
      </div>
      <div className="mt-4 d-flex justify-content-between info_part">
        <div className="info">
        <h6>Birth Date</h6>

          {isEditing.birthDate ? (
            <input type="text" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
          ) : (
            <span>{birthDate}</span>
          )}

        </div>
        {isEditing.birthDate ? (
          <a className="save-icon" onClick={() => { handleUpdate('birthDate', birthDate); handleSaveClick('birthDate'); }}>Save</a>
        ) : (
          <a className="edit-icon" onClick={() => handleEditClick('birthDate')}>
            <MdEdit className="edit-icon" />
          </a>
        )}
      </div>
      <div className="mt-4 d-flex justify-content-between info_part">
        <div className="info">
        <h6>Birth Year</h6>

          {isEditing.birthYear ? (
            <input type="text" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} />
          ) : (
            <span>{birthYear}</span>
          )}

        </div>
        {isEditing.birthYear ? (
          <a className="save-icon" onClick={() => { handleUpdate('birthYear', birthYear); handleSaveClick('birthYear'); }}>Save</a>
        ) : (
          <a className="edit-icon" onClick={() => handleEditClick('birthYear')}>
            <MdEdit className="edit-icon" />
          </a>
        )}
      </div>
      <div className="mt-4 d-flex justify-content-between info_part">
        <div className="info">
        <h6>Hometown</h6>

          {isEditing.hometown ? (
            <input type="text" value={hometown} onChange={(e) => setHometown(e.target.value)} />
          ) : (
            <p>{hometown}</p>
          )}

          
        </div>
        {isEditing.hometown ? (
          <a className="save-icon" onClick={() => { handleUpdate('hometown', hometown); handleSaveClick('hometown'); }}>Save</a>
        ) : (
          <a className="edit-icon" onClick={() => handleEditClick('hometown')}>
            <MdEdit className="edit-icon" />
          </a>
        )}
      </div>
      <div className="mt-4 d-flex justify-content-between info_part">
        <div className="info">
        <h6>Marital Status</h6>

          {isEditing.maritalStatus ? (
            <input type="text" value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} />
          ) : (
            <p>{maritalStatus}</p>
          )}

        </div>
        {isEditing.maritalStatus ? (
          <a className="save-icon" onClick={() => { handleUpdate('maritalStatus', maritalStatus); handleSaveClick('maritalStatus'); }}>Save</a>
        ) : (
          <a className="edit-icon" onClick={() => handleEditClick('maritalStatus')}>
            <MdEdit className="edit-icon" />
          </a>
        )}
      </div>
      <div className="mt-4 d-flex justify-content-between info_part">
        <div className="info">
        <h6>Adress</h6>

          {isEditing.address ? (
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          ) : (
            <p>{address}</p>
          )}

        </div>
        {isEditing.address ? (
          <a className="save-icon" onClick={() => { handleUpdate('address', address); handleSaveClick('address'); }}>Save</a>
        ) : (
          <a className="edit-icon" onClick={() => handleEditClick('address')}>
            <MdEdit className="edit-icon" />
          </a>
        )}
      </div>
        </div>


    );
}
export default Basic_info_Card;
