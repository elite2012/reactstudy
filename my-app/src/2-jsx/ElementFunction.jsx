<h3>调用函数 并将结果嵌入到 h1元素中</h3>
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatarUrl:"sina.com.cn"
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
  
  export default Element;