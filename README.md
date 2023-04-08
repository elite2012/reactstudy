# reactstudy
reactstudy
git clone https://github.com/elite2012/reactstudy.git
cd my-app
yarn install
yarn build
# 学习react

https://zh-hans.reactjs.org/learn

## 描述UI

描述用户界面

React 是一个用于构建用户界面（UI）的 JavaScript 库，用户界面由按钮、文本和图像等小单元内容构建而成。React 帮助你把它们组合成可重用、可嵌套的 *组件*。从 web 端网站到移动端应用，屏幕上的所有内容都可以被分解成组件。在本章节中，你将学习如何创建、定制以及有条件地显示 React 组件。

### 本章节

- [如何创建你的第一个组件](https://zh-hans.reactjs.org/learn/your-first-component)
- [在什么时候以及如何创建多文件组件](https://zh-hans.reactjs.org/learn/importing-and-exporting-components)
- [如何使用 JSX 为 JavaScript 添加标签](https://zh-hans.reactjs.org/learn/writing-markup-with-jsx)
- [如何在 JSX 中使用花括号来从组件中使用 JavaScript 功能](https://zh-hans.reactjs.org/learn/javascript-in-jsx-with-curly-braces)
- [如何用 props 配置组件](https://zh-hans.reactjs.org/learn/passing-props-to-a-component)
- [如何有条件地渲染组件](https://zh-hans.reactjs.org/learn/conditional-rendering)
- [如何在同一时间渲染多个组件](https://zh-hans.reactjs.org/learn/rendering-lists)
- [如何通过保持组件的纯粹性来避免令人困惑的错误](https://zh-hans.reactjs.org/learn/keeping-components-pure)

### 第一个组件

React 应用是由被称为 **组件** 的独立 UI 片段构建而成。React 组件本质上是可以任意添加标签的 JavaScript 函数。组件可以小到一个按钮，也可以大到是整个页面。这是一个 `Gallery` 组件，用于渲染三个 `Profile` 组件：

app.js

```
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

index.js

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './UI/usecomponent/App';
//UI-第一个组件-使用组件
ReactDOM.render(
    <App/>,
    document.getElementById('root')

)
```

结果：

![image-20230407205400415](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230407205400415.png)

### 导入和导出组件

你可以在一个文件中声明许多组件，但文件的体积过大会变得难以浏览。为了解决这个问题，你可以在一个文件中只*导出*一个组件，然后再从另一个文件中*导入*该组件：

Gallery.js

```
import Profile from './Profile.js';

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

Profile.js

```
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}
```

#### 从同一文件中导出和导入多个组件

如果你只想展示一个 `Profile` 组，而不展示整个图集。你也可以导出 `Profile` 组件。但 `Gallery.js` 中已包含 *默认* 导出，此时，你不能定义 *两个* 默认导出。但你可以将其在新文件中进行默认导出，或者将 `Profile` 进行 *具名* 导出。**同一文件中，有且仅有一个默认导出，但可以有多个具名导出！**

首先，用具名导出的方式，将 `Profile` 组件从 `Gallery.js` **导出**（不使用 `default` 关键字）：

```
export function Profile() {

  // ...

}
```

接着，用具名导入的方式，从 `Gallery.js` 文件中 **导入** `Profile` 组件（用大括号）:

```
import { Profile } from './Gallery.js';
```

最后，在 `App` 组件里 **渲染** `<Profile />`：

```
export default function App() {

  return <Profile />;

}
```

现在，`Gallery.js` 包含两个导出：一个是默认导出的 `Gallery`，另一个是具名导出的 `Profile`。`App.js` 中均导入了这两个组件。尝试将 `<Profile />` 改成 `<Gallery />`，回到示例中：

App.js

```
import Gallery from './Gallery.js';

export default function App() {
  return (
    <Gallery />
  );
}
```

Gallery.js

```
export function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>了不起的科学家们</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

index.js

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './UI/exportimprotcomponent/App';
//UI-第一个组件-使用组件
ReactDOM.render(
    <App/>,
    document.getElementById('root')

)
```

![image-20230407210539727](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230407210539727.png)





### 使用JSX标签

你将会学习到

- 为什么 React 将标签和渲染逻辑耦合在一起

- JSX 与 HTML 有什么区别

- 如何通过 JSX 展示信息

  

#### JSX: 将标签引入 JavaScript 

网页是构建在 HTML、CSS 和 JavaScript 之上的。多年以来，web 开发者都是将网页内容存放在 HTML 中，样式放在 CSS 中，而逻辑则放在 JavaScript 中 —— 通常是在不同的文件中！页面的内容通过标签语言描述并存放在 HTML 文件中，而逻辑则单独存放在 JavaScript 文件中。

![image-20230406125944783](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406125944783.png)

但随着 Web 的交互性越来越强，逻辑越来越决定页面中的内容。JavaScript 负责 HTML 的内容！这也是为什么 **在 React 中，渲染逻辑和标签共同存在于同一个地方——组件。**

![image-20230406130026802](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406130026802.png)

将一个按钮的渲染逻辑和标签放在一起可以确保它们在每次编辑时都能保持互相同步。反之，彼此无关的细节是互相隔离的，例如按钮的标签和侧边栏的标签。这样我们在修改其中任意一个组件时会更安全。

每个 React 组件都是一个 JavaScript 函数，它会返回一些标签，React 会将这些标签渲染到浏览器上。React 组件使用一种被称为 JSX 的语法扩展来描述这些标签。JSX 看起来和 HTML 很像，但它的语法更加严格并且可以动态展示信息。了解这些区别最好的方式就是将一些 HTML 标签转化为 JSX 标签。

#### 将 HTML 转化为 JSX

假设你现在有一些（完全有效的）HTML 标签：

```
<h1>海蒂·拉玛的代办事项</h1>

<img 

  src="https://i.imgur.com/yXOvdOSs.jpg" 

  alt="Hedy Lamarr" 

  class="photo"

>

<ul>

    <li>发明一种新式交通信号灯

    <li>排练一个电影场景

    <li>改进频谱技术

</ul>
```

而现在想要把这些标签迁移到组件中：

```
export default function TodoList() {

  return (

    // ???

  )

}
```

如果直接复制到组件中，并不能正常工作：

app.js

```
return (
    // 这不起作用！
    <h1>海蒂·拉玛的代办事项</h1>
    <img 
      src="https://i.imgur.com/yXOvdOSs.jpg" 
      alt="Hedy Lamarr" 
      class="photo"
    >
    <ul>
      <li>发明一种新式交通信号灯
      <li>排练一个电影场景
      <li>改进频谱技术
    </ul>
  );
}
```

![image-20230406131115083](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406131115083.png)

这是因为 JSX 语法更加严格并且相比 HTML 有更多的规则！上面的错误提示可以帮助你修复标签中的错误，当然也可以参考下面的指引。

#### JSX 规则 

##### 1. 只能返回一个根元素

如果想要在一个组件中包含多个元素，**需要用一个父标签把它们包裹起来**。

例如，你可以使用一个 `<div>` 标签：

<div>
  <h1>海蒂·拉玛的代办事项</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  >
  <ul>
    ...
  </ul>
</div>


如果你不想在标签中增加一个额外的 `<div>`，可以用 `<>` 和 `</>` 元素来代替：

```
<>

  <h1>海蒂·拉玛的代办事项</h1>

  <img 

    src="https://i.imgur.com/yXOvdOSs.jpg" 

    alt="Hedy Lamarr" 

    class="photo"

  >

  <ul>

    ...

  </ul>

</>
```

##### 2. 标签必须闭合

app.js

```
export default function TodoList() {
  return (
    // This doesn't quite work!
    <h1>Hedy Lamarr's Todos</h1>
    <img
      src="https://i.imgur.com/yXOvdOSs.jpg"
      alt="Hedy Lamarr"
      class="photo"
    >
    <ul>
      <li>Invent new traffic lights
      <li>Rehearse a movie scene
      <li>Improve spectrum technology
    </ul>
  );
}
```

##### 3. 使用驼峰式命名法给 所有 大部分属性命名！ 

JSX 最终会被转化为 JavaScript，而 JSX 中的属性也会变成 JavaScript 对象中的键值对。在你自己的组件中，经常会遇到需要用变量的方式读取这些属性的时候。但 JavaScript 对变量的命名有限制。例如，变量名称不能包含 `-` 符号或者像 `class` 这样的保留字。

这就是为什么在 React 中，大部分 HTML 和 SVG 属性都用驼峰式命名法表示。例如，需要用 `strokeWidth` 代替 `stroke-width`。由于 `class` 是一个保留字，所以在 React 中需要用 `className` 来代替。这也是 [DOM 属性中的命名](https://developer.mozilla.org/en-US/docs/Web/API/Element/className):

```
<img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  className="photo"
/>
```

##### 高级提示：使用 JSX 转化器 

将现有的 HMTL 中的所有属性转化 JSX 的格式是很繁琐的。我们建议使用 [转化器](https://transform.tools/html-to-jsx) 将 HTML 和 SVG 标签转化为 JSX。这种

![image-20230406131557776](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406131557776.png)





如果你有像这样的现有的 HTML 片段，你可以使用它进行语法转换 [converter](https://transform.tools/html-to-jsx)：

APP.JS

```
export default function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </>
  );
}

```

![image-20230406115202387](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406115202387.png)

#### 高级提示：

##### 在jsx中通过大括号使用JavaSript

#### 你将会学习到

- 如何使用引号传递字符串
- 在 JSX 的大括号内引用 JavaScript 变量
- 在 JSX 的大括号内调用 JavaScript 函数
- 在 JSX 的大括号内使用 JavaScript 对象

当你想把一个字符串属性传递给 JSX 时，把它放到单引号或双引号中：

#### 使用引号传递字符串

```
export default function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}

```

这里的 `"https://i.imgur.com/7vQD0fPs.jpg"` 和 `"Gregorio Y. Zara"` 就是被作为字符串传递的。

但是如果你想要动态地指定 `src` 或 `alt` 的值呢？你可以 **用 `{` 和 `}` 替代 `"` 和 `"` 以使用 JavaScript 变量** ：

```
export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}
```

请注意 `className="avatar"` 和 `src={avatar}` 之间的区别，`className="avatar"` 指定了一个就叫 `"avatar"` 的使图片在样式上变圆的 CSS 类名，而 `src={avatar}` 这种写法会去读取 JavaScript 中 `avatar` 这个变量的值。这是因为大括号可以使你直接在标签中使用 JavaScript！

index.js

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './UI/jsx/js/string/App';
//UI-第一个组件-jsx-使用引号传递字符串
ReactDOM.render(
    <App/>,
    document.getElementById('root')

)
```



![image-20230408094637219](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230408094637219.png)

#### 使用大括号：一扇进入 JavaScript 世界的窗户 

JSX 是一种编写 JavaScript 的特殊方式。这为在大括号 `{ }` 中使用 JavaScript 带来了可能。下面的示例中声明了科学家的名字，`name`，然后在 `<h1>` 后的大括号内嵌入它：

app.js

```
export default function TodoList() {
  const name = 'Gregorio Y. Zara';
  return (
    <h1>{name}'s To Do List</h1>
  );
}

```

大括号内的任何 JavaScript 表达式都能正常运行，包括像 `formatDate()` 这样的函数调用：

App.js

```
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoList() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}
```

#### 可以在哪使用大括号 

在 JSX 中，只能在以下两种场景中使用大括号：

1. 用作 JSX 标签内的**文本**：`<h1>{name}'s To Do List</h1>` 是有效的，但是 `<{tag}>Gregorio Y. Zara's To Do List</{tag}>` 无效。

2. 用作紧跟在 `=` 符号后的 **属性**：`src={avatar}` 会读取 `avatar` 变量，但是 `src="{avatar}"` 只会传一个字符串 `{avatar}`。

   

##### 使用 “双大括号”：JSX 中的 CSS 和 对象 

除了字符串、数字和其它 JavaScript 表达式，你甚至可以在 JSX 中传递对象。对象也用大括号表示，例如 `{ name: "Hedy Lamarr", inventions: 5 }`。因此，为了能在 JSX 中传递，你必须用另一对额外的大括号包裹对象：`person={{ name: "Hedy Lamarr", inventions: 5 }}`。

你可能在 JSX 的内联 CSS 样式中就已经见过这种写法了。React 不要求你使用内联样式（使用 CSS 类就能满足大部分情况）。但是当你需要内联样式的时候，你可以给 `style` 属性传递一个对象：

App.js

```
export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}

```

![image-20230408095433459](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230408095433459.png)

试着更改一下 `backgroundColor` 和 `color` 的值。

当你写成这样时，你可以很清楚地看到大括号里包着的对象：

```
<ul style={
  {
    backgroundColor: 'black',
    color: 'pink'
  }
}>
```

所以当你下次在 JSX 中看到 `{{` 和 `}}`时，就知道它只不过是包在大括号里的一个对象罢了！

##### JavaScript 对象和大括号的更多可能 

你可以将多个表达式合并到一个对象中，在 JSX 的大括号内分别使用它们：

App.js

```
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```

![image-20230406133000178](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406133000178.png)

#### 摘要

现在你几乎了解了有关 JSX 的一切：

- JSX 引号内的值会作为字符串传递给属性。
- 大括号让你可以将 JavaScript 的逻辑和变量带入到标签中。
- 它们会在 JSX 标签中的内容区域或紧随属性的 `=` 后起作用。
- `{{` 和 `}}` 并不是什么特殊的语法：它只是包在 JSX 大括号内的 JavaScript 对象。

### 将Props传递给组件

React 组件使用 *props* 来互相通信。每个父组件都可以提供 props 给它的子组件，从而将一些信息传递给它。Props 可能会让你想起 HTML 属性，但你可以通过它们传递任何 JavaScript 值，包括对象、数组和函数。

#### 你将会学习到

- 如何向组件传递 props
- 如何从组件读取 props
- 如何为 props 指定默认值
- 如何给组件传递 JSX
- Props 如何随时间变化

#### 熟悉的props

Props 是你传递给 JSX 标签的信息。例如，`className`、`src`、`alt`、`width` 和 `height` 便是一些可以传递给 `<img>` 的 props：

app.js

```
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export default function Profile() {
  return (
    <Avatar />
  );
}

```

你可以传递给 `<img>` 标签的 props 是预定义的（ReactDOM 符合 [HTML 标准](https://www.w3.org/TR/html52/semantics-embedded-content.html#the-img-element)）。但是你可以将任何 props 传递给 *你自己的* 组件，例如 `<Avatar>` ，以便自定义它们。 就像这样！

#### 向组件传递props

在这段代码中， `Profile` 组件没有向它的子组件 `Avatar` 传递任何 props ：

```
export default function Profile() {

  return (

    <Avatar />

  );

}
```

你可以分两步给 `Avatar` 一些 props。

##### 步骤 1: 将 props 传递给子组件

首先，将一些 props 传递给 `Avatar`。例如，让我们传递两个 props：`person`（一个对象）和 `size`（一个数字）：

```
export default function Profile() {

  return (

    <Avatar

      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}

      size={100}

    />

  );

}
```

现在，你可以在 `Avatar` 组件中读取这些 props 了。

##### 步骤 2: 在子组件中读取 props 

你可以通过在 `function Avatar` 之后直接列出它们的名字 `person, size` 来读取这些 props。这些 props 在 `({` 和 `})` 之间，并由逗号分隔。这样，你可以在 `Avatar` 的代码中使用它们，就像使用变量一样。

```
function Avatar({ person, size }) {

  // 在这里 person 和 size 是可访问的

}
```

向使用 `person` 和 `size` props 渲染的 `Avatar` 添加一些逻辑，你就完成了。

现在你可以配置 `Avatar` ，通过不同的 props，使它能以多种不同的方式进行渲染。尝试变换值吧！

app.js

```
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}

```

utils.js

```
export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

```

Props 使你独立思考父组件和子组件。 例如，你可以改变 `Profile` 中的 `person` 或 `size` props，而无需考虑 `Avatar` 如何使用它们。 同样，你可以改变 `Avatar` 使用这些 props 的方式，不必考虑 `Profile`。

你可以将 props 想象成可以调整的“旋钮”。它们的作用与函数的参数相同 —— 事实上，props *正是* 组件的唯一参数！ React 组件函数接受一个参数，一个 `props` 对象：

```
function Avatar(props) {

  let person = props.person;

  let size = props.size;

  // ...

}
```

通常你不需要整个 `props` 对象，所以可以将它解构为单独的 props。

#### 给 prop 指定一个默认值 

如果你想在没有指定值的情况下给 prop 一个默认值，你可以通过在参数后面写 `=` 和默认值来进行解构：

```
function Avatar({ person, size = 100 }) {

  // ...

}
```

现在， 如果 `<Avatar person={...} />` 渲染时没有 `size` prop，  `size` 将被赋值为 `100`。

默认值仅在缺少 `size` prop 或 `size={undefined}` 时生效。 但是如果你传递了 `size={null}` 或 `size={0}`，默认值将 **不** 被使用。

#### 使用 JSX 展开语法传递 props

有时候，传递 props 会变得非常重复：

```
function Profile({ person, size, isSepia, thickBorder }) {

  return (

    <div className="card">

      <Avatar

        person={person}

        size={size}

        isSepia={isSepia}

        thickBorder={thickBorder}

      />

    </div>

  );

}
```

重复代码没有错（它可以更清晰）。但有时你可能会重视简洁。一些组件将它们所有的 props 转发给子组件，正如 `Profile` 转给 `Avatar` 那样。因为它们不直接使用它们任何 props，所以使用更简洁的“展开”语法是有意义的：

```
function Profile(props) {

  return (

    <div className="card">

      <Avatar {...props} />

    </div>

  );

}
```

这会将 `Profile` 的所有 props 转发到 `Avatar`，而不列出每个名字。

#### 注：未实现

**请克制地使用展开语法。** 如果你在所有其他组件中都使用它，那就有问题了。 通常，它表示你应该拆分组件，并将子组件作为 JSX 传递。 接下来会详细介绍！

#### 将 JSX 作为子组件传递

嵌套浏览器内置标签是很常见的：

```
<div>

  <img />

</div>
```

有时你会希望以相同的方式嵌套自己的组件：

```
<Card>

  <Avatar />

</Card>
```

当您将内容嵌套在 JSX 标签中时，父组件将在名为 `children` 的 prop 中接收到该内容。例如，下面的 `Card` 组件将接收一个被设为 `<Avatar />` 的 `children` prop 并将其包裹在 div 中渲染：

App.js

```
import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
```

Avatar.js

```
import { getImageUrl } from './utils.js';

export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

```

utils.js

```
export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

```

尝试用一些文本替换 `<Card>` 中的 `<Avatar>`，看看 `Card` 组件如何包裹任意嵌套内容。它不必“知道”其中渲染的内容。你会在很多地方看到这种灵活的模式。

可以将带有 `children` prop 的组件看作有一个“洞”，可以由其父组件使用任意 JSX 来“填充”。你会经常使用 `children` prop 来进行视觉包装：面板、网格等等。

![image-20230406142446361](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406142446361.png)

#### Props 如何随时间变化

下面的 `Clock` 组件从其父组件接收两个 props：`color` 和 `time`。（父组件的代码被省略，因为它使用 [state](https://zh-hans.reactjs.org/learn/state-a-components-memory)，我们暂时不会深入研究。）

尝试在下面的选择框中更改颜色：

Clock.js

```
export default function Clock({ color, time }) {
  return (
    <h1 style={{ color: color }}>
      {time}
    </h1>
  );
}

```

![image-20230406142729004](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406142729004.png)

这个例子说明，**一个组件可能会随着时间的推移收到不同的 props。** Props 并不总是静态的！在这里，`time` prop 每秒都在变化。当你选择另一种颜色时，`color` prop 也改变了。Props 反映了组件在任何时间点的数据，并不仅仅是在开始时。

然而，props 是 [不可变的](https://en.wikipedia.org/wiki/Immutable_object)（一个计算机科学术语，意思是“不可改变”）。当一个组件需要改变它的 props（例如，响应用户交互或新数据）时，它不得不“请求”它的父组件传递 *不同的 props* —— 一个新对象！它的旧 props 将被丢弃，最终 JavaScript 引擎将回收它们占用的内存。

**不要尝试“更改 props”。** 当你需要响应用户输入（例如更改所选颜色）时，你可以“设置 state”，你可以在 [State: 一个组件的内存](https://zh-hans.reactjs.org/learn/state-a-components-memory) 中继续了解。

#### 摘要

- 要传递 props，请将它们添加到 JSX，就像使用 HTML 属性一样。
- 要读取 props，请使用 `function Avatar({ person, size })` 解构语法。
- 你可以指定一个默认值，如 `size = 100`，用于缺少值或值为 `undefined` 的 props 。
- 你可以使用 `<Avatar {...props} />` JSX 展开语法转发所有 props，但不要过度使用它！
- 像 `<Card><Avatar /></Card>` 这样的嵌套 JSX，将被视为 `Card` 组件的 `children` prop。
- Props 是只读的时间快照：每次渲染都会收到新版本的 props。
- 你不能改变 props。当你需要交互性时，你可以设置 state。

#### 挑战1

App.js

```
import { getImageUrl } from './utils.js';
//提取一个组件 
//这个 Gallery 组件包含两份个人资料，其中有一些非常相似的标签
//。从中提取一个 Profile 组件以减少重复。你需要选择要传递哪些 props。
function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li><b>Profession:</b> {profession}</li>
        <li>
          <b>Awards: {awards.length} </b>
          ({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
      />
      <Profile
        imageId='YfeOqp2'
        name='Katsuko Saruhashi'
        profession='geochemist'
        discovery="a method for measuring carbon dioxide in seawater"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
      />
    </div>
  );
}

```

utils.js

```
export function getImageUrl(imageId, size = 's') {
    return (
      'https://i.imgur.com/' +
      imageId +
      size +
      '.jpg'
    );
  }
```

index.js

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './UI/propscomponent/reacp/1-Extractacomponent/App'
//这个 Gallery 组件包含两份个人资料，其中有一些非常相似的标签
//。从中提取一个 Profile 组件以减少重复。你需要选择要传递哪些 props。

ReactDOM.render(
    <App/>,
    document.getElementById('root')

)
```

![image-20230408163112786](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230408163112786.png)

#### 挑战2

#### 挑战3

### 条件渲染

通常你的组件会需要根据不同的情况显示不同的内容。在 React 中，你可以通过使用 JavaScript 的 `if` 语句、`&&` 和 `? :` 运算符来选择性地渲染 JSX。

#### 你将会学习到

- 如何根据不同条件返回不同的 JSX
- 如何根据不同条件包含或者去掉部分 JSX
- 一些你会在 React 代码库里遇到的常用的条件语法快捷表达式

#### 概论

#### Conditonally returnning JSX

假设有一个 `PackingList` 组件，里面渲染多个 `Item` 组件，每个物品可标记为打包与否：

App.js

```
function Item({ name, isPacked }) {
  return <li className="item">{name}</li>;
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

```

![image-20230406143952322](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406143952322.png)

需要注意的是，有些 `Item` 组件的 `isPacked` 属性是被设为 `true` 而不是 `false`。你可以在那些满足 `isPacked={true}` 条件的物品旁加上一个勾选符号（✔）。

动手尝试一下，看看各种情况会出现什么不同的结果！

留意这里你是怎么使用 JavaScript 的 `if` 和 `return` 语句来写分支逻辑。在 React 中，是由 JavaScript 来处理控制流的（比如条件）。

##### 选择性地返回null

在一些情况下，你不想有任何东西进行渲染。比如，你不想显示已经打包好的物品。但一个组件必须返回一些东西。这种情况下，你可以直接返回 `null`。

```
if (isPacked) {
  return null;
}
return <li className="item">{name}</li>;
```

如果组件的 `isPacked` 属性为 `true`，那么它将只返回 `null`。否则，它将返回相应的 JSX 用来渲染。

App.js

```
function Item({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
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
```

![image-20230406144622337](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406144622337.png)

实际上，在组件里返回 `null` 并不常见，因为这样会让想使用它的开发者感觉奇怪。通常情况下，你可以在父组件里选择是否要渲染该组件。让我们接着往下看吧！

#### 选择性地包含JSX

在之前的例子里，你在组件内部控制哪些 JSX 树（如果有的话！）会返回。你可能已经发现了在渲染输出里会有一些重复的内容：

```
<li className="item">{name} ✔</li>
```

和下面的写法很像：

```
<li className="item">{name}</li>
```

两个条件分支都会返回 `<li className="item">...</li>`：

```
if (isPacked) {

  return <li className="item">{name} ✔</li>;

}

return <li className="item">{name}</li>;
```

虽然这些重复的内容没什么害处，但这样可能会导致你的代码更难维护。比如你想更改 `className`？你就需要修改两个地方！针对这种情况，你可以通过选择性地包含一小段 JSX 来让你的代码更加 [DRY](https://en.wikipedia.org/wiki/Don't_repeat_yourself)。

##### 三目运算符（?:)

JavaScript 有一种紧凑型语法来实现条件判断表达式——[条件运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) 又称“三目运算符”。

除了这样：

```
if (isPacked) {

  return <li className="item">{name} ✔</li>;

}

return <li className="item">{name}</li>;
```

你还可以这样实现：

```
return (

  <li className="item">

    {isPacked ? name + ' ✔' : name}

  </li>

);
```

你可以认为，*“如果 `isPacked` 为 true 时，则（`?`）渲染 `name + ' ✔'`，否则（`:`）渲染 `name`。”*

现在，假如你想将对应物品的文本放到另一个 HTML 标签里，比如用 `<del>` 来显示删除线。你可以添加更多的换行和括号，以便在各种情况下更好地去嵌套 JSX：

```
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' ✔'}
        </del>
      ) : (
        name
      )}
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

```

![image-20230406145545518](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406145545518.png)

对于简单的条件判断，这样的风格可以很好地实现，但需要适量使用。如果你的组件里有很多的嵌套式条件表达式，则需要考虑通过提取为子组件来简化这些嵌套表达式。在 React 里，标签也是你代码中的一部分，所以你可以使用变量和函数来整理一些复杂的表达式。

##### 与运算符（&&）

你会遇到的另一个常见的快捷表达式是 [JavaScript 与（`&&`）运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_AND#:~:text=The logical AND ( %26%26 ) operator,it returns a Boolean value.)。在 React 组件里，通常用在当条件成立时，你想渲染一些 JSX，**或者不做任何渲染**。使用 `&&`，你也可以实现仅当 `isPacked` 为 `true` 时，渲染勾选符号。

```
return (

  <li className="item">

    {name} {isPacked && '✔'}

  </li>

);
```

你可以认为，*“当 `isPacked` 为真值时，则（`&&`）渲染勾选符号，否则，不渲染。”*

下面为具体的例子：

```
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

```

![image-20230406145734451](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406145734451.png)

当 [JavaScript && 表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) 的左侧（我们的条件）为 `true` 时，它则返回其右侧的值（在我们的例子里是勾选符号）。但条件的结果是 `false`，则整个表达式会变成 `false`。在 JSX 里，React 会将 `false` 视为一个“空值”，就像 `null` 或者 `undefined`，这样 React 就不会在这里进行任何渲染。

##### 陷阱

**切勿将数字放在 `&&` 左侧.**

JavaScript 会自动将左侧的值转换成布尔类型以判断条件成立与否。然而，如果左侧是 `0`，整个表达式将变成左侧的值（`0`），React 此时则会渲染 `0` 而不是不进行渲染。

例如，一个常见的错误是 `messageCount && <p>New messages</p>`。其原本是想当 `messageCount` 为 0 的时候不进行渲染，但实际上却渲染了 `0`。

为了更正，可以将左侧的值改成布尔类型：`messageCount > 0 && <p>New messages</p>`。

#### 选择性地将 JSX 赋值给变量 

当这些快捷方式妨碍写普通代码时，可以考虑使用 `if` 语句和变量。因为你可以使用 [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) 进行重复赋值，所以一开始你可以将你想展示的（这里指的是物品的名字）作为默认值赋予给该变量。

```
let itemContent = name;
```

结合 `if` 语句，当 `isPacked` 为 `true` 时，将 JSX 表达式的值重新赋值给 `itemContent`：

```
if (isPacked) {

  itemContent = name + " ✔";

}
```

[大括号 - JavaScript 的“新世界”](https://zh-hans.reactjs.org/learn/javascript-in-jsx-with-curly-braces#using-curly-braces-a-window-into-the-javascript-world)。将变量用大括号嵌入在返回的 JSX 树中，来嵌套计算好的表达式与 JSX：

```
<li className="item">

  {itemContent}

</li>
```

这种方式是最冗长的，但也是最灵活的。下面是相关的例子：

App.js

```
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✔";
  }
  return (
    <li className="item">
      {itemContent}
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
```

跟之前的一样，这个方式不仅仅适用于文本，任意的 JSX 均适用：

app.js

```
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = (
      <del>
        {name + " ✔"}
      </del>
    );
  }
  return (
    <li className="item">
      {itemContent}
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

```

如果对 JavaScript 不熟悉，这些不同的风格一开始可能会让你感到不知所措。但是，学习这些将有助于你理解和写任何的 JavaScript 代码，而不仅仅是 React 组件。一开始可以选择一个你喜欢的来用，然后当你忘记其他的怎么用时，可以再翻阅这份参考资料。

#### Recap(摘要)

- 在 React，你可以使用 JavaScript 来控制分支逻辑。
- 你可以使用 `if` 语句来选择性地返回 JSX 表达式。
- 你可以选择性地将一些 JSX 赋值给变量，然后用大括号将其嵌入到其他 JSX 中。
- 在 JSX 中，`{cond ? <A /> : <B />}` 表示 *“当 `cond` 为真值时, 渲染 `<A />`，否则 `<B />`”*。
- 在 JSX 中，`{cond && <A />}` 表示 *“当 `cond` 为真值时, 渲染 `<A />`，否则不进行渲染”*。
- 快捷的表达式很常见，但如果你更倾向于使用 `if`，你也可以不使用它们，

#### Challenges

### 渲染列表

你可能经常需要通过 [JavaScript 的数组方法](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array#) 来操作数组中的数据，从而将一个数据集渲染成多个相似的组件。在这篇文章中，你将学会如何在 React 中使用 [`filter()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 筛选需要渲染的组件和使用 [`map()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 把数组转换成组件数组。

你将会学到

- 如何通过 JavaScript 的 `map()` 方法从数组中生成组件
- 如何通过 JavaScript 的 `filter()` 筛选需要渲染的组件
- 何时以及为何使用 React 中的 key

#### 从数组中渲染数据

这里我们有一个列表。

```
<ul>

  <li>凯瑟琳·约翰逊: 数学家</li>

  <li>马里奥·莫利纳: 化学家</li>

  <li>穆罕默德·阿卜杜勒·萨拉姆: 物理学家</li>

  <li>珀西·莱温·朱利亚: 化学家</li>

  <li>苏布拉马尼扬·钱德拉塞卡: 天体物理学家</li>

</ul>
```

可以看到，这些列表项之间唯一的区别就是其中的内容/数据。未来你可能会碰到很多类似的情况，在那些场景中，你想基于不同的数据渲染出相似的组件，比如评论列表或者个人资料的图库。在这样的场景下，可以把要用到的数据存入 JavaScript 对象或数组，然后用 [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 或 [`filter()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 这样的方法来渲染出一个组件列表。

这里给出一个由数组生成一系列列表项的简单示例：

1. 首先，把数据 **存储** 到数组中：

```
const people = [

  '凯瑟琳·约翰逊: 数学家',

  '马里奥·莫利纳: 化学家',

  '穆罕默德·阿卜杜勒·萨拉姆: 物理学家',

  '珀西·莱温·朱利亚: 化学家',

  '苏布拉马尼扬·钱德拉塞卡: 天体物理学家',

];
```

1. **遍历** `people` 这个数组中的每一项，并获得一个新的 JSX 节点数组 `listItems`：

```
const listItems = people.map(person => <li>{person}</li>);
```

1. 把 `listItems` 用 `<ul>` 包裹起来，然后 **返回** 它：

```
return <ul>{listItems}</ul>;
```

来看看运行的结果：

```
const people = [
  '凯瑟琳·约翰逊: 数学家',
  '马里奥·莫利纳: 化学家',
  '穆罕默德·阿卜杜勒·萨拉姆: 物理学家',
  '珀西·莱温·朱利亚: 化学家',
  '苏布拉马尼扬·钱德拉塞卡: 天体物理学家',
];

export default function List() {
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}

```

注意上面的沙盒可能会输出这样一个控制台错误：

![image-20230406151613769](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406151613769.png)

Warning: Each child in a list should have a unique “key” prop.



#### 对数组项进行过滤 

让我们把 `people` 数组变得更加结构化一点。

```
const people = [

  {

    id: 0,

    name: '凯瑟琳·约翰逊',

    profession: '数学家',

  },

  {

    id: 1,

    name: '马里奥·莫利纳',

    profession: '化学家',

  },

  {

    id: 2,

    name: '穆罕默德·阿卜杜勒·萨拉姆',

    profession: '物理学家',

  },

  {

    name: '珀西·莱温·朱利亚',

    profession: '化学家',

  },

  {

    name: '苏布拉马尼扬·钱德拉塞卡',

    profession: '天体物理学家',

  },

];
```

现在，假设你只想在屏幕上显示职业是 `化学家` 的人。那么你可以使用 JavaScript 的 `filter()` 方法来返回满足条件的项。这个方法会让数组的子项经过 “过滤器”（一个返回值为 `true` 或 `false` 的函数）的筛选，最终返回一个只包含满足条件的项的新数组。

既然你只想显示 `profession` 值是 `化学家` 的人，那么这里的 “过滤器” 函数应该长这样：`(person) => person.profession === '化学家'`。下面我们来看看该怎么把它们组合在一起：

1. 首先，**创建** 一个用来存化学家们的新数组 `chemists`，这里用到 `filter()` 方法过滤 `people` 数组来得到所有的化学家，过滤的条件应该是 `person.profession === '化学家'`：

```
const chemists = people.filter(person =>

  person.profession === '化学家'

);
```

1. 接下来 **用 map 方法遍历** `chemists` 数组:

```
const listItems = chemists.map(person =>

  <li>

     <img

       src={getImageUrl(person)}

       alt={person.name}

     />

     <p>

       <b>{person.name}:</b>

       {' ' + person.profession + ' '}

       因{person.accomplishment}而闻名世界

     </p>

  </li>

);
```

1. 最后，**返回** `listItems`：

```
return <ul>{listItems}</ul>;
```

App.js

```
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person =>
    person.profession === '化学家'
  );
  const listItems = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        因{person.accomplishment}而闻名世界
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}

```

data.js

```
export const people = [
  {
    id: 0,
    name: '凯瑟琳·约翰逊',
    profession: '数学家',
    accomplishment: '太空飞行相关数值的核算',
    imageId: 'MK3eW3A',
  },
  {
    id: 1,
    name: '马里奥·莫利纳',
    profession: '化学家',
    accomplishment: '北极臭氧空洞的发现',
    imageId: 'mynHUSa',
  },
  {
    id: 2,
    name: '穆罕默德·阿卜杜勒·萨拉姆',
    profession: '物理学家',
    accomplishment: '关于基本粒子间弱相互作用和电磁相互作用的统一理论',
    imageId: 'bE7W1ji',
  },
  {
    id: 3,
    name: '珀西·莱温·朱利亚',
    profession: '化学家',
    accomplishment: '开创性的可的松药物、类固醇和避孕药的研究',
    imageId: 'IOjWm71',
  },
  {
    id: 4,
    name: '苏布拉马尼扬·钱德拉塞卡',
    profession: '天体物理学家',
    accomplishment: '白矮星质量计算',
    imageId: 'lrWQx8l',
  },
];

```

utils.js

```
export function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}

```

因为箭头函数会隐式地返回位于 `=>` 之后的表达式，所以你可以省略 `return` 语句。

```
const listItems = chemists.map(person =>

  <li>...</li> // 隐式地返回！

);
```

不过，**如果你的 `=>` 后面跟了一对花括号 `{` ，那你必须使用 `return` 来指定返回值！**

```
const listItems = chemists.map(person => { // 花括号

  return <li>...</li>;

});
```

箭头函数 `=> {` 后面的部分被称为 [“块函数体”](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body)，块函数体支持多行代码的写法，但要用 `return` 语句才能指定返回值。假如你忘了写 `return`，那这个函数什么都不会返回！

#### 用 `key` 保持列表项的顺序 

如果把上面任何一个沙盒示例在新标签页打开，你就会发现控制台有这样一个报错

arning: Each child in a list should have a unique “key” prop.

这是因为你必须给数组中的每一项都指定一个 `key`————它可以是字符串或数字的形式，只要能唯一标识出各个数组项就行：

```
<li key={person.id}>...</li>
```

这些 key 会告诉 React，每个组件对应着数组里的哪一项，所以 React 可以把它们匹配起来。这在数组项进行移动（例如排序）、插入或删除等操作时非常重要。一个合适的 `key` 可以帮助 React 推断发生了什么，从而得以正确地更新 DOM 树。

用作 key 的值应该在数据中提前就准备好，而不是在运行时才随手生成：

app.js

```
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          因{person.accomplishment}而闻名世界
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}

```

data.js

```
export const people = [
  {
    id: 0, // 在 JSX 中作为 key 使用
    name: '凯瑟琳·约翰逊',
    profession: '数学家',
    accomplishment: '太空飞行相关数值的核算',
    imageId: 'MK3eW3A',
  },
  {
    id: 1, // 在 JSX 中作为 key 使用
    name: '马里奥·莫利纳',
    profession: '化学家',
    accomplishment: '北极臭氧空洞的发现',
    imageId: 'mynHUSa',
  },
  {
    id: 2, // 在 JSX 中作为 key 使用
    name: '穆罕默德·阿卜杜勒·萨拉姆',
    profession: '物理学家',
    accomplishment: '关于基本粒子间弱相互作用和电磁相互作用的统一理论',
    imageId: 'bE7W1ji',
  },
  {
    id: 3, // 在 JSX 中作为 key 使用
    name: '珀西·莱温·朱利亚',
    profession: '化学家',
    accomplishment: '开创性的可的松药物、类固醇和避孕药',
    imageId: 'IOjWm71',
  },
  {
    id: 4, // 在 JSX 中作为 key 使用
    name: '苏布拉马尼扬·钱德拉塞卡',
    profession: '天体物理学家',
    accomplishment: '白矮星质量计算',
    imageId: 'lrWQx8l',
  },
];

```

utils.js

```
export function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}
```

![image-20230406152502910](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406152502910.png)

##### 如何设定 `key` 值

不同来源的数据往往对应不同的 key 值获取方式：

- **来自数据库的数据：** 如果你的数据是从数据库中获取的，那你可以直接使用数据表中的主键，因为它们天然具有唯一性。
- **本地产生数据：** 如果你数据的产生和保存都在本地（例如笔记软件里的笔记），那么你可以使用一个自增计数器或者一个类似 [`uuid`](https://www.npmjs.com/package/uuid) 的库来生成 key。

##### key 需要满足的条件

- **key 值在兄弟节点之间必须是唯一的。** 不过不要求全局唯一，在不同的数组中可以使用相同的 key。
- **key 值不能改变**，否则就失去了使用 key 的意义！所以千万不要在渲染时动态地生成 key。

##### React 中为什么需要 key

设想一下，假如你桌面上的文件都没有文件名，取而代之的是，你需要通过文件的位置顺序来区分它们———第一个文件，第二个文件，以此类推。也许你也不是不能接受这种方式，可是一旦你删除了其中的一个文件，这种组织方式就会变得混乱无比。原来的第二个文件可能会变成第一个文件，第三个文件会成为第二个文件……

React 里需要 key 和文件夹里的文件需要有文件名的道理是类似的。它们（key 和文件名）都让我们可以从众多的兄弟元素中唯一标识出某一项（JSX 节点或文件）。而一个精心选择的 key 值所能提供的信息远远不止于这个元素在数组中的位置。即使元素的位置在渲染的过程中发生了改变，它提供的 `key` 值也能让 React 在整个生命周期中一直认得它。

![image-20230406152705921](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406152705921.png)

你可能会想直接把数组项的索引当作 key 值来用，实际上，如果你没有显式地指定 `key` 值，React 确实默认会这么做。但是数组项的顺序在插入、删除或者重新排序等操作中会发生改变，此时把索引顺序用作 key 值会产生一些微妙且令人困惑的 bug。

与之类似，请不要在运行过程中动态地产生 key，像是 `key={Math.random()}` 这种方式。这会导致每次重新渲染后的 key 值都不一样，从而使得所有的组件和 DOM 元素每次都要重新创建。这不仅会造成运行变慢的问题，更有可能导致用户输入的丢失。所以，使用能从给定数据中稳定取得的值才是明智的选择。

有一点需要注意，组件不会把 `key` 当作 props 的一部分。Key 的存在只对 React 本身起到提示作用。如果你的组件需要一个 ID，那么请把它作为一个单独的 prop 传给组件： `<Profile key={id} userId={id} />`。

#### 摘要

在这篇文章中，你学习了：

- 如何从组件中抽离出数据，并把它们放入像数组、对象这样的数据结构中。
- 如何使用 JavaScript 的 `map()` 方法来生成一组相似的组件。
- 如何使用 JavaScript 的 `filter()` 方法来筛选数组。
- 为何以及如何给集合中的每个组件设置一个 `key` 值：它使 React 能追踪这些组件，即便后者的位置或数据发生了变化。

### 保持组件纯粹

#### 概论：

部分 JavaScript 函数是 **纯粹** 的，这类函数通常被称为纯函数。纯函数仅执行计算操作，不做其他操作。你可以通过将组件按纯函数严格编写，以避免一些随着代码库的增长而出现的、令人困扰的 bug 以及不可预测的行为。但为了获得这些好处，你需要遵循一些规则。

#### 你将会学习到

- 纯函数是什么，以及它如何帮助你避免 bug
- 如何将数据变更与渲染过程分离，以保持组件的纯粹
- 如何使用严格模式发现组件中的错误

#### 纯函数：组件作为公式 

在计算机科学中（尤其是函数式编程的世界中），[纯函数](https://wikipedia.org/wiki/Pure_function) 通常具有如下特征：

- **只负责自己的任务**。它不会更改在该函数调用前，就已存在的对象或变量。
- **输入相同，则输出相同**。给定相同的输入，纯函数应总是返回相同的结果。

举个你非常熟悉的纯函数示例：数学中的公式。

考虑如下数学公式：y = 2x。

若 x = 2 则 y = 4。永远如此。

若 x = 3 则 y = 6。永远如此。

若 x = 3，那么 y 并不会因为时间或股市的影响，而有时等于 9 、 –1 或 2.5。

若 y = 2x 且 x = 3, 那么 y *永远* 等于 6.

我们使用 JavaScript 的函数实现，看起来将会是这样：

```
function double(number) {

  return 2 * number;

}
```

上述例子中，`double()` 就是一个 **纯函数**。如果你传入 `3` ，它将总是返回 `6` 。

React 便围绕着这个概念进行设计。**React 假设你编写的所有组件都是纯函数**。也就是说，对于相同的输入，你所编写的 React 组件必须总是返回相同的 JSX。

App.js

```
function Recipe({ drinkers }) {
  return (
    <ol>    
      <li>Boil {drinkers} cups of water.</li>
      <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

export default function App() {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  );
}

```

![image-20230406153310606](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406153310606.png)

当你给函数 `Recipe` 传入 `drinkers={2}` 参数时，它将返回包含 `2 cups of water` 的 JSX。永远如此。

而当你传入 `drinkers={4}` 时，它将返回包含 `4 cups of water` 的 JSX。永远如此。

就像数学公式一样。

你可以把你的组件当作食谱：如果你遵循它们，并且在烹饪过程中不引入新食材，你每次都会得到相同的菜肴。那这道 “菜肴” 就是组件用于 React [渲染](https://zh-hans.reactjs.org/learn/render-and-commit) 的 JSX。

![image-20230406153409445](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406153409445.png)

#### 副作用：（不符合）预期的后果 

React 的渲染过程必须自始至终是纯粹的。组件应该只 **返回** 它们的 JSX，而不 **改变** 在渲染前，就已存在的任何对象或变量 — 这将会使它们变得不纯粹！

以下是违反这一规则的组件示例：

App.js

```
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}

```

![image-20230406153513901](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406153513901.png)

该组件正在读写其外部声明的 `guest` 变量。这意味着 **多次调用这个组件会产生不同的 JSX**！并且，如果 **其他** 组件读取 `guest` ，它们也会产生不同的 JSX，其结果取决于它们何时被渲染！这是无法预测的。

回到我们的公式 y = 2x ，现在即使 x = 2 ，我们也不能相信 y = 4 。我们的测试可能会失败，我们的用户可能会感到困扰，飞机可能会从天空坠毁——你将看到这会引发多么扑朔迷离的 bugs！

你可以 [将 `guest` 作为 prop 传入](https://zh-hans.reactjs.org/learn/passing-props-to-a-component) 来修复此组件

```
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
```

![image-20230406154033414](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406154033414.png)

现在你的组件就是纯粹的，因为它返回的 JSX 只依赖于 `guest` prop。

一般来说，你不应该期望你的组件以任何特定的顺序被渲染。调用 y = 5x 和 y = 2x 的先后顺序并不重要：这两个公式相互独立。同样地，每个组件也应该“独立思考”，而不是在渲染过程中试图与其他组件协调，或者依赖于其他组件。渲染过程就像是一场学校考试：每个组件都应该自己计算 JSX！

##### 局部**突变** mutation：组件的小秘密 

上述示例的问题出在渲染过程中，组件改变了 **预先存在的** 变量的值。为了让它听起来更可怕一点，我们将这种现象称为 **突变（mutation）** 。纯函数不会改变函数作用域外的变量、或在函数调用前创建的对象 — 这会使函数变得不纯粹！

但是，**你完全可以在渲染时更改你 \*刚刚\* 创建的变量和对象**。在本示例中，你创建一个 `[]` 数组，将其分配给一个 `cups` 变量，然后 `push` 一打 cup 进去：

```
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaGathering() {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}

```

![image-20230406154232993](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406154232993.png)

如果 `cups` 变量或 `[]` 数组是在 `TeaGathering` 函数之外创建的，这将是一个很大的问题！因为如果那样的话，当你调用数组的 push 方法时，就会更改 **预先存在的** 对象。

但是，这里不会有影响，因为每次渲染时，你都是在 `TeaGathering` 函数内部创建的它们。`TeaGathering` 之外的代码并不会知道发生了什么。这就被称为 **“局部 mutation”** — 如同藏在组件里的小秘密。

#### 哪些地方 **可能** 引发副作用

函数式编程在很大程度上依赖于纯函数，但 **某些事物** 在特定情况下不得不发生改变。这是编程的要义！这些变动包括更新屏幕、启动动画、更改数据等，它们被称为 **副作用**。它们是 **“额外”** 发生的事情，与渲染过程无关。

在 React 中，**副作用通常属于 [事件处理程序](https://zh-hans.reactjs.org/learn/responding-to-events)**。事件处理程序是 React 在你执行某些操作（如单击按钮）时运行的函数。即使事件处理程序是在你的组件 **内部** 定义的，它们也不会在渲染期间运行！ **因此事件处理程序无需是纯函数**。

如果你用尽一切办法，仍无法为副作用找到合适的事件处理程序，你还可以调用组件中的 [`useEffect`](https://zh-hans.reactjs.org/reference/react/useEffect) 方法将其附加到返回的 JSX 中。这会告诉 React 在渲染结束后执行它。**然而，这种方法应该是你最后的手段**。

如果可能，请尝试仅通过渲染过程来表达你的逻辑。你会惊讶于这能带给你多少好处！

#### Recap总结：

- 个组件必须是纯粹的，就意味着：
  - **只负责自己的任务。** 不应更改渲染前存在的任何对象或变量。
  - **输入相同，则输出相同。** 给定相同的输入，组件应该总是返回相同的 JSX。
- 渲染随时可能发生，因此组件不应依赖于彼此的渲染顺序。
- 你不应该改变组件用于渲染的任何输入。这包括 props、state 和 context。通过 [“设置” state](https://zh-hans.reactjs.org/learn/state-a-components-memory)) 来更新界面，而不要改变预先存在的对象。
- 努力在你返回的 JSX 中表达你的组件逻辑。当你需要“改变事物”时，你通常希望在事件处理程序中进行。作为最后的手段，你可以使用 `useEffect`。
- 编写纯函数需要一些练习，但它充分释放了 React 范式的能力。

## 添加交互

### 你将会学习到

- 编写事件处理函数的不同方法
- 如何从父组件传递事件处理逻辑
- 事件如何传播以及如何停止它们

### 响应事件

#### 概论

使用 React 可以在 JSX 中添加 **事件处理函数**。其中事件处理函数为自定义函数，它将在响应交互（如点击、悬停、表单输入框获得焦点等）时触发。

#### 添加事件处理函数 

如需添加一个事件处理函数，你需要先定义一个函数，然后 [将其作为 prop 传入](https://zh-hans.reactjs.org/learn/passing-props-to-a-component) 合适的 JSX 标签。例如，这里有一个没绑定任何事件的按钮：

App.js

```
export default function Button() {
  return (
    <button>
      未绑定任何事件
    </button>
  );
}
```

按照如下三个步骤，即可让它在用户点击时显示消息：

1. 在 `Button` 组件 *内部* 声明一个名为 `handleClick` 的函数。

2. 实现函数内部的逻辑（使用 `alert` 来显示消息）。

3. 添加 `onClick={handleClick}` 到 `<button>` JSX 中。

   ```
   export default function Button() {
     function handleClick() {
       alert('你点击了我！');
     }
   
     return (
       <button onClick={handleClick}>
         点我
       </button>
     );
   }
   ```

   

![image-20230406161235718](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406161235718.png)

你可以定义 `handleClick` 函数然后 [将其作为 prop 传入](https://zh-hans.reactjs.org/learn/passing-props-to-a-component) `<button>`。其中 `handleClick` 是一个 **事件处理函数** 。事件处理函数有如下特点:

- 通常在你的组件 *内部* 定义。
- 名称以 `handle` 开头，后跟事件名称。

按照惯例，通常将事件处理程序命名为 `handle`，后接事件名。你会经常看到 `onClick={handleClick}`，`onMouseEnter={handleMouseEnter}` 等。

或者，你也可以在 JSX 中定义一个内联的事件处理函数：

```
<button onClick={function handleClick() {

  alert('你点击了我！');

}}>
```

或者，直接使用更为简洁箭头函数：

```
<button onClick={() => {

  alert('你点击了我！');

}}>
```

以上所有方式都是等效的。当函数体较短时，内联事件处理函数会很方便。

##### 陷阱

传递给事件处理函数的函数应直接传递，而非调用。例如：

| 传递一个函数（正确）             | 调用一个函数（错误）               |
| -------------------------------- | ---------------------------------- |
| `<button onClick={handleClick}>` | `<button onClick={handleClick()}>` |

区别很微妙。在第一个示例中，`handleClick` 函数作为 `onClick` 事件处理函数传递。这会让 React 记住它，并且只在用户点击按钮时调用你的函数。

在第二个示例中，`handleClick()` 中最后的 `()` 会在 [渲染](https://zh-hans.reactjs.org/learn/render-and-commit) 过程中 *立即* 触发函数，即使没有任何点击。这是因为在 [JSX `{` 和 `}`](https://zh-hans.reactjs.org/learn/javascript-in-jsx-with-curly-braces) 之间的 JavaScript 会立即执行。

当你编写内联代码时，同样的陷阱可能会以不同的方式出现：

| 传递一个函数（正确）                    | 调用一个函数（错误）              |
| --------------------------------------- | --------------------------------- |
| `<button onClick={() => alert('...')}>` | `<button onClick={alert('...')}>` |

如果按如下方式传递内联代码，并不会在点击时触发，而是会在每次组件渲染时触发：

```
// 这个 alert 在组件渲染时触发，而不是点击时触发！

<button onClick={alert('你点击了我！')}>
```

如果你想要定义内联事件处理函数，请将其包装在匿名函数中，如下所示：

```
<button onClick={() => alert('你点击了我！')}>
```

这里创建了一个稍后调用的函数，而不会在每次渲染时执行其内部代码。

在这两种情况下，你都应该传递一个函数：

- `<button onClick={handleClick}>` 传递了 `handleClick` 函数。
- `<button onClick={() => alert('...')}>` 传递了 `() => alert('...')` 函数。

> [了解更多箭头函数的信息](https://javascript.info/arrow-functions-basics)。

#### 在事件处理函数中读取 props 

由于事件处理函数声明于组件内部，因此它们可以直接访问组件的 props。示例中的按钮，当点击时会弹出带有 `message` prop 的 alert：

app.js

```
function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="正在播放！">
        播放电影
      </AlertButton>
      <AlertButton message="正在上传！">
        上传图片
      </AlertButton>
    </div>
  );
}

```

此处有两个按钮，会展示不同的消息。你可以尝试更改传递给它们的消息。

#### 将事件处理函数作为props传递

通常，我们会在父组件中定义子组件的事件处理函数。比如：置于不同位置的 `Button` 组件，可能最终执行的功能也不同 —— 也许是播放电影，也许是上传图片。

为此，将组件从父组件接收的 prop 作为事件处理函数传递，如下所示：

app.js

```
function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`正在播放 ${movieName}！`);
  }

  return (
    <Button onClick={handlePlayClick}>
      播放 "{movieName}"
    </Button>
  );
}

function UploadButton() {
  return (
    <Button onClick={() => alert('正在上传！')}>
      上传图片
    </Button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="魔女宅急便" />
      <UploadButton />
    </div>
  );
}

```

示例中，`Toolbar` 组件渲染了一个 `PlayButton` 组件和 `UploadButton` 组件：

- `PlayButton` 将 `handlePlayClick` 作为 `onClick` prop 传入 `Button` 组件内部。
- `UploadButton` 将 `() => alert('正在上传！')` 作为 `onClick` prop 传入 `Button` 组件内部。

最后，你的 `Button` 组件接收一个名为 `onClick` 的 prop。它直接将这个 prop 以 `onClick={onClick}` 方式传递给浏览器内置的 `<button>`。当点击按钮时，React 会调用传入的函数。

如果你遵循某个 [设计系统](https://uxdesign.cc/everything-you-need-to-know-about-design-systems-54b109851969) 时，按钮之类的组件通常会包含样式，但不会指定行为。而 `PlayButton` 和 `UploadButton` 之类的组件则会向下传递事件处理函数。

#### 命名事件处理函数prop

内置组件（`<button>` 和 `<div>`）仅支持 [浏览器事件名称](https://zh-hans.reactjs.org/reference/react-dom/components/common#common-props)，例如 `onClick`。但是，当你构建自己的组件时，你可以按你个人喜好命名事件处理函数的 prop。

> 按照惯例，事件处理函数 props 应该以 `on` 开头，后跟一个大写字母。

例如，`Button` 组件的 `onClick` prop 本来也可以被命名为 `onSmash`：

```
function Button({ onSmash, children }) {
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <Button onSmash={() => alert('正在播放！')}>
        播放电影
      </Button>
      <Button onSmash={() => alert('正在上传！')}>
        上传图片
      </Button>
    </div>
  );
}

```

上述示例中，`<button onClick={onSmash}>` 代表浏览器内置的 `<button>`（小写）仍然需要使用 `onClick` prop，而自定义的 `Button` 组件接收到的 prop 名称可由你决定！

当你的组件支持多种交互时，你可以根据不同的应用程序命名事件处理函数 prop。例如，一个 `Toolbar` 组件接收 `onPlayMovie` 和 `onUploadImage` 两个事件处理函数：

App.js

```
export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert('正在播放！')}
      onUploadImage={() => alert('正在上传！')}
    />
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>
        播放电影
      </Button>
      <Button onClick={onUploadImage}>
        上传图片
      </Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

```

请注意，`App` 组件并不需要知道 `Toolbar` 将会对 `onPlayMovie` 和 `onUploadImage` 做 **什么** 。上述示例是 `Toolbar` 的实现细节。其中，`Toolbar` 将它们作为 `onClick` 处理函数传递给了 `Button` 组件，其实还可以通过键盘快捷键来触发它们。根据应用程序特定的交互方式（如 `onPlayMovie`）来命名 prop ，可以让你灵活地更改以后使用它们的方式。

#### 事件传播

事件处理函数还将捕获任何来自子组件的事件。通常，我们会说事件会沿着树向上“冒泡”或“传播”：它从事件发生的地方开始，然后沿着树向上传播。

下面这个 `<div>` 包含两个按钮。`<div>` **和** 每个按钮都有自己的 `onClick` 处理函数。你认为点击按钮时会触发哪些处理函数？

App.js

```
export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('你点击了 toolbar ！');
    }}>
      <button onClick={() => alert('正在播放！')}>
        播放电影
      </button>
      <button onClick={() => alert('正在上传！')}>
        上传图片
      </button>
    </div>
  );
}

```

如果你点击任一按钮，它自身的 `onClick` 将首先执行，然后父级 `<div>` 的 `onClick` 会接着执行。因此会出现两条消息。如果你点击 toolbar 本身，将只有父级 `<div>` 的 `onClick` 会执行。

![image-20230406164321258](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406164321258.png)

如果你点击任一按钮，它自身的 `onClick` 将首先执行，然后父级 `<div>` 的 `onClick` 会接着执行。因此会出现两条消息。如果你点击 toolbar 本身，将只有父级 `<div>` 的 `onClick` 会执行。

##### 陷阱

在 React 中所有事件都会传播，除了 `onScroll`，它仅适用于你附加到的 JSX 标签。

##### 阻止传播

事件处理函数接收一个 **事件对象** 作为唯一的参数。按照惯例，它通常被称为 `e` ，代表 “event”（事件）。你可以使用此对象来读取有关事件的信息。

这个事件对象还允许你阻止传播。如果你想阻止一个事件到达父组件，你需要像下面 `Button` 组件那样调用 `e.stopPropagation()` ：

App.js

```
function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}
export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('你点击了 toolbar ！');
    }}>
      <Button onClick={() => alert('正在播放！')}>
        播放电影
      </Button>
      <Button onClick={() => alert('正在上传！')}>
        上传图片
      </Button>
    </div>
  );
}
```

![image-20230406164541355](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406164541355.png)

当你点击按钮时：

1. React 调用了传递给 `<button>` 的 `onClick` 处理函数。

2. 定义在

   ```
   Button
   ```

   中的处理函数执行了如下操作：

   - 调用 `e.stopPropagation()`，阻止事件进一步冒泡。
   - 调用 `onClick` 函数，它是从 `Toolbar` 组件传递过来的 prop。

3. 在 `Toolbar` 组件中定义的函数，显示按钮对应的 alert。

4. 由于传播被阻止，父级 `<div>` 的 `onClick` 处理函数不会执行。

由于调用了 `e.stopPropagation()`，点击按钮现在将只显示一个 alert（来自 `<button>`），而并非两个（分别来自 `<button>` 和父级 toolbar `<div>`）。点击按钮与点击周围的 toolbar 不同，因此阻止传播对这个 UI 是有意义的。

##### 传递处理函数作为事件传播的替代方案 

注意，此处的点击事件处理函数先执行了一行代码，**然后**调用了父组件传递的 `onClick` prop：

```
function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}
```

你也可以在调用父元素 `onClick` 函数之前，向这个处理函数添加更多代码。此模式是事件传播的另一种 *替代方案* 。它让子组件处理事件，同时也让父组件指定一些额外的行为。与事件传播不同，它并非自动。但使用这种模式的好处是你可以清楚地追踪因某个事件的触发而执行的整条代码链。

如果你依赖于事件传播，而且很难追踪哪些处理程序在执行，及其执行的原因，可以尝试这种方法

##### 阻止默认行为

某些浏览器事件具有与事件相关联的默认行为。例如，点击 `<form>` 表单内部的按钮会触发表单提交事件，默认情况下将重新加载整个页面：

App.js

```
export default function Signup() {
  return (
    <form onSubmit={() => alert('提交表单！')}>
      <input />
      <button>发送</button>
    </form>
  );
}

```

你可以调用事件对象中的 `e.preventDefault()` 来阻止这种情况发生：

App.js

```
export default function Signup() {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert('提交表单！');
    }}>
      <input />
      <button>发送</button>
    </form>
  );
}
```

不要混淆 `e.stopPropagation()` 和 `e.preventDefault()`。它们都很有用，但二者并不相关：

- [`e.stopPropagation()`](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation) 阻止触发绑定在外层标签上的事件处理函数。
- [`e.preventDefault()`](https://developer.mozilla.org/docs/Web/API/Event/preventDefault) 阻止少数事件的默认浏览器行为。

#### 事件处理函数可以包含副作用吗？

当然可以！事件处理函数是执行副作用的最佳位置。

与渲染函数不同，事件处理函数不需要是 [纯函数](https://zh-hans.reactjs.org/learn/keeping-components-pure)，因此它是用来 *更改* 某些值的绝佳位置。例如，更改输入框的值以响应键入，或者更改列表以响应按钮的触发。但是，为了更改某些信息，你首先需要某种方式存储它。在 React 中，这是通过 [state（组件的记忆）](https://zh-hans.reactjs.org/learn/state-a-components-memory) 来完成的。你将在下一章节了解所有相关信息。

#### 摘要

- 你可以通过将函数作为 prop 传递给元素如 `<button>` 来处理事件。
- 必须传递事件处理函数，**而非函数调用！** `onClick={handleClick}` ，不是 `onClick={handleClick()}`。
- 你可以单独或者内联定义事件处理函数。
- 事件处理函数在组件内部定义，所以它们可以访问 props。
- 你可以在父组件中定义一个事件处理函数，并将其作为 prop 传递给子组件。
- 你可以根据特定于应用程序的名称定义事件处理函数的 prop。
- 事件会向上传播。通过事件的第一个参数调用 `e.stopPropagation()` 来防止这种情况。
- 事件可能具有不需要的浏览器默认行为。调用 `e.preventDefault()` 来阻止这种情况。
- 从子组件显式调用事件处理函数 prop 是事件传播的另一种优秀替代方案。

### state：组件的记忆

组件通常需要根据交互更改屏幕上显示的内容。输入表单应该更新输入字段，单击轮播图上的“下一个”应该更改显示的图片，单击“购买”应该将商品放入购物车。组件需要“记住”某些东西：当前输入值、当前图片、购物车。在 React 中，这种组件特有的记忆被称为 **state**。

#### 概要

#### 你将会学习到

- 如何使用 [`useState`](https://zh-hans.reactjs.org/reference/usestate) Hook 添加 state 变量
- `useState` Hook 返回哪一对值
- 如何添加多个 state 变量
- 为什么 state 被称作是局部的

#### 当普通的变量无法满足时 

以下是一个渲染雕塑图片的组件。点击 “Next” 按钮应该显示下一个雕塑并将 `index` 更改为 `1`，再次点击又更改为 `2`，以此类推。但这个组件现在**不起作用**（你可以试一试！）

App.js

```
import { sculptureList } from './data.js';

export default function Gallery() {
  let index = 0;

  function handleClick() {
    index = index + 1;
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}

```

data.js

```
export const sculptureList = [{
  name: 'Homenaje a la Neurocirugía',
  artist: 'Marta Colvin Andrade',
  description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
  url: 'https://i.imgur.com/Mx7dA2Y.jpg',
  alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'  
}, {
  name: 'Floralis Genérica',
  artist: 'Eduardo Catalano',
  description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
  url: 'https://i.imgur.com/ZF6s192m.jpg',
  alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
}, {
  name: 'Eternal Presence',
  artist: 'John Woodrow Wilson',
  description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
  url: 'https://i.imgur.com/aTtVpES.jpg',
  alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
}, {
  name: 'Moai',
  artist: 'Unknown Artist',
  description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
  url: 'https://i.imgur.com/RCwLEoQm.jpg',
  alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
}, {
  name: 'Blue Nana',
  artist: 'Niki de Saint Phalle',
  description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
  url: 'https://i.imgur.com/Sd1AgUOm.jpg',
  alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
}, {
  name: 'Ultimate Form',
  artist: 'Barbara Hepworth',
  description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
  url: 'https://i.imgur.com/2heNQDcm.jpg',
  alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
}, {
  name: 'Cavaliere',
  artist: 'Lamidi Olonade Fakeye',
  description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
  url: 'https://i.imgur.com/wIdGuZwm.png',
  alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
}, {
  name: 'Big Bellies',
  artist: 'Alina Szapocznikow',
  description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
  url: 'https://i.imgur.com/AlHTAdDm.jpg',
  alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
}, {
  name: 'Terracotta Army',
  artist: 'Unknown Artist',
  description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
  url: 'https://i.imgur.com/HMFmH6m.jpg',
  alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
}, {
  name: 'Lunar Landscape',
  artist: 'Louise Nevelson',
  description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
  url: 'https://i.imgur.com/rN7hY6om.jpg',
  alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
}, {
  name: 'Aureole',
  artist: 'Ranjani Shettar',
  description: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
  url: 'https://i.imgur.com/okTpbHhm.jpg',
  alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'
}, {
  name: 'Hippos',
  artist: 'Taipei Zoo',
  description: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
  url: 'https://i.imgur.com/6o5Vuyu.jpg',
  alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'
}];

```

![image-20230406204838349](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406204838349.png)

`handleClick()` 事件处理函数正在更新局部变量 `index`。但存在两个原因使得变化不可见：

1. **局部变量无法在多次渲染中持久保存。** 当 React 再次渲染这个组件时，它会从头开始渲染——不会考虑之前对局部变量的任何更改。
2. **更改局部变量不会触发渲染。** React 没有意识到它需要使用新数据再次渲染组件。

要使用新数据更新组件，需要做两件事：

1. **保留** 渲染之间的数据。
2. **触发** React 使用新数据渲染组件（重新渲染）。

[`useState`](https://zh-hans.reactjs.org/reference/usestate) Hook 提供了这两个功能：

1. **State 变量** 用于保存渲染间的数据。
2. **State setter 函数** 更新变量并触发 React 再次渲染组件

#### 添加一个 state 变量 

要添加 state 变量，先从文件顶部的 React 中导入 `useState`：

```
import { useState } from 'react';
```

然后，替换这一行：

```
let index = 0;
```

将其修改为

```
const [index, setIndex] = useState(0);
```

`index` 是一个 state 变量，`setIndex` 是对应的 setter 函数。

> 这里的 `[` 和 `]` 语法称为[数组解构](https://zh-hans.reactjs.org/learn/a-javascript-refresher#array-destructuring)，它允许你从数组中读取值。 `useState` 返回的数组总是正好有两项。

以下展示了它们在 `handleClick()` 中是如何共同起作用的：

```
function handleClick() {

  setIndex(index + 1);

}
```

现在点击 “Next” 按钮切换当前雕塑：

App.js

```
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}

```

data.js

```
export const sculptureList = [{
  name: 'Homenaje a la Neurocirugía',
  artist: 'Marta Colvin Andrade',
  description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
  url: 'https://i.imgur.com/Mx7dA2Y.jpg',
  alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'  
}, {
  name: 'Floralis Genérica',
  artist: 'Eduardo Catalano',
  description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
  url: 'https://i.imgur.com/ZF6s192m.jpg',
  alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
}, {
  name: 'Eternal Presence',
  artist: 'John Woodrow Wilson',
  description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
  url: 'https://i.imgur.com/aTtVpES.jpg',
  alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
}, {
  name: 'Moai',
  artist: 'Unknown Artist',
  description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
  url: 'https://i.imgur.com/RCwLEoQm.jpg',
  alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
}, {
  name: 'Blue Nana',
  artist: 'Niki de Saint Phalle',
  description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
  url: 'https://i.imgur.com/Sd1AgUOm.jpg',
  alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
}, {
  name: 'Ultimate Form',
  artist: 'Barbara Hepworth',
  description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
  url: 'https://i.imgur.com/2heNQDcm.jpg',
  alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
}, {
  name: 'Cavaliere',
  artist: 'Lamidi Olonade Fakeye',
  description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
  url: 'https://i.imgur.com/wIdGuZwm.png',
  alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
}, {
  name: 'Big Bellies',
  artist: 'Alina Szapocznikow',
  description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
  url: 'https://i.imgur.com/AlHTAdDm.jpg',
  alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
}, {
  name: 'Terracotta Army',
  artist: 'Unknown Artist',
  description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
  url: 'https://i.imgur.com/HMFmH6m.jpg',
  alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
}, {
  name: 'Lunar Landscape',
  artist: 'Louise Nevelson',
  description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
  url: 'https://i.imgur.com/rN7hY6om.jpg',
  alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
}, {
  name: 'Aureole',
  artist: 'Ranjani Shettar',
  description: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
  url: 'https://i.imgur.com/okTpbHhm.jpg',
  alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'
}, {
  name: 'Hippos',
  artist: 'Taipei Zoo',
  description: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
  url: 'https://i.imgur.com/6o5Vuyu.jpg',
  alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'
}];

```

![image-20230406205412704](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406205412704.png)

##### 遇见你的第一个 Hook 

在 React 中，`useState` 以及任何其他以“`use`”开头的函数都被称为 **Hook**。

Hook 是特殊的函数，只在 React [渲染](https://zh-hans.reactjs.org/learn/render-and-commit#step-1-trigger-a-render)时有效（我们将在下一节详细介绍）。它们能让你 “hook” 到不同的 React 特性中去。

State 只是这些特性中的一个，你之后还会遇到其他 Hook。

##### 陷阱

**Hooks ——以 `use` 开头的函数——只能在组件或[自定义 Hook](https://zh-hans.reactjs.org/learn/reusing-logic-with-custom-hooks) 的最顶层调用。** 你不能在条件语句、循环语句或其他嵌套函数内调用 Hook。Hook 是函数，但将它们视为关于组件需求的无条件声明会很有帮助。在组件顶部 “use” React 特性，类似于在文件顶部“导入”模块。

##### 剖析 `useState`

当你调用 [`useState`](https://zh-hans.reactjs.org/reference/usestate) 时，你是在告诉 React 你想让这个组件记住一些东西：

```
const [index, setIndex] = useState(0);
```

在这个例子里，你希望 React 记住 `index`。

#### 注意

惯例是将这对返回值命名为 `const [thing, setThing]`。你也可以将其命名为任何你喜欢的名称，但遵照约定俗成能使跨项目合作更易理解。

`useState` 的唯一参数是 state 变量的**初始值**。在这个例子中，`index` 的初始值被`useState(0)`设置为 `0`。

每次你的组件渲染时，`useState` 都会给你一个包含两个值的数组：

1. **state 变量** (`index`) 会保存上次渲染的值。
2. **state setter 函数** (`setIndex`) 可以更新 state 变量并触发 React 重新渲染组件。

以下是实际发生的情况：

```
const [index, setIndex] = useState(0);
```

1. **组件进行第一次渲染。** 因为你将 `0` 作为 `index` 的初始值传递给 `useState`，它将返回 `[0, setIndex]`。 React 记住 `0` 是最新的 state 值。
2. **你更新了 state**。当用户点击按钮时，它会调用 `setIndex(index + 1)`。 `index` 是 `0`，所以它是 `setIndex(1)`。这告诉 React 现在记住 `index` 是 `1` 并触发下一次渲染。
3. **组件进行第二次渲染**。React 仍然看到 `useState(0)`，但是因为 React *记住* 了你将 `index` 设置为了 `1`，它将返回 `[1, setIndex]`。
4. 以此类推！

#### 赋予一个组件多个 state 变量

你可以在一个组件中拥有任意多种类型的 state 变量。该组件有两个 state 变量，一个数字 `index` 和一个布尔值 `showMore`，点击 “Show Details” 会改变 `showMore` 的值：

App.js

```
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}

```

data.js

```
export const sculptureList = [{
  name: 'Homenaje a la Neurocirugía',
  artist: 'Marta Colvin Andrade',
  description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
  url: 'https://i.imgur.com/Mx7dA2Y.jpg',
  alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'  
}, {
  name: 'Floralis Genérica',
  artist: 'Eduardo Catalano',
  description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
  url: 'https://i.imgur.com/ZF6s192m.jpg',
  alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
}, {
  name: 'Eternal Presence',
  artist: 'John Woodrow Wilson',
  description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
  url: 'https://i.imgur.com/aTtVpES.jpg',
  alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
}, {
  name: 'Moai',
  artist: 'Unknown Artist',
  description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
  url: 'https://i.imgur.com/RCwLEoQm.jpg',
  alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
}, {
  name: 'Blue Nana',
  artist: 'Niki de Saint Phalle',
  description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
  url: 'https://i.imgur.com/Sd1AgUOm.jpg',
  alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
}, {
  name: 'Ultimate Form',
  artist: 'Barbara Hepworth',
  description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
  url: 'https://i.imgur.com/2heNQDcm.jpg',
  alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
}, {
  name: 'Cavaliere',
  artist: 'Lamidi Olonade Fakeye',
  description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
  url: 'https://i.imgur.com/wIdGuZwm.png',
  alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
}, {
  name: 'Big Bellies',
  artist: 'Alina Szapocznikow',
  description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
  url: 'https://i.imgur.com/AlHTAdDm.jpg',
  alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
}, {
  name: 'Terracotta Army',
  artist: 'Unknown Artist',
  description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
  url: 'https://i.imgur.com/HMFmH6m.jpg',
  alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
}, {
  name: 'Lunar Landscape',
  artist: 'Louise Nevelson',
  description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
  url: 'https://i.imgur.com/rN7hY6om.jpg',
  alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
}, {
  name: 'Aureole',
  artist: 'Ranjani Shettar',
  description: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
  url: 'https://i.imgur.com/okTpbHhm.jpg',
  alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'
}, {
  name: 'Hippos',
  artist: 'Taipei Zoo',
  description: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
  url: 'https://i.imgur.com/6o5Vuyu.jpg',
  alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'
}];

```

![image-20230406210043178](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406210043178.png)

如果它们不相关，那么存在多个 state 变量是一个好主意，例如本例中的 `index` 和 `showMore`。但是，如果你发现经常同时更改两个 state 变量，那么最好将它们合并为一个。例如，如果你有一个包含多个字段的表单，那么有一个值为对象的 state 变量比每个字段对应一个 state 变量更方便。 [选择 state 结构](https://zh-hans.reactjs.org/learn/choosing-the-state-structure)在这方面有更多提示。

#### State 是隔离且私有的

State 是屏幕上组件实例内部的状态。换句话说，**如果你渲染同一个组件两次，每个副本都会有完全隔离的 state**！改变其中一个不会影响另一个。

在这个例子中，之前的 `Gallery` 组件以同样的逻辑被渲染了两次。试着点击每个画廊内的按钮。你会注意到它们的 state 是相互独立的：

App.js

```
import Gallery from './Gallery.js';

export default function Page() {
  return (
    <div className="Page">
      <Gallery />
      <Gallery />
    </div>
  );
}


```

Gallery.js

```
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <section>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </section>
  );
}

```

data.js

```
export const sculptureList = [{
  name: 'Homenaje a la Neurocirugía',
  artist: 'Marta Colvin Andrade',
  description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
  url: 'https://i.imgur.com/Mx7dA2Y.jpg',
  alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'  
}, {
  name: 'Floralis Genérica',
  artist: 'Eduardo Catalano',
  description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
  url: 'https://i.imgur.com/ZF6s192m.jpg',
  alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
}, {
  name: 'Eternal Presence',
  artist: 'John Woodrow Wilson',
  description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
  url: 'https://i.imgur.com/aTtVpES.jpg',
  alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
}, {
  name: 'Moai',
  artist: 'Unknown Artist',
  description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
  url: 'https://i.imgur.com/RCwLEoQm.jpg',
  alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
}, {
  name: 'Blue Nana',
  artist: 'Niki de Saint Phalle',
  description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
  url: 'https://i.imgur.com/Sd1AgUOm.jpg',
  alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
}, {
  name: 'Ultimate Form',
  artist: 'Barbara Hepworth',
  description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
  url: 'https://i.imgur.com/2heNQDcm.jpg',
  alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
}, {
  name: 'Cavaliere',
  artist: 'Lamidi Olonade Fakeye',
  description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
  url: 'https://i.imgur.com/wIdGuZwm.png',
  alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
}, {
  name: 'Big Bellies',
  artist: 'Alina Szapocznikow',
  description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
  url: 'https://i.imgur.com/AlHTAdDm.jpg',
  alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
}, {
  name: 'Terracotta Army',
  artist: 'Unknown Artist',
  description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
  url: 'https://i.imgur.com/HMFmH6m.jpg',
  alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
}, {
  name: 'Lunar Landscape',
  artist: 'Louise Nevelson',
  description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
  url: 'https://i.imgur.com/rN7hY6om.jpg',
  alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
}, {
  name: 'Aureole',
  artist: 'Ranjani Shettar',
  description: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
  url: 'https://i.imgur.com/okTpbHhm.jpg',
  alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'
}, {
  name: 'Hippos',
  artist: 'Taipei Zoo',
  description: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
  url: 'https://i.imgur.com/6o5Vuyu.jpg',
  alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'
}];
```

![image-20230406210315347](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20230406210315347.png)

这就是 state 与声明在模块顶部的普通变量不同的原因。 State 不依赖于特定的函数调用或在代码中的位置，它的作用域“只限于”屏幕上的某块特定区域。你渲染了两个 `<Gallery />` 组件，所以它们的 state 是分别存储的。

还要注意 `Page` 组件“不知道”关于 `Gallery` state 的任何信息，甚至不知道它是否有任何 state。与 props 不同，**state 完全私有于声明它的组件**。父组件无法更改它。这使你可以向任何组件添加或删除 state，而不会影响其他组件。

如果你希望两个画廊保持其 states 同步怎么办？在 React 中执行此操作的正确方法是从子组件中*删除* state 并将其添加到离它们最近的共享父组件中。接下来的几节将专注于组织单个组件的 state，但我们将在[组件间共享 state](https://zh-hans.reactjs.org/learn/sharing-state-between-components) 中回到这个主题。



#### 摘要

- 当一个组件需要在多次渲染间“记住”某些信息时使用 state 变量。
- State 变量是通过调用 `useState` Hook 来声明的。
- Hook 是以 `use` 开头的特殊函数。它们能让你 “hook” 到像 state 这样的 React 特性中。
- Hook 可能会让你想起 import：它们需要在非条件语句中调用。调用 Hook 时，包括 `useState`，仅在组件或另一个 Hook 的顶层被调用才有效。
- `useState` Hook 返回一对值：当前 state 和更新它的函数。
- 你可以拥有多个 state 变量。在内部，React 按顺序匹配它们。
- State 是组件私有的。如果你在两个地方渲染它，则每个副本都有独属于自己的 state。

### 渲染和提交

### state如同一张快照

### 把一系列state更新加入队列

### Updating Objects in State

### 更新state中的数组

## 状态管理

## 应急方案

# 补充：

## ecode

### 组件库

```
组件库地址：
https://cloudstore.e-cology.cn/#/pc/doc/common-index
```

```
组件库包含自研的组件，以Wea开头，以及antd的组件
```

```
引入方式
const {Button} = antd;
const {WeaDialog} = ecCom
```

#### 引入组件语法

### React方式

```
//  React方式
import React from "react";

import {Button} from 'antd';
import {WeaInput} from 'ecCom';

export default NewCom; //模块化导出
import NewCom from './NewCom'; //模块化导入

```

### ecode

```
//  ecode方式
const {Button} = antd; //antd全局存在
const {WeaInput} = ecCom; //ecCom全局存在

ecodeSDK.exp(NewCom); //ecode中导出
ecodeSDK.imp(NewCom); //ecode中导入

```

ecode导入、导出到全局

```
//  导出到全局

//NewBrowserForMeeting是对应组件名

ecodeSDK.setCom('${appId}','NewBrowserForMeeting',NewBrowserForMeeting);

```

```
//  从全局导入

const acParams = {
    appId:'${appId}',
    name:'NewBrowserForMeeting', //模块名称
    isPage:false, //是否是路由页面
    noCss:true, //是否禁止单独加载css，通常为了减少css数量，css默认前置加载
    props:{} //组件参数
}
class DemoNew extends React.Component {
  render() {
   return ecodeSDK.getAsyncCom(acParams)
  }
}

```

**ecode**开发

![image-20221207201508240](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20221207201508240-1680769911093.png)

创建ecode目录：

![image-20221207201541355](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20221207201541355-1680769911094.png)

发布测试：

![image-20221207201605933](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20221207201605933-1680769911094.png)



![image-20221207201605933](2023年工作计划-网站开发设计与学习前台学习-antdesign-react-1.1.1.1.1.1-v1.0.assets/image-20221207201605933.png)