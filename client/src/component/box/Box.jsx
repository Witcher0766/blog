import React from 'react'
import styles from './Box.module.css';
import { Link } from 'react-router-dom';


const Box = () => {


  return (
    <div className=' h-60 flex flex-col text-left  mb-8 justify-center px-10'>
<div className='flex flex-col justify-center gap-6  w-2/3'>
<h1 className='text-5xl font-semibold '>Blog with <span className='text-sky-400'>the best.</span> </h1>
    <p>More bloggers and independent creators choose WordPress than any other blogging tool. Tap into intuitive, flexible tools that put writers, bloggers, and creators first.</p>
    <Link to="/create"  className={styles["btn-box"]}>Start a Blog</Link>
</div>
    </div>
  )
}

export default Box