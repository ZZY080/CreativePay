import React, { Component } from 'react'
import './Login.css'
import axios from 'axios'
import { message } from 'antd'
import "antd/dist/antd.css"
import { } from "react-router-dom"

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            currentView: "signUp"
        }
    }

    changeView = (view) => {
        this.setState({
            currentView: view
        })
    }
    handleLogin = async (event) => {
        event.preventDefault();
        const { Username, Password } = event.target;
        let dataLog = await axios.post('https://api.cp.akagiyui.com/user/login', {
            username: Username.value,
            password: Password.value,
        })
        if (dataLog.data.code === 200) {
            message.info('登录成功');
            let token = 'Bearer ' + dataLog.data.data;
            sessionStorage.setItem('Authorization', token);
            this.props.history.push('/header');
        }
    }
    handleRegister = async (event) => {
        event.preventDefault()
        const { NickName, Username, Password } = event.target;
        let regData = await axios.post('https://api.cp.akagiyui.com/user/register', {
            nickname: NickName.value,
            username: Username.value,
            password: Password.value,
        })
        if (regData.data.code === 200) {
            console.log(regData)
            message.info('注册账户成功');
            this.AcBtn.click();
            return;
        }
        else {
            message.info('用户名或昵称已存在，请重新注册');
        }
    }
    currentView = () => {
        switch (this.state.currentView) {
            case "signUp":
                return (
                    <form onSubmit={this.handleRegister}>
                        <h2>Sign Up!</h2>
                        <fieldset>
                            <legend>Create Account</legend>
                            <ul>
                                <li>
                                    <label for="NickName">NickName:</label>
                                    <input type="text" id="NickName" name="NickName" required />
                                </li>
                                <li>
                                    <label for="Username">Username:</label>
                                    <input type="text" id="Username" required />
                                </li>
                                <li>
                                    <label for="Password">Password:</label>
                                    <input type="password" id="Password" required />
                                </li>
                            </ul>
                        </fieldset>
                        <button>Submit</button>
                        <button type="button" ref={(e) => { this.AcBtn = e }} onClick={() => this.changeView("logIn")}>Have an Account?</button>
                    </form>
                )
                break
            case "logIn":
                return (
                    <form onSubmit={this.handleLogin}>
                        <h2>Welcome CreativePay</h2>
                        <fieldset>
                            <legend>Log In</legend>
                            <ul>
                                <li>
                                    <label for="Username">Username:</label>
                                    <input type="text" id="Username" name='Username' required />
                                </li>
                                <li>
                                    <label for="Password">Password:</label>
                                    <input type="password" id="password" name="Password" required />
                                </li>
                            </ul>
                        </fieldset>
                        <button>Login</button>
                        <button type="button" onClick={() => this.changeView("signUp")}>Create an Account</button>
                    </form>
                )
                break
            default:
                break
        }
    }
    render() {
        return (
            <section id="entry-page">
                {this.currentView()}
            </section>
        )
    }
}
