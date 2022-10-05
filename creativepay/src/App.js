import React, { Component } from 'react'
import { NavLink, Route } from "react-router-dom"
import Header from './compontents/Header/index.jsx'
// import MainIndex from "./compontents/MainIndex/index.jsx"
import  MainPersonCenter from './compontents/MainPersonCenter/index.jsx'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <MainIndex/>    */}
        <MainPersonCenter/>
      </div>
    )
  }
}
