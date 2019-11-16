import React,{Component} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import {WrappedNormalLoginForm} from './component/Login.js'
class App extends Component {
  render(){
  return (
    
 <WrappedNormalLoginForm  ></WrappedNormalLoginForm>
  
  )}
}

export default App;
