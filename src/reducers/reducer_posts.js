import { FETCH_POSTS } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_POSTS:
            let posts = {};

            action.payload.data.forEach(function (post) {
                posts[post.id] = post;
            });

            return posts;
    }

    return state;
}