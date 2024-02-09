import React from 'react'
import styles from './Post.module.css'
import { Link } from 'react-router-dom'
import {format} from "date-fns";

const Post = ({_id, title, summary, cover, content, author, createdAt}) => {
  return (
    <>
    <div className={styles["blog-data"]}>
      <div className={styles["blog-image"]}>
      <img src={'http://localhost:4000/'+cover} alt=""/>
      </div>
      <div className={styles["blog-content"]}>
      <Link to={`/post/${_id}`}>
      <h2>{title}</h2>
      </Link>
      <p className={styles["blog-date"]}>
      <Link to="" className={styles["author"]}>{author.username}</Link>
      <time>{format(new Date (createdAt), 'MMM d, yyyy HH:mm')}</time>
      </p>
      <p>{summary}</p>
      </div>
      </div>
    </>
  )
}

export default Post