import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Link, Outlet } from 'react-router-dom'

// 原组件
function App() {
  return (
    <div className="App">

      <Link to='/'> app</Link> 
	    <Link to='/mouse'> mouse </Link> 
	    <Link to='/components'> components </Link> 

      <Outlet/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;