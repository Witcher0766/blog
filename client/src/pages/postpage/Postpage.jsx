import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Postpage = () => {
  const {id} = useParams();
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
  return (
    <div>Postpage</div>
  )
}

export default Postpage