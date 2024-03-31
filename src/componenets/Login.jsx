import React, { useState } from 'react';

import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {

    try {
      const response = await axios.post('http://localhost:8080/e-social/login', {
        email,
        password,
      });
      
      console.log('Response from backend:', response.data);

      // Check if the login was successful
      if (response.data != "") {
        console.log('Login successful!');
        localStorage.setItem("connectedUser",JSON.stringify(response.data));
        window.location.href = '/Page2';

      } else {
        // Handle unsuccessful login, show an error message
        console.error('Login failed:', response.data);
      }
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
      }
    }
    
  };

  return (
    <div>
      <div className='Logincontainer'>
        <div className="leftSide">
          <h1>E-Social</h1> <br />
          <p>Connectez-vous, partagez, inspirez : 
            la plateforme sociale qui vous unifie.</p>
          <div className="imageContainer">
            <img src="/images/login.png" alt="" />
          </div>
        </div>

        <div className="containerRightSide">
          <div className="rightSide">
            <h1>Log in</h1> <br />
            <form>
              <div className="coolinput">
                <label htmlFor="input" className="text">Email:</label>
                <input
                  type="text"
                  placeholder="Email."
                  name="input"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="input" className="text">Password:</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="input"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input
                  type="button"
                  value="Se connecter"
                  className="btnConnect"
                  onClick={handleLogin}
                />
              </div>
            </form>
            <div style={{ width: '80%', marginLeft: '1rem', padding: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className='line'></div>
              <p className='lineOr'>Or</p>
              <div className='line'></div>
            </div>
            <button>Se connecter avec Google</button>
            <br /><br />
            <p>Vous n'avez pas de compte ? <a href="/signin">Sign up</a> </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
