import axios from 'axios';
import React, {Component} from 'react';

export default class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ""
        }
    }

    componentDidMount() {
        axios.get('user/id/'+this.props.id)
            .then(res => this.setState({ name: res.data.username }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <h6>{this.state.name}</h6>
        )
    }
}