import React from 'react'
import styles from './Post.module.css'
import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <>
    <div className={styles["blog-data"]}>
      <div className={styles["blog-image"]}>
      <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="dummy-image" />
      </div>
      <div className={styles["blog-content"]}>
      <h2>This is heading</h2>
      <p className={styles["blog-date"]}>
      <Link to="" className={styles["author"]}>Witcher</Link>
      <time>2024-01-11 16:45</time>
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea similique quasi
       adipisci odit inventore! Voluptatum alias illum expedita? Nisi, 
      fugit aperiam pariatur cum enim similique! Minus fugit labore nisi tempore.</p>
      </div>
      </div>
    </>
  )
}

export default Post