import React, { useState } from 'react';
import axios from 'axios';

function Signin() {
  const [nom, setNom] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:8080/e-social/save', {
        username,
        email,
        password,
      });

      console.log('Response from backend:', response.data);
      // Handle the response as needed (redirect, show a message, etc.)
    } catch (error) {
      console.error('Error during signup:', error.message);
    }
  };

  return (
    <div>
      <div className='Logincontainer'>
        <div className="leftSide">
          <h1>E-Social</h1> <br />
          <p>Connectez-vous, partagez, inspirez: la plateforme sociale qui vous unifie.</p>
          <div className="imageContainer">
            <img src="/images/login.png" alt="" />
          </div>
        </div>

        <div className="containerRightSide">
          <div className="rightSide">
            <h1>Sign in</h1> <br />
            <form onSubmit={handleSignUp}>
              <div className="coolinput">
                <div className="nomPrenom">
                  
                  <label htmlFor="username" className="text">Username:</label>
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    className="input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <label htmlFor="email" className="text">Email:</label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password" className="text">Password:</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input
                  type="button"
                  value="Créer compte"
                  className="btnConnect"
                  onClick={handleSignUp}
                />
              </div>
            </form>
            <div style={{ width: '80%', marginLeft: '1rem', padding: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className='line'></div>
              <p className='lineOr'>Or</p>
              <div className='line'></div>
            </div>
            <button>Créer compte avec Google</button>
            <br /><br />
            <p>Vous avez déjà un compte ? <a href="/login">Login</a> </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
