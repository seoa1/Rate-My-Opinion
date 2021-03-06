import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            incorrect: false
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    checkLogin(e) {
        e.preventDefault();

        const login = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post("user/login", login)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userid', res.data.id);
                window.location = '/';
            })
            .catch(err => {
                this.setState({
                    username: "",
                    password: "",
                    incorrect: true
                });
            });
    }

    render() {
        return( 
            <div>
                <h2>Login</h2>
                <form onSubmit={this.checkLogin}>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.onChangeUsername}/><br/>
                    <label for="password">Password:</label>
                    <input type="text" password="password" name="password" value={this.state.password} onChange={this.onChangePassword}/><br/>
                    <input type="submit" value="Submit"/>
                </form>
                {this.state.incorrect ? <p style={{color: "red"}}><br/>User not found!</p> : <p><br/><br/></p>}
                <Link to="/user/create" className="nav-link">Create User</Link>
                <Link exact="true" to="/" className="nav-link">Home</Link>
            </div>
        )
    }
}