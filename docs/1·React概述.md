# 1·React概述

- [1·React概述](#1react概述)
  - [what's this](#whats-this)
  - [特点](#特点)
  - [安装](#安装)
  - [引入 \& 使用](#引入--使用)
  - [脚手架](#脚手架)
  - [npx](#npx)
  - [yarn](#yarn)


## what's this

React 是一个用于构建用户界面的 JavaScript 库。主要用来写HTML页面，或构建Web应用。

从 MVC 的角度来看，React 仅仅是视图层（V），只负责视图的渲染，而并非提供了 完整的 M 和 C 的功能。

React 起源于 Facebook 的内部项目，后又用来架设 Instagram 的网站，并于 2013 年 5 月开源。

## 特点

**声明式**

只需要描述 UI（HTML）是什么样，React 负责渲染 UI，并在数据变化时更新 UI .

---

**基于组件**

组件是 React 最重要的内容，表示页面中的部分内容，通过组合、复用多个组件，实现完整的页面功能。

---

**随处使用**

React 可以开发 Web 应用、移动端原生应用（react-native）、VR应用（react 360）。

## 安装

使用命令 `npm i react react-dom` 安装。

- react 包是核心，提供创建元素、组件等功能。
- react-dom 包提供 DOM 相关功能等。

## 引入 & 使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hello world</title>

    <!-- 引入 react 和 react-dom 两个 js 文件 -->
    <script src="../node_modules/react/umd/react.development.js"></script>
    <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
</head>
<body>
    <div id="root"></div>
    <script>
        // 创建 React 元素
        // React.createElement() 说明
        // 返回值：React元素
        //  第一个参数：创建的React元素名称
        // 第二个参数：React元素的属性
        // 第三个及其以后的参数：React元素的子节点
        const title = React.createElement('h1', null, 'Hello React')
        // 渲染 React 元素到页面中
        // ReactDOM.render() 说明
        // 第一个参数：要渲染的React元素
        // 第二个参数：DOM对象，用于指定渲染到页面中的位置
        ReactDOM.render(title, document.getElementById('root'))
    </script>
</body>
</html>
```

## 脚手架

脚手架是开发现代 Web 应用的必备。充分利用 Webpack、Babel、ESLint 等工具辅助。零配置，无需手动配置繁琐的工具即可使用。

使用命令：`npx create-react-app 项目名称` 或 `npm init react-app 项目名称` 初始化项目。

在项目根目录执行命令：`npm start` 启动项目。

---

使用 React.

```js
import React from 'react'
import ReactDOM from 'react-dom'
// 调用 React.createElement() 方法创建 react 元素。
// 调用 ReactDOM.render() 方法渲染 react 元素到页面中。
```

## npx

npx 是 npm v5.2.0 引入的命令，目的是提升包内提供的命令行工具的使用体验，无需安装脚手架包，就可以直接使用包提供的命令。

## yarn

yarn 是 Facebook 发布的包管理器，可以看做是 npm 的替代品，功能与 npm 相同。

初始化新项目：`yarn init`

安装包： `yarn add 包名称`

安装项目依赖项： `yarn`

初始化 React 项目 `yarn create react-app 项目名称`