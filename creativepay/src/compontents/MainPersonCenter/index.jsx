import React, { Component } from 'react'
import "./index.css"
export default class index extends Component {
    render() {
        return (
            <div className='MainPersonCenter'>
                <div className="MainPersonCenter-header">
                    登录账号信息
                </div>
                <div className="MainPersonCenter-footer">
                    <ul>
                        <li>
                            <span>昵称</span>
                            <input type="text" placeholder='何**'/>
                        </li>
                        <li>
                            <span>用户名</span>
                            <input type="text" placeholder='29163636**' />
                            <button>变更</button>
                        </li>
                        <li>
                            <span>密码</span>
                            <input type="password" placeholder='15151**' />
                            <button>变更</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
