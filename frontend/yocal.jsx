import configureStore from "store/store";
import React from "react";
import ReactDOM from "react-dom";
import Root from "js/root";
// import { login, logout, signup, fetchAllUsers} from 'actions/session_actions.js';
// import { fetchBusinesses, fetchBusiness } from 'actions/business_actions.js';
// import { fetchReviews, fetchReview } from 'actions/review_actions.js';
// import { fetchHours, fetchHour } from 'actions/hour_actions.js';
// import { fetchCategories, fetchCategory } from 'actions/category_actions.js';

document.addEventListener("DOMContentLoaded", () => {
    
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});
