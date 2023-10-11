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
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

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

    {/* <MouseWithLoading isLoading={false}>
      {(state, handler) => <div style={{width: '2560px', height: '1660px'}} onMouseMove={handler}>鼠标当前位置 {state.x} {state.y}</div>}
    </MouseWithLoading> */}
	
	{/* 使用路由 */}
    <BrowserRouter>
		<Routes>
    
      {/* 为组件指定一个路由的 path，最终会以path为基础，进行页面的跳转 */}
			<Route path = '/' element = {<App/>} >
        <Route path = '/components' element = {<Components/>} /> 

        {/* 重定向 */}
        <Route exact path = "/components/2" element = {<Navigate to="/components"/>}/>

        <Route path='/mouse' element = {
          <Mouse>
            {(state, handler) => <div style={{width: '2560px', height: '1660px'}} onMouseMove={handler}>鼠标当前位置 {state.x} {state.y}</div>}
          </Mouse>} />

      </Route>
			
		</Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
