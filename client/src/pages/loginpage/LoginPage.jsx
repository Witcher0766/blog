import React from 'react'
import styles from './LoginPage.module.css'
import { Link } from 'react-router-dom'
import Card from '../../component/card/Card'
import loginImg from "../../assets/login.gif";

const LoginPage = () => {
  return (
    <section className={styles.auth}>
    <div className={styles.img}>
      <img src={loginImg} alt="Login" width="300" />
    </div>
    <Card>
      <div className={styles.form}>
        <h2>Login</h2>
        <form>
       
          <input
            type="email"
            placeholder="Email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            required
          />
          <button className="btn" type="submit">
            Login
          </button>
          <div className={styles.links}>
            <Link to="/reset">Reset Password</Link>
          </div>
          <p>-- or --</p>
        </form>
        <span className={styles.register}>
          <p>Don't have an account? </p>
          <Link to="/register">Register</Link>
        </span>
      </div>
    </Card>
  </section>
  )
}

export default LoginPage