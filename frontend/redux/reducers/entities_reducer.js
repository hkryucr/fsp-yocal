import { combineReducers } from "redux";
import usersReducer from "reducers/users_reducer";
import businessReducer from "reducers/businesses_reducer";
import reviewReducer from "reducers/reviews_reducer";
import hourReducer from "reducers/hours_reducer";
import categoryReducer from "reducers/categories_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    businesses: businessReducer,
    hours: hourReducer,
    reviews: reviewReducer,
    categories: categoryReducer
});

export default entitiesReducer;
