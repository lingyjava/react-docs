import './App.css';
import React from 'react';

// ***************** 组件基础 **************

// 函数组件
// function Components() {
//     return (
//         <div>hello world!</div>
//     )
// }


// 类组件
// class Components extends React.Component {
//     render() {
//         return <div>hello world!</div>
//     }
// }

// 事件绑定，函数组件
// function Components() {
//   // 事件处理程序
//   function handleClick() {
//     console.log('点击事件触发了')
//   }

//   return (
//     <button onClick={handleClick}>按钮</button>
//   )
// }

// 事件绑定，类组件
// class Components extends React.Component {
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

// 有状态组件
// class Components extends React.Component {

//     // 构造器
//     constructor() {
//         super()
//         // 初始化state
//         this.state = {
//             count: 0
//         }

//         // 解决事件处理程序 this 指向问题2：利用ES5中的bind方法，将事件处理程序中的this与组件实例绑定到一起
//         this.handleClick = this.handleClick.bind(this)
//     }

//     // 构造器简化语法
//     // state = {
//     //     count: 0
//     // }

//     // handleClick() {
//     //     console.log('单击事件触发了')
//     //     this.setState({
//     //         count: this.state.count + 1
//     //     })
//     // }

//     // 解决事件处理程序 this 指向问题3：利用箭头函数形式的class实例方法
//     handleClick = () => {
//         console.log('单击事件触发了')
//         this.setState({
//             count: this.state.count + 1
//         })
//     }


//     render() {
//         return (
//             // 事件处理程序中 this 为 undefined 无法获取到 setState 方法
//               <button onClick={this.handleClick}>有状态组件：{this.state.count}</button>

//             // 解决事件处理程序 this 指向问题1：使用箭头函数自身不绑定this的特点，render() 方法中的 this 为组件实例，可以获取到 setState()
//             // <button onClick={() => this.handleClick()}>有状态组件：{this.state.count}</button>

//         )
//     }
// }

// 受控组件
// class Components extends React.Component {
    
//     state = {
//         // 添加一个状态，作为表单元素的value值
//         txt: '',
//         content: '',
//         city: 'sz',
//         isChecked: false
//     }

//     handlerChange = (e) => {
//         this.setState({
//             txt: e.target.value
//         })
//     }
//     handlerContent = e => {
//         this.setState({
//             content: e.target.value
//         })
//     }
//     handlerCity = e => {
//         this.setState({
//             city: e.target.value
//         })
//     }
//     handlerChecked = e => {
//         this.setState({
//             isChecked: e.target.checked
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text" value={this.state.txt} 
//                 // 绑定 change 事件，将 表单元素的值 设置为 state 的值
//                 onChange={this.handlerChange}
//                 />
//                 <br/>
                
//                 {/* 富文本框 */}
//                 <textarea value={this.state.content} onChange={this.handlerContent}></textarea>
//                 <br/>

//                 {/* 下拉菜单 */}
//                 <select value={this.state.city} onChange={this.handlerCity}>
//                     <option value="bj">北京</option>
//                     <option value="sh">上海</option>
//                     <option value="gz">广州</option>
//                     <option value="sz">深圳</option>
//                 </select>
//                 <br/>

//                 {/* 选择框 */}
//                 <input type='checkbox' checked={this.state.isChecked} onChange={this.handlerChecked}/>
//                 <br/>
//             </div>
//         )
//     }
// }

// 受控组件 - 表单多元素优化
// class Components extends React.Component {
    
//     state = {
//         // 添加一个状态，作为表单元素的value值
//         txt: '',
//         content: '',
//         city: 'sz',
//         isChecked: false
//     }

//     handlerChange = (e) => {
//         const name = e.target.name
//         const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
//         this.setState({
//             [name]: value
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text" name="txt" value={this.state.txt} onChange={this.handlerChange}/>
//                 <br/>
                
//                 <textarea value={this.state.content} name="content" onChange={this.handlerChange}></textarea>
//                 <br/>

//                 <select value={this.state.city} name="city" onChange={this.handlerChange}>
//                     <option value="bj">北京</option>
//                     <option value="sh">上海</option>
//                     <option value="gz">广州</option>
//                     <option value="sz">深圳</option>
//                 </select>
//                 <br/>

//                 <input type='checkbox' checked={this.state.isChecked} name="isChecked" onChange={this.handlerChange}/>
//                 <br/>
//             </div>
//         )
//     }
// }

// 非受控组件
// class Components extends React.Component {

//     constructor() {
//         super()
//         // 调用 React.createRef() 方法创建一个 ref 对象
//         this.txtRef = React.createRef()
//     }

//     getTxt = () => {
//         // 通过 ref 对象获取到文本框的值
//         console.log(this.txtRef.current.value); 
//     }

//     render() {
//         return (
//             <div>
//                 {/* 将创建好的 ref 对象添加到文本框中 */}
//                 <input type="text" ref={this.txtRef} />

//                 <button onClick={this.getTxt}>获取文本框的值</button>
//             </div>
//         )
//     }
// }

// 案例
class Components extends React.Component {

    state = {
        // mock data
        comments: [
            // {id: 1, title: 't1', content: 'hello world'},
            // {id: 2, title: 't2', content: 'hi~~~'},
            // {id: 3, title: 't3', content: '666'}
        ],
        title: null,
        content: null
    }

    // 渲染列表
    renderCommentList() {
        const { comments }  = this.state
        // 条件渲染
        if (comments.length === 0) {
            return <div>暂无评论</div>
        }
        return (
            // 列表渲染
            <ul>
                {this.state.comments.map(item => (
                    <li key={item.id}>
                        <h3>title:{item.title}</h3>
                        <p>content:{item.content}</p>
                        <hr/>
                    </li>
                ))}
            </ul>
        )
    }

    // 处理表单数据
    handlerForm = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    // 提交表单
    subForm = e => {
        const { title, content, comments } = this.state
        // 非空校验
        if (title.trim() === '' || content.trim() === '') {
            alert('标题和内容不能为空')
            return
        }
        // 添加到state中
        const newComments = [
            {
                id: Math.random(),
                title: title,
                content: content
            }, 
            ...comments
        ]

        this.setState({
            comments: newComments,
            // 还原表单数据
            title: '',
            content: ''
        })
    }

    render () {
        const { title, content } = this.state
        return (
            <div className='App'>
                <div>
                    <input type='text' name='title' value={title} placeholder='请输入标题' onChange={this.handlerForm}/>
                    <br/>
                    <textarea name='content' value={content} cols='30' rows='10' placeholder='请输入内容' onChange={this.handlerForm}></textarea>
                    <br/>
                    <button onClick={this.subForm}>发布</button>
                </div>

                {/* 渲染列表 */}
                {/* {
                    this.state.comments.length === 0 ? 
                    <div>暂无评论</div> :
                    <ul>
                        {this.state.comments.map(item => (
                            <li key={item.id}>
                                <h3>title:{item.title}</h3>
                                <p>content:{item.content}</p>
                                <hr/>
                            </li>
                        ))}
                    </ul>
                } */}
                {/* 渲染列表-抽象到函数 */}
                {this.renderCommentList()}

            </div>
        )
    }
}
export default Components;