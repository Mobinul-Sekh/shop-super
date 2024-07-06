import Icon from '@mdi/react'
import { mdiGoogle, mdiGithub, mdiFacebook } from '@mdi/js'
import Button from '../../components/button/button'
import './login.scss'

export default function Login() {
  return (
    <div className='login'>
      <img className='login-img' src='images/signup.jpg' alt='image'></img>
      <form className='overlay-form'>
        <div className='form-content'>
          <div className='top-heading'>Welcome Back !</div>
          <div className='container-email'>
            <label className='label-email'>
              Email:
              <br></br>
              <input className='input-email' type='email'/>
            </label>
          </div>
          <br></br>
          <div className='container-password'>
            <label className='label-password'>
              Password:
              <br></br>
              <input className='input-password' type='password'/>
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
            <p>Don't have an account yet? <a href='#'>Signup Now</a></p>
          </div>
        </div>
      </form>
    </div>
  )
}
