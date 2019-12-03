import React,{Component} from 'react';
import { Route, Switch, Redirect,HashRouter,hashHistory } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import {Login} from './page/common/login/Login'
import NavBar  from './component/navBar/navBar.js'
class App extends Component {
  
  render(){
   return (        
  <HashRouter>         
<Switch>
            <Route exact path='/' component={Login}/>
  <Route exact path='/index' component={NavBar}/>
  <NavBar/>
</Switch>
    </HashRouter>
  
  )}
}

export default App;
