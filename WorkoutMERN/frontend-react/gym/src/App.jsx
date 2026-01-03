
import './App.css'
import { useState } from 'react'
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CreatePage from './pages/CreatePage';
import RetrievePage from './pages/RetrievePage';
import UpdatePage from './pages/UpdatePage';



function App() {

    const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <h1> Exercise Tracker</h1>
        <Router>
          <Navigation />
          <Routes>
            
            <Route path='/' element={<RetrievePage setExerciseToEdit={setExerciseToEdit}  />}/>
            <Route path='/create' element={<CreatePage/>}/>
            <Route path='/update' element={<UpdatePage exerciseToEdit={exerciseToEdit}  />}/>
          </Routes>
        </Router>
        <footer>
      <p>&copy; 2025 Michael Green. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default App
