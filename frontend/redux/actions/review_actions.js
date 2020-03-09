import * as APIUtil from 'util/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
})

export const fetchReviews = (ids) => (dispatch) => APIUtil.fetchReviews(ids).then((res) => {
    return dispatch(receiveReviews(res))
})

export const fetchReview = (id) => (dispatch) => APIUtil.fetchReview(id).then((res) => {
    return dispatch(receiveReview(res))
})
