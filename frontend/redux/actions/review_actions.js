import * as APIUtil from 'util/review_api_util';
import { fetchBusiness } from 'actions/business_actions';
import { clearupData } from 'actions/clearup_actions';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";


export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
})

export const makeReview = (review) => ({
    type: CREATE_REVIEW,
    review
})

export const destroyReview = (review) => ({
    type: DELETE_REVIEW,
    review
})

export const deleteReview = (id) => (dispatch) => APIUtil.deleteReview(id).then((res) => {
    dispatch(destroyReview(res))
    dispatch(clearupData())
    return dispatch(fetchBusiness(parseInt(res.businessId)));
})

export const fetchReviews = (ids) => (dispatch) => APIUtil.fetchReviews(ids).then((res) => {
    return dispatch(receiveReviews(res))
})

export const fetchReview = (id) => (dispatch) => APIUtil.fetchReview(id).then((res) => {
    return dispatch(receiveReview(res))
})

export const createReview = (review) => (dispatch) => APIUtil.createReview(review).then((res)=>{
    return dispatch(makeReview(res))
})