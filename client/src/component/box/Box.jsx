import React from 'react'
import styles from './Box.module.css';
import { Link } from 'react-router-dom';


const Box = () => {


  return (
    <div className='flex flex-col text-center p-5  mb-8 justify-center md:p-10 md:text-left'>
<div className='flex flex-col justify-center gap-6'>
<h1 className='text-6xl font-semibold md:text-6xl lg:text-7xl'>Blog with <span className='text-sky-400'>the best.</span> </h1>
    <p className='md:text-lg lg:text-lg'>More bloggers and independent creators choose WordPress than any other blogging tool. Tap into intuitive, flexible tools that put writers, bloggers, and creators first.</p>
    <div><Link to="/create"  className={styles["btn-box"]}>Start a Blog</Link></div>
</div>
    </div>
  )
}

export default Box