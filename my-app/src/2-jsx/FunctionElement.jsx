//调用 JavaScript 函数 formatName(user) 的结果，并将结果嵌入到元素中
const user = {
    firstName: '调用 JavaScript 函数 formatName(user) 的结果，并将结果嵌入到元素Harper',
    lastName: 'Perez'
  };
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const element =(
    <h1>
      Hello,{formatName(user)}
    </h1>
  )
  
  function FunctionElement() {
      return (
        <div className="App">
          <h2> {element}</h2>
          <input type="text"/>
        </div>
      );
    }
    
    export default FunctionElement;
  