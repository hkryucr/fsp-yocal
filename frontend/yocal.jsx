import configureStore from "store/store";
import React from "react";
import ReactDOM from "react-dom";
import Root from "js/root";

document.addEventListener("DOMContentLoaded", () => {
    // let store;
    // if (window.currentUser) {
    //     const preloadedState = {
    //         entities: {
    //             users: { [window.currentUser.id]: window.currentUser }
    //         },
    //         session: { id: window.currentUser.id }
    //     };
    //     store = configureStore(preloadedState);
    //     delete window.currentUser;
    // } else {
    //     store = configureStore();
    // }
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});


// AIzaSyDPpH5WJxfeD4HilHL-L2ZEY_p7eEx7iTU
