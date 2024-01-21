import React, { useContext, useEffect, useState } from 'react'
import styles from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

const Header = () => {
  const {setUserInfo, userInfo} = useContext(UserContext);
  let navigate = useNavigate();


  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then((response) => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      })
    })
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    })
    .then(response => {
      if (response.ok) {
        setUserInfo(null);
        navigate('/login');
      } else {
        console.error('Logout failed:', response.status, response.statusText);
      }
    })
    .catch(error => {
      console.error('Fetch error during logout:', error);
    });
  }

    let username = userInfo?.username;
    // let box = username;
    // let [name, domain] = (box || '').split('@');
    // const capitalizedName = name ? name.charAt(0).toUpperCase() + name.slice(1) : '';
    let firstLetter = username ? username.charAt(0).toUpperCase() : '';


  return (
    <>
        <header>
        <Link to="/" className={styles["logo"]} >MyBlog</Link>
        <nav>
        {username && (
          <>
            <Link className={styles["link-btn"]} to="/create">Create</Link>
            <button className='btn-1' onClick={logout}>Logout</button>
            <p to="/create">{firstLetter}</p>
          </>
        )}
        {!username && (
          <>
          <Link className={styles["log-btn"]} to="/login">Login</Link>
          <Link className={styles["log-btn1"]} to="/register">Register</Link>
          </>
        )}
        </nav>
      </header>
    </>
  )
}

export default Header;