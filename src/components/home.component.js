import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/")
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
        console.log("here")
    }

    render() {
        return(
            <div>Hello</div>
        )
    }
}