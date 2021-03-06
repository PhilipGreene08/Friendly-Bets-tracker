import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import visibilityIcon from '../assets/assets/svg/visibilityIcon.svg';

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    // displayName: '',
    email: '',
    password: '',
  });
  //destructure to use below
  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    e.preventDefault();
    setFormData((previousState) => ({
      ...previousState,

      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Welcome Back!</p>
        </header>

        <main>
          <form>
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
            <div className='signInBar'>
              <p className='signInText'>Sign In </p>
            </div>
          </form>
          {/*Google OAuth */}
          <Link to='/sign-up' className='registerLink'>
            Sign Up Instead
          </Link>
        </main>
      </div>
    </>
  );
}

export default SignIn;
