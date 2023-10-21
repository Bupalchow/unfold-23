import React, { useState } from 'react';
import {saveUserInfo} from "./scripts";

const Login = () => {
  const [Eventname, setname] = useState('');
  const [github, setGithub] = useState('');
  const [linkedIn, setlinkedIn] = useState('');

  const handleLogin = () => {
    console.log('Name', Eventname);
    console.log('GitHub:', github);
    console.log('linkedIn',linkedIn)
  };
  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
  };

  const containerStyle = {
    maxWidth: '300px',
    margin: '0 auto',
    textAlign: 'center',
  };


  return (
    <div>
      <h2>Login</h2>
      <label style={labelStyle}>
        Name Of The Event:
        <input type="text" style={inputStyle} value={Eventname} onChange={(e) => setname(e.target.value)} />
      </label >
      <br />
      <label>
        Place:
        <input type="text" style={inputStyle} value={github} onChange={(e) => setGithub(e.target.value)} />
      </label>
      <br />
      <label>
            Event Poster:
            <input type="file" style={inputStyle} onChange={(e) => setlinkedIn(e.target.files[0])} />
        </label>
      <br/>
      <button style={buttonStyle} onClick={() => saveUserInfo(Eventname, github, linkedIn)}>Login</button>
    </div>
  );
};

export default Login;
