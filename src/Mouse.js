import React from "react";
import PropTypes from 'prop-types';
import withLoading from "./withLoading";

class Mouse extends React.Component{
    state = {
        x: '0',
        y: '0'
    }
    handler = (e) => {
        // console.log(e);
        this.setState({
            x: e.screenX,
            y: e.screenY
        })
    }
    render(){
        // 对外暴露组件状态和操作组件状态的方法
        // return this.props.render(this.state, this.handler)

        // 推荐使用 children 代替 render 属性
        return this.props.children(this.state, this.handler)
    }
    // 组件卸载时，解除事件绑定
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handler)
    }
}
// 校验 props.render 类型为函数，不要求参数名一定为 render.
Mouse.propTypes = {
    // render: PropTypes.func.isRequired
    children: PropTypes.func.isRequired
}

// export default Mouse;

// 使用高阶组件
const MouseWithLoading = withLoading(Mouse);
export default MouseWithLoading;