
//最简单的方式就是编写 JavaScript 函数：
const props = {
    name:"lv"
 };
 function Welcome(props) {
   return <h1>Hello, {props.name}</h1>;
 }
 
 
 function ComponetProps1() {
     return (
       <div className="App">
          {Welcome(props)}
       </div>
     );
   }
   
   export default ComponetProps1;