import logo from './logo.svg';
import './App.css';
import React from 'react';

// 原组件
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// 函数组件
// function App() {
//     return (
//         <div>hello world!</div>
//     )
// }


// 类组件
// class App extends React.Component {
//     render() {
//         return <div>hello world!</div>
//     }
// }

// 事件绑定，函数组件
// function App() {
//   // 事件处理程序
//   function handleClick() {
//     console.log('点击事件触发了')
//   }

//   return (
//     <button onClick={handleClick}>按钮</button>
//   )
// }

// 事件绑定，类组件
// class App extends React.Component {
//   handleClick(e) {
//     // 阻止浏览器的默认行为
//     e.preventDefault()
    
//     console.log('a标签的单击事件触发了')
//   }
//   render() {
//     return (
//       <a href="https://www.baidu.com/" onClick={this.handleClick}>百度一下</a>
//     )
//   }
// }

class App extends React.Component {

  // 构造器
  constructor() {
      super()
      // 初始化state
      this.state = {
          count: 0
      }
  }
  handleClick() {
      console.log('单击事件触发了')
      this.setState({
          count: this.state.count + 1
      })
  }
  render() {
      return (
          <button onClick={() => this.handleClick}>{this.state.count}</button>
          // <button onClick={() => this.handlerClick}>有状态组件，{this.state.count}</button>
      )
  }
}

// // 有状态组件
// class App extends React.Component {
//   // 构造器
//   constructor() {
//       super()
//       // 初始化state
//       this.state = {
//           count: 0
//       }
//   }

//   // 简化语法
//   // state = {
//   //     count: 0
//   // }

//   handlerClick() {
//       console.log('触发点击事件')
//       this.setState({
//           count: this.state.count + 1
//       })
//   }
  
//   render() {
//       return (
//           <button onClick={() => this.handlerClick}>有状态组件，{this.state.count}</button>
//       )
//   }
// }

export default App;
