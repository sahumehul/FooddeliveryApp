import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css'; 
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [signUpcredentials, setsignUpCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const navigate= useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/login",
        {
          email: credentials.email,
          password: credentials.password
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      
      const json = response.data;

      if (json.success) {
        localStorage.setItem("authToken",json.authToken);
        localStorage.setItem("email",credentials.email);
        
        navigate("/")
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:5000/api/v1/createuser", {
            name: signUpcredentials.name,
            email: signUpcredentials.email,
            password: signUpcredentials.password,
            location: signUpcredentials.geolocation
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        const json = response.data;
        console.log(json);

        if (json.success) {
            navigate("/login");
            setIsSignUpActive(false);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while submitting the form");
    }
};

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const onChangeSignup = (event) => {
    setsignUpCredentials({ ...signUpcredentials, [event.target.name]: event.target.value });
  };

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  return (
    <div className='login-body'>
      <div className={`login-container ${isSignUpActive ? 'active' : ''}`} id="loginContainer">
      <div className="form-container sign-up-form">
        <form onSubmit={handleSignUp}>
          <h1>Create Account</h1>
          <div className="social-media-icons">
            <Link className="social-icon"><i className="fa-brands fa-google-plus-g"></i></Link>
            <Link className="social-icon"><i className="fa-brands fa-facebook-f"></i></Link>
            <Link className="social-icon"><i className="fa-brands fa-github"></i></Link>
            <Link className="social-icon"><i className="fa-brands fa-linkedin-in"></i></Link>
          </div>
          <span>or use your email for registration</span>
          <input type="text" name='name' placeholder="Name" onChange={onChangeSignup} />
          <input type="email" name='email' placeholder="Email" onChange={onChangeSignup} />
          <input type="password" name='password' placeholder="Password" onChange={onChangeSignup} />
          <input type="password" name='geolocation' placeholder="Address" onChange={onChangeSignup} />
          <button type="submit">Sign Up</button>
        <Link className="ghost-button-mobile" onClick={handleSignInClick}>Already have an account.please <b>Sign In</b></Link>
        </form>
      </div>
      <div className="form-container sign-in-form">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <div className="social-media-icons">
            <Link className="social-icon"><i className="fa-brands fa-google-plus-g"></i></Link>
            <Link className="social-icon"><i className="fa-brands fa-facebook-f"></i></Link>
            <Link className="social-icon"><i className="fa-brands fa-github"></i></Link>
            <Link className="social-icon"><i className="fa-brands fa-linkedin-in"></i></Link>
          </div>
          <span>or use your email password</span>
          <input name="email"
              onChange={onChange} type="email" placeholder="Email" />
          <input type="password" name="password"
              onChange={onChange} placeholder="Password" />
          <a href="#">Forgot Your Password?</a>
          <button type="submit">Sign In</button>
        <Link className="ghost-button-mobile" onClick={handleSignUpClick}>Don't have an account.please <b>Sign Up</b></Link>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel left-panel">
            <h1>Welcome Friend!</h1>
            <p>Enter your personal details to use all of our site features</p>
            <button className="ghost-button" onClick={handleSignInClick} id="signInButton">Sign In</button>
          </div>
          <div className="toggle-panel right-panel">
            <h1>Welcome, Back!</h1>
            <p>Enter your personal details to use all of our site features</p>
            <button className="ghost-button" onClick={handleSignUpClick} id="signUpButton">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
