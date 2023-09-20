import React from "react";
import PropTypes from 'prop-types';

// ********* 高阶函数 ************
// 函数名称约定以 with 开头
// 函数参数应该以大写字母开头（作为要渲染的组件）

function withLoading(WrappedComponent) {
    // 提供复用的状态逻辑代码，并返回
    function WithLoadingComponent({ isLoading, ...props }) {
        console.log(props.isLoading);
        if (isLoading) {
            return <div>Loading...</div>;
        } else {
            // 渲染 WrappedComponent 时，将 this.props （isLoading可选） 传递给组件, 解决高阶组件不往下传递props问题。
            return <WrappedComponent {...props} {...isLoading}  />;
        }
    };

    WithLoadingComponent.propTypes = {
        isLoading: PropTypes.bool.isRequired
    }

    // 设置 displayName
    function getDisplayName(WrappedComponent) {
        return WrappedComponent.displayName || WrappedComponent.name || 'Component'
    }
    WithLoadingComponent.displayName = `HOC(${getDisplayName(WrappedComponent)})`

    return WithLoadingComponent;
}

export default withLoading;