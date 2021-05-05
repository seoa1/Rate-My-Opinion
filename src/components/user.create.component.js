import React, {Component} from 'react';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.checkLogin}>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.onChangeUsername}/><br/>
                    <label for="password">Password:</label>
                    <input type="text" password="password" name="password" value={this.state.password} onChange={this.onChangePassword}/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}