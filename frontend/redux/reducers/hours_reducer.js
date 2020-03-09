import { RECEIVE_HOURS, RECEIVE_HOUR } from 'actions/hour_actions';
import _ from 'lodash';

const hourReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = _.merge({}, state);

    switch (action.type) {
        case RECEIVE_HOURS:
            
            return action.hours;

        case RECEIVE_HOUR:
            newState[action.hour.id] = action.hour;
            return newState;

        default:
            return state;
    }
};

export default hourReducer;
