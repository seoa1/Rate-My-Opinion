import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
        this.logout = this.logout.bind(this);
    }
    componentDidMount() {
        axios.get("home")
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                if (err.response.status === 401) {
                    window.location = '/login';
                }
                console.log(err);
            });
    }

    logout(e) {
        e.preventDefault();
        localStorage.setItem('token', '');
        window.location = '/';
    }

    render() {
        return(
            <div>Hello
                <Link to="/" onClick={this.logout}>Logout</Link>
            </div>
        )
    }
}