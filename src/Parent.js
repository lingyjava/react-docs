import React from "react";
import Child from "./Child"

// 父组件传输给子组件数据
// class Parent extends React.Component {

//     state = {
//         name: 'lingyuan'
//     }

//     render() {
//         return (
//             <div>
//                 Hello, {this.state.name},this Parent.

//                 {/* 传递数据给子组件 */}
//                 <Child name={this.state.name}/>
//             </div>
//         )
//     }
// }

// 提供回调函数给子组件，接收子组件数据
// class Parent extends React.Component {

//     getChildMsg = (msg) => {
//         console.log('接收到子组件数据', msg)
//         document.querySelector('div').innerHTML = msg
//     }

//     render() {
//         return (
//             <div>
                
//                 {/* 传递数据给子组件 */}
//                 <Child getChildMsg={this.getChildMsg}/>
//             </div>
//         )
//     }
// }

// Contenxt 传递数据 方式1
// const { Provider, Consumer } = React.createContext({
//     // default value
//     value: "defaultValue"
// })

// class Parent extends React.Component {

//     render() {
//         return (
//             <Provider value={"lingyuan"}>
//                 <div>
//                     this Parent 
//                     <LocalChild />
//                 </div>
//             </Provider>
//         )
//     }
// }

// class LocalChild extends React.Component {
//     render() {
//         return (
//             <Consumer>
//                 {(value) => {
//                     console.log(value)
//                     return (
//                         <div>
//                             this LocalChild , 接收数据：{value}
//                         </div>
//                     );
//                 }}
//             </Consumer>
//         )
//     }
// }

// Contenxt 传递数据 方式2
import { Provider } from "./context";
class Parent extends React.Component {

    obj = {
        name: "lingyuan",
        msg: "hhh"
    }

    render() {
        return (
            <Provider value={this.obj}>
                <div>
                    this Parent 
                    <Child />
                </div>
            </Provider>
        )
    }
}

export default Parent