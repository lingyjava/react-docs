import React from "react";

// ********* 高阶函数 ************
// 函数名称约定以 with 开头
// 函数参数应该以大写字母开头（作为要渲染的组件）
function withLoading(WrappedComponent) {
    // 在函数内部创建一个类组件，提供复用的状态逻辑代码，并返回
    class Mouse extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                isLoading: props.isLoading
            }
        }
        if (isLoading) {
            return <div>Loading...</div>;
        } else() {
            return <WrappedComponent {...props} />;
        }
    }
    Mouse.propTypes = {
        isLoading: PropTypes.func.isRequired
    }
    return Mouse;
}

export default withLoading;