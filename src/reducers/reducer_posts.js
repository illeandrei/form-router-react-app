import { FETCH_POSTS, FETCH_POST } from '../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = {...state};
            // newState[post.id] = post;
            // return newState;

            //concat post to existing list of posts
            //or the es6 version:
            return { ...state, [action.payload.data.id]: action.payload.data };

        case FETCH_POSTS:
            let posts = {};

            action.payload.data.forEach(function (post) {
                posts[post.id] = post;
            });

            return posts;
    }

    return state;
}