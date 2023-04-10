//你会遇到的另一个常见的快捷表达式是 [JavaScript 与（`&&`）运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_AND#:~:text=The logical AND ( %26%26 ) operator,it returns a Boolean value.)。在 React 组件里，通常用在当条件成立时，你想渲染一些 JSX，**或者不做任何渲染**。使用 `&&`，你也可以实现仅当 `isPacked` 为 `true` 时，渲染勾选符号。
function Item({ name, isPacked }) {
    return (
      <li className="item">
        {name} {isPacked && '✔'}
      </li>
    );
  }
  
  export default function PackingList() {
    return (
      <section>
        <h1>Sally Ride 的行李清单</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="宇航服" 
          />
          <Item 
            isPacked={true} 
            name="带金箔的头盔" 
          />
          <Item 
            isPacked={false} 
            name="Tam 的照片" 
          />
        </ul>
      </section>
    );
  }
  