import Icon from '@mdi/react'
import { mdiGoogle, mdiGithub, mdiFacebook } from '@mdi/js'
import Button from '../../components/button/button'
import './login.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Details can't be empty");
      return;
    }
    await fetch(`http://localhost:5000/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(res => res.json())
    .then(res => {
      if (!res.success) {
        alert(res.message)
        return
      }
      Cookies.set("token", res.token);
      navigate('/');
    })
    .catch(error => console.error("Error:", error));
  }

  return (
    <div className='login'>
      <img className='login-img' src='images/signup.jpg' alt='auth-bg'></img>
      <form className='overlay-form' onSubmit={handleLogin}>
        <div className='form-content'>
          <div className='top-heading'>Welcome Back !</div>
          <div className='container-email'>
            <label className='label-email'>
              Email:
              <br></br>
              <input className='input-email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
          </div>
          <br></br>
          <div className='container-password'>
            <label className='label-password'>
              Password:
              <br></br>
              <input className='input-password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
          </div>
          <br></br>
          <button className='login-button' type='submit' formMethod='post'>Log In</button>
          <div className='other-login-text'>
            <p>Or continue with</p>
          </div>
          <div className='other-login-buttons'>
            <Button size='medium' icon=<Icon path={mdiGoogle} size={1} color='black' /> />
            <Button size='medium' icon=<Icon path={mdiGithub} size={1} color='black' /> />
            <Button size='medium' icon=<Icon path={mdiFacebook} size={1} color='black' /> />
          </div>
          <div className='signup-option'>
            <p>Don't have an account yet? <Link to='/signup'>Signup Now</Link></p>
          </div>
        </div>
      </form>
    </div>
  )
}
