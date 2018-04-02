import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost, deletePost } from '../actions/index';

class PostsShow extends Component {
    componentDidMount() {
        //make request only if no post already set on state
        if (!this.props.post) {
            //provided by react-router
            //params object -  lists all the different wildcard tokes from our url
            const { id } = this.props.match.params;
            this.props.fetchPost(id);
        }
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return <div>Loading...</div>
        }

        return (
            <div className="post-show">
                <Link className="btn btn-primary" to="/">Back to Posts</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}

//get all posts instead of only post through the ownProps param
//ownProps are the props that are specific to only this comp
function mapStateToProps({ posts }, ownProps) {
    // console.warn('ownProps', ownProps);
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);