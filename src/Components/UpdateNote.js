import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateNote } from '../Redux/Action';
import { useLocation } from 'react-router-dom';

export default function UpdateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
 
  const searchParams = new URLSearchParams(location.search);
  const titleFromParams = searchParams.get('title');
  const contentFromParams = searchParams.get('content');

  function handleUpdate(e) {
    e.preventDefault();
    dispatch(updateNote({
      id: 0, // replace with the ID of the note being updated
      title,
      content
    }));
    setTitle('');
    setContent('');
  }
 
  return (
    <div>
      <h3>Update Note</h3>
      <form onSubmit={handleUpdate}>
        Title <br/>
        <input type='text' name='title' value={titleFromParams} required onChange={(e) => setTitle(e.target.value)}/>
        <br/>
        Content
        <br/>
       
        <input type='text' name='content' value={contentFromParams} required onChange={(e) => setContent(e.target.value)}/>
    <br/>
    <button type='submit'>Update</button>
  </form>
</div>
);
}