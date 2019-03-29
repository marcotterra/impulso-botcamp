import React, {Component} from 'react';
import BtnBotcamp from './components/BtnBotcamp'
import Logo from './components/Logo'
import './App.css'
import './assets/css/normalize.css'
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Logo />
        <BtnBotcamp />
      </div>
    )
  }
}