import React, { Component } from 'react'
import { NavLink} from "react-router-dom"

import './index.css'


export default class index extends Component {
    render() {
        return (
            <div className='header'>
                <ul>
                    <li>CreativePay</li>
                    <li>
                        <NavLink to="/index" activeClassName='active'>首页</NavLink>
                    </li>
                    <li>
                        <NavLink to="/checkcenter" activeClassName='active'>账单中心</NavLink>

                    </li>
                    <li>
                        <NavLink to="/personalcenter" activeClassName='active'>个人中心</NavLink>

                    </li>
                </ul>
            </div>
        )
    }
}
