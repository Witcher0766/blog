import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import styles from './Create.module.css';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');

    async function createPost(e) {
        try {
            if (!title || !summary || !content || !files || files.length === 0) {
                console.error('Invalid post data');
                return;
            }
            const data = new FormData();
            data.set('title', title);
            data.set('summary', summary);
            data.set('content', content);
            if (files.length > 0) {
                data.set('file', files[0]);
            }
            e.preventDefault();
            const response = await fetch('http://localhost:4000/post', {
                method: 'POST',
                body: data,
                credentials: 'include',
            });
            if (response.ok) {
                navigate('/');
            } else {
                console.error('Failed to create post:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error during fetch:', error.message);
        }
    }

  return (
    <>
    <div className={styles["post"]}>
        <form onSubmit={createPost}>
            <input 
            type="title" 
             placeholder={'Title'}   
             value={title}
             onChange={e => setTitle(e.target.value)}
            />
            <input 
            type="summary"
            placeholder={'Summary'}
            value={summary}
            onChange={e => setSummary(e.target.value)}
             />
            <input 
            type="file" 
            // value={files}
             onChange={e => setFiles(e.target.files)}   
            />
            <ReactQuill 
            value={content} 
            className={styles["tupe"]} 
            theme="snow"
            onChange={setContent} 
            />
            <button className='btn'>Create post</button>
        </form>
        </div>
    </>
  )
}

export default Create