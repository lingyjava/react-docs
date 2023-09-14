// 组件进阶
import React from 'react';

// 函数组件接收数据
// function ComponentsPlus(props) {  
//     return (
//         <div>
//             hello world,接收数据：{props.name}
//         </div>
//     )
// }

// 类组件接收数据
// class ComponentsPlus extends React.Component {

//     // 使用类组件时，如果使用了构造函数，应该将 props 传递给 super()，否则，无法在构造函数中获取到 props
//     constructor(props) {
//         // 将props传递给父类构造函数
//         super(props)

//         this.state = {
//             name: props.name
//         }
//     }
        

//     render() {
//         return (
//             <div>
//                 hello world <br/>
//                 接收数据：<br/>
//                 {this.props.name}<br/>
//                 {this.state.name}<br/>
//             </div>
//         )
//     }
// }

// props 校验
import PropTypes from 'prop-types';

// children 属性
class ComponentsPlus extends React.Component {
    render() {
        return (
            <div>
                {/* 获取子节点 */}
                {this.props.children}<br/>
                {this.props.name}<br/>
            </div>
        )
    }
}

ComponentsPlus.propTypes = {
    name: PropTypes.string
}

ComponentsPlus.defaultProps = {
    name: 'defaultName'
}

export default ComponentsPlus;