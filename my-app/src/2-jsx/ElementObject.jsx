<h3>元素对象</h3>
// 注意：这是简化过的结构
const Element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
function Element6() {
  return (
    <div className="App">
      {Element.className},
      {Element.children}
    </div>
  );
}

  export default Element6;