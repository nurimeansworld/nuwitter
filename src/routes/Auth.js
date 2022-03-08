import React, { useState } from 'react';

const Auth = () => {
  const [userEmail, setuserEmail] = useState('');
  const [userPw, setuserPw] = useState('');

  const onChange = (e) => {
    // e로부터 name, value를 받아오기
    const {
      target: { name, value },
    } = e;

    if (name === 'userEmail') {
      setuserEmail(value);
      // console.log('userEmail', value);
    } else if (name === 'userPw') {
      setuserPw(value);
      // console.log('userPw', value);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit');
  };

  return (
    <>
      <h2>Auth</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor='userEmail'>email</label>
        <input
          type='text'
          placeholder='email@email.com'
          name='userEmail'
          required
          onChange={onChange}
        />
        <label htmlFor='userPw'>password</label>
        <input
          type='password'
          placeholder='password'
          name='userPw'
          required
          onChange={onChange}
        />
        <input type='submit' value='login' />
      </form>
      <section>
        <button>Continue with Google</button>
        <button>Continue with GitHub</button>
      </section>
    </>
  );
};
export default Auth;
