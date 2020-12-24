import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, BrowserRouter } from "react-router-dom";
import Login from './Login';
import Top from './Top';
import Signup from './Signup';
import Mypage from './Mypage';



ReactDOM.render(
  <BrowserRouter>
    <>
      {/*ログインしていないときはAppを表示（あれ？これ逆では？？） */}
      <Route exact path="/" component={App}/>
      {/*ログインしたときはLoginを表示 */}
      <Route exact path="/login" component={Login}/>
      {/*Topを表示 */}
      <Route exact path="/top" component={Top}/>
      {/*Signupを表示 */}
      <Route exact path="/signup" component={Signup}/>
      {/*mypageを表示 */}
      <Route exact path="/mypage" component={Mypage}/>
 
    </>
  </BrowserRouter>,
  document.getElementById('root')
);

