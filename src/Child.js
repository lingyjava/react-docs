import React from 'react';

// 接收父组件数据
// class Child extends React.Component {

//     render() {
//         return (
//             <div>
//                 {/* 子组件接收到数据：  */}
//                 Hello, {this.props.name},this Child.
//             </div>
//         )
//     }
// }

// 传输给父组件数据
// class Child extends React.Component {

//     state = {
//         msg: 'Hello World!'
//     }

//     handlerClick = () => {
//         this.props.getChildMsg(this.state.msg)
//     }

//     render() {
//         return (
//             <div onClick={this.handlerClick}>
//                 {/* 子组件接收到数据：  */}
//                 Hello, this Child.
//             </div>
//         )
//     }
// }

// Contenxt 传递数据 方式2
import { Consumer } from "./context";
class Child extends React.Component {
    render() {
        return (
            <Consumer>
                {(value) => {
                    console.log(value)
                    return (
                        <div>
                            this Child , 接收数据：{value.name} , {value.msg}
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default Child