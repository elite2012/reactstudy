<h3>在 JSX 中嵌入表达式</h3>
const name="Josh Perez";
const element =<h1>在 JSX 中嵌入表达式,{name}</h1>
function Element() {
    return (
      <div className="App">
        <h2> {element}</h2>
        <input type="text"/>
      </div>
    );
  }
  
  export default Element;