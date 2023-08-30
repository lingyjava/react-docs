# 2·JSX



## what's this

JSX 是 JavaScript XML 的简写，表示在 JavaScript 代码中写 XML（HTML）格式的代码。

声明式语法更加直观，与HTML结构相同，提升开发效率，是 React 的核心内容。

推荐使用 JSX 语法创建 React 元素，JSX 语法更能体现 React 的声明式特点。

---

createElement() 缺点：描述的结构繁琐不简洁。

```js
React.createElement(
    'div',
    {className: 'shopping-list'},
    React.createElement('h1', null, 'Shopping List'),
    React.createElement('ul',null, 
                        React.createElement('li', null, 'Instagram'),
                        React.createElement('li', null, 'WhatsApp')
    )
)
```

---

**JSX**

```jsx
<div className="shopping-list">
    <h1>Shopping List</h1>
    <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
    </ul>
</div>
```

## 使用步骤

1. 使用 JSX 语法创建 react 元素。

2. 使用 ReactDOM.render() 方法渲染 react 元素到页面中。

```jsx
const title = <h1>Hello JSX</h1>
ReactDOM.render(title, root)
```

### 配置

JSX 不是标准的 ECMAScript 语法，它是 ECMAScript 的语法扩展。

需要使用 babel 编译处理后，才能在浏览器环境中使用。

create-react-app 脚手架中已经默认有该配置，无需手动配置，可以使用 JSX 语法。

编译 JSX 语法的包为：`@babel/preset-react` .

### 注意事项

- React 元素的属性名使用驼峰命名法。
- 特殊属性名：class -> className、for -> htmlFor、tabindex -> tabIndex
- 没有子节点的 React 元素可以用 `/>` 结束。
- 推荐使用小括号包裹 JSX，避免 JS 中的自动插入分号陷阱。

---

```jsx
// 使用小括号包裹 JSX
const dv = (
	<div>Helo JSX</div>
)
```

## 嵌入Js

数据存储在 JS 中。

语法：`{ JavaScript表达式 }`，单大括号中可以使用任意的 JavaScript 表达式，但不能出现语句（if / for）。

```jsx
const name = 'Jack'
const dv = (
	<div>你好，我叫：{name}</div>
)
```

