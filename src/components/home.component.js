import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import User from './user.component';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            posts: []
        }
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        axios.get("home")
            .then(res => {
                axios.get("posts")
                    .then(res => {
                        this.setState({
                            posts: res.data
                        });
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => {
                if (err.response && err.response.status === 401) {
                    window.location = '/login';
                }
                console.log(err);
            });
    }

    createPosts() {
        return (
            this.state.posts.map((el, i) => (
                <div key={i} style={{"border-style":"solid", padding:"8px"}}>
                    <User id={el.author}/>
                    <h5>{el.title}</h5>
                    <p>{el.body}</p>
                    {localStorage.getItem('userid') === el.author ? <Link onClick={this.deletePost.bind(this, i, el._id)}>Delete</Link> : <br/>}
                </div>
            ))
        )
    }

    deletePost(i, id) {
        const input = {
            id
        }
        axios.post('posts/delete', input)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        let posts = [...this.state.posts];
        posts.splice(i,1);
        this.setState({ posts });
    }

    logout(e) {
        e.preventDefault();
        localStorage.setItem('token', '');
        localStorage.setItem('userid', '');
        window.location = '/';
    }

    render() {
        return(
            <div>
                <Link to="/" onClick={this.logout}>Logout</Link>
                <Link to="/posts/create" style={{margin:"5rem"}}>Create Post</Link>
                <br/>
                {this.createPosts()}
            </div>
        )
    }
}