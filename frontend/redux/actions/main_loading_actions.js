import * as APIUtil from 'util/business_api_util';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";

export const receiveBusinesses = (businesses) => ({
    type: RECEIVE_BUSINESSES,
    businesses
})

export const fetchMainLoading = () => (dispatch) => APIUtil.fetchMainLoading().then((res) => {
    return dispatch(receiveBusinesses(res))
})