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
            return <WrappedComponent {...props} />;
        }
    };

    WithLoadingComponent.propTypes = {
        isLoading: PropTypes.bool.isRequired
    }

    return WithLoadingComponent;
}

export default withLoading;