import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './Postpage.module.css';
import {formatISO9075} from "date-fns";
import { UserContext } from '../../context/UserContext';

const Postpage = () => {
  const {id} = useParams();
  const {userInfo} = useContext(UserContext);
  const [postInfo, setPostInfo] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`)
    .then(response => {
      response.json().then(postInfo => {
        setPostInfo(postInfo);
      });
    })
  }, []);

  console.log(postInfo);

  // const [_id, author, content, cover, createdAt, summary, title, updateAt] = postInfo;

  if(!postInfo) return '';
  return (
    <div className={styles["main-container"]}>
    <h1>{postInfo.title}</h1>
    <div className={styles["main-title"]}>
    <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
    <p className={styles["author"]}>{`by @${postInfo.author.username}`}</p>
    </div>
    {userInfo.id === postInfo.author._id && (
      <div className={styles["edit-post"]}> 
      <Link to={`/edit/${postInfo._id}`} className={styles["edit-btn"]} >Edit</Link>
      </div>
    )}
    <img className={styles["post-img"]} src={`http://localhost:4000/${postInfo.cover}`} alt="" />
    <div className={styles["main-content"]} dangerouslySetInnerHTML={{__html:postInfo.content}} />
    </div>
  )
}

export default Postpage