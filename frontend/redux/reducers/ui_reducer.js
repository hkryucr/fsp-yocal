import { combineReducers } from "redux";
import filtersReducer from "reducers/filters_reducer";

const uiReducer = combineReducers({
    filters: filtersReducer
});

export default uiReducer;
