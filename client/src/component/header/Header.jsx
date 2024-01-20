import React, { useContext, useEffect } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

const Header = () => {
  const {setUserInfo, userInfo} = useContext(UserContext);

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
    setUserInfo(null);
  }
  const username = userInfo?.username;

  return (
    <>
        <header>
        <Link to="" className={styles["logo"]} >MyBlog</Link>
        <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <Link onClick={logout}>Logout</Link>
          </>
        )}
        {!username && (
          <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          </>
        )}
        </nav>
      </header>
    </>
  )
}

export default Header