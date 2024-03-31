import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import "./popup.css"
import './Profile_Card1.css';
import { FcEditImage } from 'react-icons/fc';
import { FaRegEdit,FaRegSave } from 'react-icons/fa';
import { MdEditSquare } from "react-icons/md";
import srcBackground from "../images/background.jpg"
import profile1 from "../images/profile1.png"
import profile2 from "../images/profile2.png"
import profile3 from "../images/profile3.png"
import profile4 from "../images/profile4.png"



function Profile_Card1() {
    const [profileImage, setProfileImage] = useState(null);
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [profileImagePreview, setProfileImagePreview] = useState(`${process.env.PUBLIC_URL}/image/Jim_Spiegel.jpg`);
    const [BackgroundImagePreview, setBackgroundImagePreview] = useState(null);
    const [username, setUsername] = useState('');
    // const [address, setAddress] = useState('Rabat, Morocco');
    const [userDetails, setUserDetails] = useState(null); // Nouveau state pour stocker les détails de l'utilisateur
    
    const userDataString = localStorage.getItem('connectedUser');
    const userDataStorage = JSON.parse(userDataString);             
     const userId = userDataStorage.id;
     
    const [profilePath,setProfilePath] = useState('');

    

    const [isEditing, setIsEditing] = useState({
        username: false,
       

      }); 
      const handleEditClick = (field) => {
        setIsEditing((prevIsEditing) => ({ ...prevIsEditing, [field]: true }));
      };
    
      const handleSaveClick = (field) => {
        setIsEditing((prevIsEditing) => ({ ...prevIsEditing, [field]: false }));
      };

      const [userData, setUserData] = useState({});



      const fetchImagePath = async () => {
        try {
            const userDataString = localStorage.getItem('connectedUser');
              const userData = JSON.parse(userDataString);             
               const userIdToBackPic = userData.id;
               const userNameLS = userData.username;
               setUsername(userNameLS);
            const response = await axios.get(`http://localhost:8888/USER-SERVICE/e-social/user/imagePath/${userId}`, userIdToBackPic); // Assuming your backend is served at the same domain
            console.log(response.data);
            setProfilePath(response.data);
        } catch (error) {
            console.error('Error fetching image path:', error);
        }
    };

    useEffect(() => {
        fetchImagePath();
      }, []);
      useEffect(() => {
        setProfileImagePreview(userDetails?.profileImage);
        setBackgroundImagePreview(srcBackground);
    }, [userDetails]);



    const handleProfileImageChange = (e) => {
        setProfileImage(e.target.files[0]);


       
        const reader = new FileReader();
        reader.onload = function (event) {
            setProfileImagePreview(event.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    
    };

    const handleBackgroundImageChange = (e) => {
        setBackgroundImage(e.target.files[0]);

        const reader = new FileReader();
        reader.onload = function(event) {
            setBackgroundImagePreview(event.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);

    };

    const handleImageProfileUpload = (profile) => {
      const userDataString = localStorage.getItem('connectedUser');
      const userData = JSON.parse(userDataString);             
       const userId = userData.id;
        console.log('profileImage:', profile);
    
       setProfilePath(profile);
       const dataToback = {
        profile : profile,
        userId : userId
       }
    
        axios.post(`http://localhost:8888/USER-SERVICE/e-social/updateimage`, dataToback)
            .then((response) => {
                console.log('Images uploaded successfully:', response.data);
    
            })
            .catch((error) => {
                console.error('Error uploading images:', error);
            });
    };

    const handleUpdate = async (attribute, value) => {
        try {
          const userDataString = localStorage.getItem('connectedUser');
          const userData = JSON.parse(userDataString);             
           const userId = userData.id;
          const response = await axios.put(`http://localhost:8888/USER-SERVICE/e-social/users/${userId}`, {
            [attribute]: value,
          });
        } catch (error) {
            console.error(`Error updating ${attribute}:`, error);
          }
        };
        

    
        const [showPopup, setShowPopup] = useState(false); // State to control the visibility of the pop-up
    

    return (
      <div className="first_card">
      <div className="profile_back">
          <img src={BackgroundImagePreview} alt="background profile" />
      </div>
      <div className="profile_down">
        <div >
            <img src={profilePath} alt="profile" className='ProfilePicprfl' />
          <label htmlFor="profileImageInput" className="edit-profile" onClick={() => setShowPopup(true)}>
              <FaRegEdit className='EditPrfPic' />
          </label>
        </div>
          

          {/* Pop-up div */}
          {showPopup && (
              <div className="popup">
                      <div>
                          <div class="card">
                              <div className="picImagesProfile">
                                  <div className="imgProfileIndiv" style={{display:"flex",alignItems:"center",justifyContent:"center",paddingRight:"2.5rem"}}>
                                      <img src={profile1} alt="" onClick={() => handleImageProfileUpload(profile1)} />
                                  </div>
                                  <div className="imgProfileIndiv" style={{display:"flex",alignItems:"center",justifyContent:"center",paddingRight:"2.5rem"}}>
                                      <img src={profile2} alt=""  onClick={() => handleImageProfileUpload(profile2)} />
                                  </div>
                                  <div className="imgProfileIndiv" style={{display:"flex",alignItems:"center",justifyContent:"center",paddingRight:"2.5rem"}}>
                                      <img src={profile3} alt=""  onClick={() => handleImageProfileUpload(profile3)} />
                                  </div>
                                  <div className="imgProfileIndiv" style={{display:"flex",alignItems:"center",justifyContent:"center",paddingRight:"2.5rem"}}>
                                      <img src={profile4} alt=""  onClick={() => handleImageProfileUpload(profile4)} />
                                  </div>
                                  <div className="imgProfileIndiv" style={{display:"flex",alignItems:"center",justifyContent:"center",paddingRight:"2.5rem"}}>
                                      <img src={profile1} alt=""  onClick={() => handleImageProfileUpload(profile1)} />
                                  </div>
                                  <div className="imgProfileIndiv" style={{display:"flex",alignItems:"center",justifyContent:"center",paddingRight:"2.5rem"}}>
                                      <img src={profile2} alt=""  onClick={() => handleImageProfileUpload(profile2)} />
                                  </div>
                                        </div>
                                        <div>
                                            <button onClick={() => setShowPopup(false)} className='btnClosePicProfile'>close</button>
                                        </div>
                              </div>
                    </div>

              </div>
          )}

          <div className="d-flex justify-content-around Titles">

              <div className="Name d-flex justify-content-between ">
                  <div className="mt-2 d-flex justify-content-between info_part">
                      <div className="info2">
                          {isEditing.username ? (
                              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                          ) : (
                              <span className='usernameSpan'>{username}</span>
                          )}
                      </div>
                      {isEditing.username ? (
                          <a className="save-icon mt-2 " onClick={() => { handleUpdate('username', username); handleSaveClick('username'); }}><FaRegSave className="save-username" />
                          </a>
                      ) : (
                          <a className="edit-icon" onClick={() => handleEditClick('username')}>
                              <MdEditSquare className="edit-icon icon-edit-username" />
                          </a>
                      )}
                  </div>
              </div>

          </div>
      </div>
  </div>
);
}

export default Profile_Card1;
