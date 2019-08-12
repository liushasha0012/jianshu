import React from 'react';
import ReactDOM from 'react-dom';
//CSS文件在一个文件中引入，就可以在全局中引用。所以不推荐直接引入css文件，因为容易造成不同的组件之间的样式耦合。
// import './index.css';
//采用第三方模块styled-components对样式进行管理
import './style.js';
import App from './App';
import './statics/iconfont/iconfont.js'


ReactDOM.render(<App />, document.getElementById('root'));

