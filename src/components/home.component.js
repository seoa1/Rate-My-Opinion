import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }
    componentDidMount() {
        console.log(localStorage.getItem('token'));
        axios.get("home")
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err.response.status);
                if (err.response.status === 401) {
                    window.location = '/';
                }
                console.log(err);
            });
    }

    render() {
        return(
            <div>Hello</div>
        )
    }
}