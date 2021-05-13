import React, {Component} from 'react';
import axios from 'axios';

export default class CreatePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post_title: "",
            post_body : ""
        }

        this.create = this.create.bind(this);
        this.onChangePostBody = this.onChangePostBody.bind(this);
        this.onChangePostTitle = this.onChangePostTitle.bind(this);
    }

    create(e) {
        e.preventDefault();
        const input = {
            id: localStorage.getItem('userid'),
            title: this.state.post_title,
            body: this.state.post_body
        }
        axios.post("posts/create", input)
            .then(res => {
                console.log(res);
                window.location = '/';
            })
            .catch(err => console.log(err));
    }

    onChangePostTitle(e) {
        this.setState({
            post_title: e.target.value
        })
    }

    onChangePostBody(e) {
        this.setState({
            post_body: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Create Post</h3>
                <form onSubmit={this.create}>
                    <input style={{width: "100%"}} type="text" id="post_title" name="post_title" value={this.state.post_title} onChange={this.onChangePostTitle}/><br/>
                    <textarea style={{width: "100%", height: "500px"}} type="text" id="post_body" name="post_body" value={this.state.post_body} onChange={this.onChangePostBody}/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}