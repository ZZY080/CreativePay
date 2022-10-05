import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    render() {
        return (
            <div className='Mainindex'>
                <div className="Mainindex-header">
                    当日交易统计
                </div>
                <div className="Mainindex-main">
                    <ul>
                        <li>
                            <div>当日交易金额(元)</div>
                            <h2>0.00</h2>
                        </li>
                        <li>
                            <div>交易笔数</div>
                            <h2>0.00</h2>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
