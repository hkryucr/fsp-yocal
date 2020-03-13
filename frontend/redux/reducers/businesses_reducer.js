import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from 'actions/business_actions';
import _ from 'lodash';

const businessReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {};

    switch (action.type) {
        case RECEIVE_BUSINESSES:
            return action.businesses

        case RECEIVE_BUSINESS:
            newState[action.business.id] = action.business;
            return newState;

        default:
            return state;
    }
};

export default businessReducer;
