import React, { useState } from 'react';
import { authService } from 'fb';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const Auth = () => {
  const [userEmail, setuserEmail] = useState('');
  const [userPw, setuserPw] = useState('');
  const [newAccount, setNewAccount] = useState(true);

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
  const onSubmit = async (e) => {
    e.preventDefault();

    let data;
    if (newAccount) {
      // create account
      try {
        data = await createUserWithEmailAndPassword(
          authService,
          userEmail,
          userPw
        );
        console.log('createUserWithEmailAndPassword 완료');
      } catch (err) {
        if (err.code === 'auth/weak-password') {
          alert('비밀번호가 너무 취약합니다.');
        }
        if (err.code === 'auth/email-already-in-use') {
          alert('이미 가입된 이메일입니다.');
        }
        console.error('errorCode : err', `(${err.code} : ${err})`);
      }
    } else {
      // login
      try {
        data = await signInWithEmailAndPassword(authService, userEmail, userPw);
        console.log('signInWithEmailAndPassword 완료');
      } catch (err) {
        if (err.code === 'auth/wrong-password') {
          alert('잘못된 비밀번호입니다.');
        } else {
          console.error('errorCode : err', `(${err.code} : ${err})`);
        }
      }
    }
  };

  return (
    <>
      <h2>Auth</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor='userEmail'>email</label>
        <input
          type='email'
          placeholder='email@email.com'
          name='userEmail'
          required
          value={userEmail}
          onChange={onChange}
        />
        <label htmlFor='userPw'>password</label>
        <input
          type='password'
          placeholder='password'
          name='userPw'
          required
          value={userPw}
          onChange={onChange}
        />
        <input type='submit' value={newAccount ? 'Create Account' : 'Login'} />
      </form>
      <section>
        <button>Continue with Google</button>
        <button>Continue with GitHub</button>
      </section>
    </>
  );
};
export default Auth;
