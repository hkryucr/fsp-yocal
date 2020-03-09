import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY } from 'actions/category_actions';
import _ from 'lodash';

const categoryReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = _.merge({}, state);

    switch (action.type) {
        case RECEIVE_CATEGORIES:
            newState = _.merge(newState, action.categories);
            return newState
            // return action.categories;

        case RECEIVE_CATEGORY:
            newState[action.category.id] = action.category;
            return newState;

        default:
            return state;
    }
};

export default categoryReducer;
