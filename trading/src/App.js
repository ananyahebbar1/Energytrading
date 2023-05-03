import React from 'react'; 
import './App.css';
//import Navbar from './components/Navbar';
//import Home from './Pages/Home';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     {/*
      <Router>
      {/*<Navbar/>*
      <Routes>
        <Route path='/' exact element={<Home/>}/>
      </Routes>

    </Router>
     */} 
    <Sidebar/>
    </div>
  );
}

export default App;
