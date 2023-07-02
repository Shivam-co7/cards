import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import CardList from './CardList';
import SeparateDetails from './SeparateDetails';

const App = () => {
  return (
    <Router>
    <div className="App">
      
      <center><h1>Student Information</h1></center>
      <Routes>

      <Route exact path='/' Component={CardList} />
      <Route exact path="/student/:id" Component={SeparateDetails} />

      </Routes>
    </div>
    
    </Router>
  );
}

export default App;
