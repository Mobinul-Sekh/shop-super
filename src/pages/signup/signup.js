import './signup.scss'

export default function Signup() {
  return (
    <div className='signup'>
      <img className='signup-img' src='images/signup.jpg' alt='image'></img>
      <form className='signup-overlay-form'>
        <div className='form-content'>
          <div className='top-heading'>Sign Up Here</div>
          <label for="label-full-name">Full Name: </label>
          <input type="text" id="label-full-name" name="full-name" />
          <label for="label-email">Email: </label>
          <input type="email" id="label-email" name="email" />
          <label for="label-password">Password: </label>
          <input type="password" id="label-password" name="password" />
          <label for="label-confirm-password">Confirm Password: </label>
          <input type="password" id="label-confirm-password" name="confirm-password" />
          <button className='signup-button' type='submit' formMethod='post'>Sign Up</button>
          <div className='login-option'>
            <p>Already have an account? <a href='#'>Login</a></p>
          </div>
        </div>
      </form>
    </div>
  )
}
