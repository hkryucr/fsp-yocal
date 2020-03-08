import * as APIUtil from 'util/category_api_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

export const receiveCategories = (categories) => ({
    type: RECEIVE_CATEGORIES,
    categories
})

export const receiveCategory = (category) => ({
    type: RECEIVE_CATEGORY,
    category
})

export const fetchCategories = () => (dispatch) => APIUtil.fetchCategories().then((res) => {
    return dispatch(receiveCategories(res))
})

export const fetchCategory = (id) => (dispatch) => APIUtil.fetchCategory(id).then((res) => {
    return dispatch(receiveCategory(res))
})
