import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }

        this.create = this.create.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
    }

    create(e) {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post("user", newUser)
            .then(res => {
                if (!res.data) {
                    // if username not found
                    axios.post("user/create", newUser)
                        .then(res => console.log(res))
                        .catch(err => console.log(err))
                }
            })
            .catch(err => console.log(err));
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

    render() {
        return (
            <div>
                <h2>Create User</h2>
                <form onSubmit={this.create}>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.onChangeUsername}/><br/>
                    <label for="password">Password:</label>
                    <input type="text" password="password" name="password" value={this.state.password} onChange={this.onChangePassword}/><br/>
                    <input type="submit" value="Submit"/>
                </form>
                <Link exact="true" to="/" className="nav-link">Home</Link>
            </div>
        )
    }
}