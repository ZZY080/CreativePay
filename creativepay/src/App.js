import React, { Component } from 'react'
import Header from './compontents/Header/index.jsx'
import Login from "./compontents/Login/Login.jsx"
import './App.css'
import { Route, Switch, Redirect } from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Header/> */}
        <Switch >
          <Route path='/Login' component={Login} />
          <Route path="/header" component={Header}/>
          <Redirect to="/Login"/>
        </Switch>
      </div>
    )
  }
}
