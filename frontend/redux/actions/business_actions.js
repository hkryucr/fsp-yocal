import * as APIUtil from 'util/business_api_util';
import { fetchReviews } from 'actions/review_actions.js';
import { fetchCategories } from 'actions/category_actions.js';
import { fetchHours } from 'actions/hour_actions.js';
import { fetchReviewers } from 'actions/reviewer_actions.js';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";

export const receiveBusinesses = (businesses) => ({
    type: RECEIVE_BUSINESSES,
    businesses
})

export const receiveBusiness = (business) => ({
    type: RECEIVE_BUSINESS,
    business
})

export const fetchBusinesses = (bounds) => (dispatch) => APIUtil.fetchBusinesses(bounds).then((res) => {
    return dispatch(receiveBusinesses(res))
})

export const fetchBusiness = (id) => (dispatch, getState) => APIUtil.fetchBusiness(id).then((res) => {
    dispatch(receiveBusiness(res))
    dispatch(fetchReviews(res.reviewIds));
    dispatch(fetchHours(res.hourIds));
    dispatch(fetchCategories(res.categoryIds));
    dispatch(fetchReviewers(res.reviewAuthorsIds));
    return
})