<h3>属性值指定为字符串字面量</h3>
const element = <a href="https://www.reactjs.org"> link </a>;

//可以使用大括号，来在属性值中插入一个 JavaScript 表达式：
const user = {
  avatarUrl:'https://sina.com.cn'

};
const elementuser = <img src={user.avatarUrl} alt="新浪"></img>;

function Element3() {
    return (
      <div className="App">
        {element},
        {elementuser}
      </div>
    );
  }

  export default Element3;