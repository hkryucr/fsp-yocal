import { combineReducers } from "redux";
import entitiesReducer from "reducers/entities_reducer";
import sessionReducer from "reducers/session_reducer";
import errorsReducer from "reducers/errors_reducer";
import uiReducer from "reducers/ui_reducer";

import appReducer from 'reducers/app_reducer';
import CLEAR_UP_DATA from 'actions/clearup_actions';

const rootReducer = (state, action) => {
    if (state.entities === undefined){
        return appReducer(state, action)
    }
    
    const curUsers = state.entities.users;
    if (action.type === 'CLEAR_UP_DATA') {
        state.entities = {};
        state.entities.users = curUsers;
    }

    return appReducer(state, action)
}

export default rootReducer;