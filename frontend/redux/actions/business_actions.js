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

export const fetchBusinesses = () => (dispatch) => APIUtil.fetchBusinesses().then((res) => {
    return dispatch(receiveBusinesses(res))
})

export const fetchBusiness = (id) => (dispatch, getState) => APIUtil.fetchBusiness(id).then((res) => {
    dispatch(receiveBusiness(res))
    dispatch(fetchReviews(getState().entities.businesses[id].reviewIds));
    dispatch(fetchHours(getState().entities.businesses[id].hourIds));
    dispatch(fetchCategories(getState().entities.businesses[id].categoryIds));
    dispatch(fetchReviewers(getState().entities.businesses[id].reviewAuthorsIds));
    return
})