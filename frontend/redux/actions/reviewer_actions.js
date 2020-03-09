import * as APIUtil from 'util/reviewer_api_util';

export const RECEIVE_ALL_REVIEWERS = 'RECEIVE_ALL_REVIEWERS'
export const RECEIVE_REVIEWERS = 'RECEIVE_REVIEWERS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveAllReviewers = (reviewers) => ({
    type: RECEIVE_ALL_REVIEWERS,
    reviewers
})

export const receiveReviewers = (reviewers) => ({
    type: RECEIVE_REVIEWERS,
    reviewers
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const fetchAllReviewers = () => (dispatch) => APIUtil.fetchAllReviewers().then(reviewers => dispatch(receiveAllReviewers(reviewers)), (err) => dispatch(receiveErrors(err.responseJSON)));

export const fetchReviewers = (ids) => (dispatch) => APIUtil.fetchReviewers(ids).then(reviewers => dispatch(receiveReviewers(reviewers)), (err) => dispatch(receiveErrors(err.responseJSON)));
