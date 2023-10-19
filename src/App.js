/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';

function App(){
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/login' component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path='/dashboard' component={Dashboard}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
