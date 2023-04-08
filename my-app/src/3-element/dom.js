// 将一个元素渲染为 DOM

const element = <h1>Hello,world-将一个元素渲染为 DOM</h1>;
function Element() {
    return (
      <div className="App">
        <h2> {element}</h2>
      </div>
    );
  }
export default Element;