import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POSTS = 'create_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=aille123';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(values, callback) {
    //we need to make a post request to get an id for this post object,
    // rather then to just pass the values object to the state
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => {
            callback();
        });

    return {
        type: CREATE_POSTS,
        payload: request
    }
}