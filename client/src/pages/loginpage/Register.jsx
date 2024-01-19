import React, { useState } from 'react'
import styles from './LoginPage.module.css'
import Card from '../../component/card/Card'
import { Link } from 'react-router-dom'
import registerImg from "../../assets/register.gif";


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


async function register(e) {
  e.preventDefault();
  const response = await fetch('http://localhost:4000/register', {
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers: {'Content-Type': 'application/json'},
  });
  if(response.status === 200) {
    alert("registration successful");
  }
  else {
    alert("registration failed");
  }
}

  return (
    <section className={`container ${styles.auth}`}>
    <Card>
      <div className={styles.form}>
        <h2>Register</h2>
        <form onSubmit={register}>
          <input
            type="email"
            placeholder="Email"
            required
            name='email'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="btn" type="submit">
            Register
          </button>
        </form>
        <span className={styles.register}>
          <p>Already have an account? </p>
          <Link to="/login">Login</Link>
        </span>
      </div>
    </Card>
    <div className={styles.img}>
      <img src={registerImg} alt="Register" width="300" />
    </div>
  </section>
  )
}

export default Register