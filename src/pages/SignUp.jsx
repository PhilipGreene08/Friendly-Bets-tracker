import React from 'react';
import { useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { db } from '../firebase.config';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import visibilityIcon from '../assets/assets/svg/visibilityIcon.svg';

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  //destructure to use below
  const { email, password, name } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    e.preventDefault();
    setFormData((previousState) => ({
      ...previousState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(auth, userCredential);
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      //get a copy of formData in useState
      const formDataCopy = { ...formData };
      delete formDataCopy.password; //delete password from being shown
      formDataCopy.timestamp = serverTimestamp(); //add a timestamp
      console.log(formDataCopy);
      console.log(user, db);
      await setDoc(doc(db, 'users', user.uid), formDataCopy);

      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Welcome Back!</p>
        </header>

        <main>
          <form onSubmit={onSubmit}>
            <input
              type='text'
              id='name'
              value={name}
              className='nameInput'
              placeholder='user name'
              onChange={onChange}
            />
            <input
              type='email'
              id='email'
              value={email}
              className='emailInput'
              placeholder='email'
              onChange={onChange}
            />
            <div className='showPasswordInputDiv'>
              <input
                //if showpassword is true it is plain text otherwise it is marked as a password
                type={showPassword ? 'text' : 'password'}
                id='password'
                value={password}
                className='passwordInput'
                placeholder='password'
                onChange={onChange}
              />
              <img
                src={visibilityIcon}
                alt='show password'
                //on click, fire function that sets password to the previous state
                //in this case false turns to true and vice versa
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            </div>
            <Link to='/forgot-password' className='forgotPasswordLink'>
              Forgot Password
            </Link>
            <div className='signUpBar'>
              <p className='signUpText'>Sign Up </p>
              <button className='signUpButton'> Click Me!</button>
            </div>
          </form>
          {/*Google OAuth */}
          <Link to='/sign-in' className='registerLink'>
            Sign In Instead
          </Link>
        </main>
      </div>
    </>
  );
}

export default SignUp;
