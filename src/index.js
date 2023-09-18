import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Components from './Components';
import ComponentsPlus from './ComponentsPlus';
import Parent from './Parent'
import Mouse from './Mouse'
import MouseWithLoading from './Mouse';
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

    {/* <ComponentsPlus/> */}

    {/* <Parent/> */}

    {/* <Mouse render={(state, handler) => <p onMouseMove={handler}>鼠标当前位置 {state.x} {state.y}</p>}/> */}

    {/* <Mouse>
      {(state, handler) => <div style={{width: '2560px', height: '1660px'}} onMouseMove={handler}>鼠标当前位置 {state.x} {state.y}</div>}
    </Mouse> */}

    <MouseWithLoading isLoading={false}>
      {(state, handler) => <div style={{width: '2560px', height: '1660px'}} onMouseMove={handler}>鼠标当前位置 {state.x} {state.y}</div>}
    </MouseWithLoading>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
