import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import MainIndex from "../MainIndex/index.jsx"
import MainPersonCenter from '../MainPersonCenter/index.jsx'
import MainCheckCenter from "../MainCheckCenter/index.jsx"
import { Route, Switch, Redirect } from "react-router-dom"


import './index.css'


export default class index extends Component {
    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <ul>
                        <li>CreativePay</li>
                        <li>
                            <NavLink to="/header/index" activeClassName='active' >首页</NavLink>
                        </li>
                        <li>
                            <NavLink to="/header/checkcenter" activeClassName='active'>账单中心</NavLink>

                        </li>
                        <li>
                            <NavLink to="/header/personalcenter" activeClassName='active'>个人中心</NavLink>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route path="/header/index" component={MainIndex} />
                    <Route path="/header/checkcenter" component={MainCheckCenter} />
                    <Route path="/header/personalcenter" component={MainPersonCenter} />
                    <Redirect to="/header/index"/>
                </Switch>
            </div>
        )
    }
}
