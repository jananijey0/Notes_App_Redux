import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../Redux/Action';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function NotesForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  function handleSubmission(e) {
    e.preventDefault();
    dispatch(addNote({ title, content }));
    setTitle('');
    setContent('');
    navigate('/allNotes');
  }
 
  return (
    <div class='all'>
      <div class="formcontainer">
      <center><h3>React Notes App</h3></center>
        <form onSubmit={handleSubmission}>
          Title <br/>
          <input type='text' name='title' value={title} placeholder='Enter Title' required onChange={(e) => setTitle(e.target.value)}/>
          <br/>
          Content
          <br/>
          <input type='text' name='content' value={content} placeholder='Enter Content' required onChange={(e) => setContent(e.target.value)}/>
          <br/>
          <center> <button type='submit'>Submit</button></center>
        </form>
        {/* <Link to={`/updateNote?title=${title}&content=${content}`}><button>Update Note</button></Link> */}
      </div>
    </div>
  );
}
