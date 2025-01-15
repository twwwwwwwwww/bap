import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoginok }) => {
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    setLoginok(true)
    console.log("login")
    navigate("/")
  }
  return (
    <div>
      <form onSubmit={(event) => login(event)}>
        <div className='idpw'>
          <div className='id'>
            <label>아이디 : 이메일</label>
            <input type='text' />
          </div>
          <div className='pw'>
            <label>비밀번호 : 비밀번호</label>
            <input type='password' />
          </div>
          <div className='check'>
            <input type='checkbox' />
            <label>체크</label>
          </div>
          <button type='submit'>로그인</button>
        </div>
      </form>
    </div>
  )
}

export default Login
