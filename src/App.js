import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {Globalstyle} from './style';
import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import store from './store';
import Write from  './pages/write';

function App() {
  return (
    <BrowserRouter>
      <Globalstyle/>
      <Provider store={store}>
        <div>
          <Header/>
          <Route path='/' exact component={Home}/>
          <Route path='/detail/:id' exact component={Detail}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/write' exact component={Write} />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
