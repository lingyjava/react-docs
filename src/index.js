import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Components from './Components';
import ComponentsPlus from './ComponentsPlus';
import Parent from './Parent'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const obj = {
  name: 'ly',
  age: 22
}

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Components /> */}

    {/* <ComponentsPlus name="lingyuan">
      <div>子节点</div>
    </ComponentsPlus> */}

    {/* <ComponentsPlus name={this.obj}/> */}

    <ComponentsPlus/>

    {/* <Parent/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
