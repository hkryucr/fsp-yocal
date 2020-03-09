import { RECEIVE_ALL_REVIEWERS, RECEIVE_REVIEWERS } from 'actions/reviewer_actions';
import _ from 'lodash';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = _.merge({}, state);

    switch (action.type) {
        case RECEIVE_REVIEWERS:
            return action.reviewers

        case RECEIVE_ALL_REVIEWERS:
            return action.reviewers

        default:
            return state;
    }
};

export default usersReducer;
