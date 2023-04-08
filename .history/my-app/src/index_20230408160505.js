import React from 'react';
import ReactDOM from 'react-dom';
import App from './UI/propscomponent/reacp/1-ExtractacomponentApp/App'
//这个 Gallery 组件包含两份个人资料，其中有一些非常相似的标签
//。从中提取一个 Profile 组件以减少重复。你需要选择要传递哪些 props。

ReactDOM.render(
    <App/>,
    document.getElementById('root')

)