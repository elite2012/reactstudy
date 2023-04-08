//以在 if 语句和 for 循环的代码块中使用 JSX，将 JSX 赋值给变量，把 JSX 当作参数传入，以及从函数中返回 JSX：
const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};
function getGreeting(user) {
  if (user) {
    return user.firstName;
  }
  return <h4>Hello, Stranger.</h4>;
};

const element =(
  <h2>
   {getGreeting("aa")}
  </h2>,
    <h2>
    {getGreeting(user)}
    </h2>
);

function Element2() {
    return (
      <div className="App">
        {element}
        <input type="text"/>
      </div>
    );
  }
  
  export default Element2;
