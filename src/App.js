


import './App.css';
import NotesForm from './Components/NotesForm';
import AllNotes from './Components/AllNotes';
import { Route, Routes } from 'react-router-dom';

import UpdateNote from './Components/UpdateNote';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NotesForm/>}/>
        <Route path='/AllNotes' element={<AllNotes/>}/>
        <Route path="/UpdateNote" element={<UpdateNote />} />
        
      </Routes>
    </div>
  ); 
}

export default App;
