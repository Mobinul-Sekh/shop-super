import { Link } from 'react-router-dom'
import './signup.scss'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
      alert("Details can't be empty");
      return false;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
    return true;
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      await fetch(`http://localhost:5000/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword
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
    } catch(err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='signup'>
      <img className='signup-img' src='images/signup.jpg' alt='auth-bg'></img>
      <form className='signup-overlay-form' onSubmit={handleSignUp}>
        <div className='form-content'>
          <div className='top-heading'>Sign Up Here</div>
          <label for="label-full-name">Full Name: </label>
          <input type="text" id="label-full-name" name="full-name" value={name} onChange={(e) => setName(e.target.value)}/>
          <label for="label-email">Email: </label>
          <input type="email" id="label-email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label for="label-password">Password: </label>
          <input type="password" id="label-password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <label for="label-confirm-password">Confirm Password: </label>
          <input type="password" id="label-confirm-password" name="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          <button className='signup-button' type='submit' disabled={loading}>{loading ? 'Signing Up' : 'Sign Up'}</button>
          <div className='login-option'>
            <p>Already have an account? <Link to='/'>Login</Link></p>
          </div>
        </div>
      </form>
    </div>
  )
}
