import React, { Component } from 'react'
import Header from './compontents/Header/index.jsx'
import MainIndex from "./compontents/MainIndex/index.jsx"
import MainPersonCenter from './compontents/MainPersonCenter/index.jsx'
import MainCheckCenter from "./compontents/MainCheckCenter/index.jsx"
import './App.css'
import {Route,Switch,Redirect} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/index" component={MainIndex}/>
          <Route path="/checkcenter" component={MainCheckCenter} />
          <Route path="/personalcenter" component={MainPersonCenter} />
          <Redirect path='/index'/>
        </Switch>
      </div>
    )
  }
}
