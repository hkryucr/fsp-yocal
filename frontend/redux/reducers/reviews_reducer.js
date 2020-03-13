import { RECEIVE_REVIEWS, RECEIVE_REVIEW, CREATE_REVIEW, DELETE_REVIEW } from 'actions/review_actions';
import _ from 'lodash';

const reviewReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = _.merge({}, state);

    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews;

        case DELETE_REVIEW:
            delete newState[action.review.id];
            return newState;
            
        case CREATE_REVIEW:
            newState[action.review.id] = action.review;
            return newState;

        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review;
            return newState;

        default:
            return state;
    }
};

export default reviewReducer;
