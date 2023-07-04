import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeNote, updateNote } from '../Redux/Action';
import { useNavigate } from 'react-router-dom';

export default function AllNotes() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    setEditIndex(index);
    setTitle(notes[index].title);
    setContent(notes[index].content);
  };

  const handleSave = () => {
    dispatch(updateNote({
      id: editIndex,
      title: title,
      content: content
    }));
    setEditIndex(null);
    setTitle('');
    setContent('');
  };

  return (
    <div className='d-flex'>
      <center><button onClick={() => navigate('/')}>Home Page</button></center>
      {
        notes.map((note, index) => {
          return (
            <>
              <div className="card" style={{ margin: "2em", width: "18rem" }}>
                <div className="card-body">
                  {editIndex === index ? (
                    <>
                      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                      <button className="btn btn-primary" onClick={handleSave}>Save</button>
                    </>
                  ) : (
                    <>
                      <h5 className="card-title">{note.title}</h5>
                      <p className="card-text">{note.content}</p>
                      <button className="btn btn-secondary" onClick={() => handleEdit(index)}>Edit</button>
                      &nbsp;&nbsp;&nbsp;&nbsp;<button className="btn btn-danger" onClick={() => dispatch(removeNote(index))}>Delete</button>
                    </>
                  )}
                </div>
              </div>
            </>
          )
        })
      }
    </div>
  );
}
