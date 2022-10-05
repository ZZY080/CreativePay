import React, { Component } from 'react'

import './index.css'


export default class index extends Component {
    render() {
        return (
            <div className='header'>
                <ul>
                    <li>CreativePay</li>
                    <li>
                        <a href="#">首页</a>
                    </li>
                    <li>
                        <a href="#">账单中心</a>
                    </li>
                    <li>
                        <a href="#">个人中心</a>
                    </li>
                </ul>
            </div>
        )
    }
}
