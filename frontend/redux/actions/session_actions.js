import * as APIUtil from "util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = (formUser) => (dispatch) => APIUtil.login(formUser).then(user => dispatch(receiveCurrentUser(user)), (err) => dispatch(receiveErrors(err.responseJSON)));

export const logout = () => (dispatch) => APIUtil.logout().then(() => dispatch(logoutCurrentUser()));

export const signup = (formUser) => (dispatch) => APIUtil.signup(formUser).then(user => { return dispatch(receiveCurrentUser(user)) }, (err) => dispatch(receiveErrors(err.responseJSON)));

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});