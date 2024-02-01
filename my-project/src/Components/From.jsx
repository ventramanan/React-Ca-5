//This import part of the forms
import React from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { email as emailPattern, firstname, lastname, password } from './atom';
import image from "./../assets/unnamed.png";
import { Link, useNavigate } from 'react-router-dom';

function From() {
  //this is where I managed all my states using recoil
  const [errorMessages, setErrorMessages] = useState('');
  const [username, setUsername] = useRecoilState(firstname);
  const [lastName, setLast] = useRecoilState(lastname);
  const [emails, setEmail] = useRecoilState(emailPattern);
  const [pass, setPass] = useRecoilState(password);
  const navigate = useNavigate();

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState(' ');
// this function is for manging the validation part of the form
  const validation = () => {
    const firstPattern = /[a-zA-Z0-9!@#$%&*]{4,}$/;
    const emailRegex = /[a-zA-Z0-9!@#$%]+@[a-zA-Z0-9]{5,}$/;
    const passwordPattern = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%&*]).{10,}$/;

    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setRepeatPasswordError('');

    if (!firstPattern.test(username)) {
      setUsernameError('Should be greater than 30 and less than 10');
      return;
    }

    if (!emailRegex.test(emails)) {
      setEmailError('The email must be a valid email.');
      return;
    }

    if (!passwordPattern.test(pass)) {
      setPasswordError('It should have 10 words and a special character');
      return;
    }

    if (pass !== lastName) {
      setRepeatPasswordError("It doesn't match.");
      return;
    }
    navigate('/main');
  };

  const handler = (e) => {
    setUsername(e.target.value);
    setUsernameError('');
  };

  const handlers = (e) => {
    setLast(e.target.value);
    setRepeatPasswordError('');
  };

  const handlerrr = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const hand = (e) => {
    setPass(e.target.value);
    setPasswordError('');
  };

  return (
    <div>
      {/* This part deals with navigation bar */}
      <div className="bg-gray-800 h-14 flex items-center justify-between shadow-2xl shadow-slate-700 drop-shadow-lg">
        <img className="rounded-md w-10 h-10 ml-5" src={image} alt="" />
        <h1 className="text-xl sm:text-2xl text-white mx-4">Books bring magic</h1>
        <div className="flex mr-5">
          <Link to="/main">
            <button className="ml-2 text-white px-4 py-2 transition-transform transform focus:outline-none hover:scale-110 border-2 border-amber-100">
              Home
            </button>
          </Link>
        </div>
      </div>
      {/* this is the part where I created my forms */}
      <div className="container mx-auto max-w-md mt-10">
        <form className="form bg-black rounded-xl p-8">
          <div className="input-group mb-4">
            <label className="block text-white mb-2" htmlFor="first-name">First Name:</label>
            <input
              id="first-name"
              className="input-field rounded-md p-2 border border-gray-300 w-full"
              type="text"
              name="first-name"
              value={username}
              onChange={handler}
            />
            {usernameError && <div className="error-message text-red-600">{usernameError}</div>}
          </div>

          <div className="input-group mb-4">
            <label className="block text-white mb-2" htmlFor="email">Email:</label>
            <input
              id="email"
              className="input-field rounded-md p-2 border border-gray-300 w-full"
              type="email"
              name="email"
              value={emails}
              onChange={handlerrr}
            />
            {emailError && <div className="error-message text-red-600">{emailError}</div>}
          </div>

          <div className="input-group mb-4">
            <label className="block text-white mb-2" htmlFor="password">Password:</label>
            <input
              id="password"
              className="input-field rounded-md p-2 border border-gray-300 w-full"
              type="password"
              value={pass}
              onChange={hand}
            />
            {passwordError && <div className="error-message text-red-600">{passwordError}</div>}
          </div>

          <div className="input-group mb-4">
            <label className="block text-white mb-2" htmlFor="repeatpassword">Repeat Password:</label>
            <input
              id="repeatpassword"
              className="input-field rounded-md p-2 border border-gray-300 w-full"
              type="password"
              name="repeatpassword"
              value={lastName}
              onChange={handlers}
            />
            {repeatPasswordError && <div className="error-message text-red-600">{repeatPasswordError}</div>}
          </div>
          <button
            className="submit-button bg-blue-500 text-white py-2 rounded hover:bg-blue-700 p-10 ml-28"
            type="button"
            onClick={validation}
          >
            Sign Up
          </button>

          {errorMessages && <div className="error-message">{errorMessages}</div>}
        </form>
      </div>
    </div>
  );
}

export default From;



