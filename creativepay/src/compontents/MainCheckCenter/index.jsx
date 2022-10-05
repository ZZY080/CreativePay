import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
    render() {
        return (
            <div className='MainCheckCenter'>
                <ul>
                    <li>流水明细</li>
                    <li>
                        <div className='MainCheckCenter-header'>
                            <div>
                                <span className='account'>账户</span>
                                <input type="text" placeholder='何**' />
                                <span className='checktype'>收支类型</span>
                                <input type="radio" name="check" />  全部
                                <input type="radio" name="check" />  收入
                                <input type="radio" name="check" />  支出
                            </div>
                            <div>
                                <span className='checktime'>查询时间</span>
                                <select name="start" id="">
                                    <option value="2020-08-06 14:00:00">2020-08-06 14:00:00</option>
                                    <option value="2020-08-06 14:00:01">2020-08-06 14:00:01</option>
                                </select>
                                <span className='arrival'>至</span>
                                <select name="end" id="">
                                    <option value="2020-08-06 14:00:00">2020-08-06 14:00:01</option>
                                    <option value="2020-08-06 14:00:01">2020-08-06 14:00:02</option>
                                </select>
                            </div>
                            <div>
                                <input type="button" value="查询" />
                                <input type="reset" value="重置" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <div>收入(元)</div>
                            <div>
                                <span>+</span> <span>2.00</span> <span>1笔</span>
                            </div>
                        </div>
                        <div className="right">
                            <div>支出(元)</div>
                            <div>
                                <span>-</span> <span>3.00</span> <span>1笔</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <table className='data' width="100%" align="center" border="1px" cellSpacing="0">
                            <tr>
                                <th>入账时间</th>
                                <th>交易流水号</th>
                                <th>收支金额</th>
                                <th>账户余额</th>
                                <th>交易类型</th>
                                <th>交易状态</th>
                            </tr>
                            <tr>
                                <td>2020-10-23 14:00:00</td>
                                <td>12124334555</td>
                                <td>123</td>
                                <td>6565</td>
                                <td>收入</td>
                                <td>进行当中</td>
                            </tr>
                            <tr>
                                <td>2020-10-23 14:00:00</td>
                                <td>12124334555</td>
                                <td>123</td>
                                <td>6565</td>
                                <td>收入</td>
                                <td>进行当中</td>
                            </tr>
                            <tr>
                                <td>2020-10-23 14:00:00</td>
                                <td>12124334555</td>
                                <td>123</td>
                                <td>6565</td>
                                <td>收入</td>
                                <td>进行当中</td>
                            </tr>
                        </table>
                    </li>
                </ul>
            </div>
        )
    }
}
